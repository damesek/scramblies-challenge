(ns main.tailwind.app-test
  (:require [clojure.test :refer [deftest testing is]]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [day8.re-frame.http-fx]
            [clojure.walk :as w]
            [re-frame.core :as rf]
            [ajax.core :as ajax]
            [re-frame.db]
            [tailwind.events]))


; npx shadow-cljs watch test-kaocha
; do you need clear the results and re-run the tests,
; works but not always run the tests with one click


(deftest passing-tests->test-the-test-engine
  (is (= 1 (inc 0)))
  (is (pos-int? 5)))


(rf/reg-event-fx
  ::success-test
  (fn [{:keys [db]} [_ coll]]
    (let [resp (->> coll
                    (w/keywordize-keys))]
      {:db (assoc db :error-test nil
                     :success-test resp)})))



(rf/reg-event-fx
  ::error-test
  (fn [{:keys [db]} [_ coll]]
    (let [resp (->> coll
                    (w/keywordize-keys))
          _ (js/console.log "error! " coll " *** " (js->clj resp))]
      {:db (assoc db :error-test resp
                     :success-test nil)})))



(rf/reg-event-fx
  :possible-rearrange?-test
  (fn-traced [{:keys [db]} [_ str1 str2]]
             (let []
               {:http-xhrio {:uri             "http://localhost:3000/v1/scramble"
                             :method          :get
                             :params          {:str1 str1 :str2 str2}
                             :on-success      [::success-test]
                             :on-failure      [::error-test]
                             ;:on-request      [::track-slow-request "my-request"]
                             :format          (ajax.json/json-request-format)
                             :response-format (ajax/ring-response-format {:format (ajax/json-response-format)})}})))


; cljs2 kaocha not so stable..
(deftest test-the-server-connection
  (testing "First run the APP always. Test not allowed char case."
    (let [_ (rf/dispatch [:possible-rearrange?-test "hello" "h.e"])]
      (is (= 400 (-> @re-frame.db/app-db :error-test :response :status)))))
  (testing "First run the APP always. Test with arrangable strings."
    (let [_ (rf/dispatch [:possible-rearrange?-test "hello" "he"])]
      (is (= 200 (-> @re-frame.db/app-db :success-test :status))))))



(deftest failing-tests->test-the-test-engine
  (testing "These tests are regular assertion failures"
    (is (= 1 2))

    (is (= [{:x 1} {:y 2} {:z 3}]
           [{:x 1} {:y 0} {:z 3}]))

    ))
