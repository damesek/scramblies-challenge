(ns scramblies.system-test
  (:require [clojure.test :refer :all]
            [integrant.repl.state :as state]
            [ring.mock.request :as mock]
            [muuntaja.core :as m]
            [clj-http.client :as http]
            [cheshire.core :as json]
            [martian.core :as martian]
            [martian.httpkit :as martian-http]
            [scramblies.server :refer :all])
  (:import [java.net URLEncoder]))




(defn test-endpoint [method uri]
  (let [api (app state/system)]
    (when api
      (let [response (api (mock/request method uri))]
        (when response
          (update response :body #(m/decode "application/json" (slurp %))))))))




(defn api-test [uri]
  (let [resp (test-endpoint :get uri)]
    (case (:status resp)
      400 (->> resp :body :humanized)
      200 (->> resp :body :scramble)
      ["Unexpected or nil status: " (:status resp)])))




(deftest system-api-test
  (testing "With not allowed special characters"
    (let [resp (api-test "/v1/scramble?str1=al.ma&str2=a")]
      (is (= {:str1 ["Must be lowercase without special chars"]} resp))))
  (testing "With capital letters"
    (let [resp (api-test "/v1/scramble?str1=alLma&str2=a")]
      (is (= {:str1 ["Must be lowercase without special chars"]} resp))))
  (testing "str1 characters can rearranged to match str2"
    (let [resp (api-test "/v1/scramble?str1=alma&str2=a")]
      (is resp)))
  (testing "str1 characters can't rearranged to match str2"
    (let [resp (api-test "/v1/scramble?str1=alma&str2=aka")]
      (is (false? resp))))
  (testing "str2 with nil value"
    (let [resp (api-test "/v1/scramble?str1=alma&str2=")]
      (is (= {:str2 ["should be at least 1 characters"]} resp)))))



(defn client-ingetration-test
  [method url & {:as opts}]
  (-> (http/request (merge {:method           method
                            :url              url
                            :throw-exceptions false
                            :headers          {"origin" "http://localhost:8020"}}
                           opts))
      ((juxt :status (comp json/decode :body)
             :headers))))



(deftest system-api-test--client-side
  "We test here the server and client communication"
  (testing "With a rearrangable option"
    (is (= {"scramble" true} (->> (client-ingetration-test :get
                                                           "http://localhost:3000/v1/scramble?str1=appletree&str2=apple")
                                  second))))
  (testing "With a special chars, response 4xx"
    (is (= {:str2 ["Must be lowercase without special chars"]}
           (->> (client-ingetration-test :get
                                         "http://localhost:3000/v1/scramble?str1=appletree&str2=apple.")
                second
                (clojure.walk/keywordize-keys)
                :humanized)))))



(deftest system-openapi-test
  "We test the openapi functionality"
  (let [m (martian-http/bootstrap-openapi "http://localhost:3000/openapi.json"
                                          {:server-url "http://localhost:3000"})]
    (testing "Explore the endpoint"
      (is (= [[:get-scramble "accepts two strings in a request and applies function scramble function"]]
             (martian/explore m))))
    (testing "Get response from the endpoint"
      (is (->> @(martian/response-for m :get-scramble {:str1 "dsdas"
                                                       :str2 "dsds"})
               :body
               :scramble)))))
