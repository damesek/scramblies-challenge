(ns user
  (:require [cheshire.core :as json]
            [integrant.repl :as ig-repl]
            [integrant.core :as ig]
            [integrant.repl.state :as state]
            [scramblies.server]
            [clj-http.client :as http]))


(ig-repl/set-prep!
  (fn [] (-> "src/resources/config.edn" slurp ig/read-string)))

(def go ig-repl/go)
(def halt ig-repl/halt)
(def reset ig-repl/reset)
(def reset-all ig-repl/reset-all)

(def app (-> state/system :scramblies/app))
(def db (-> state/system :db/postgres))


;(comment
;  (-> {:method :get :uri "/index.html"}
;      ((swagger-routes))
;      (update :body slurp))
;
;  (-> {:method     :get :uri "/v1/scramble"
;       :parameters {:query {:str1 "1" :str2 "2"}}}
;      ((ring/ring-handler
;         (ring/router
;           [swagger-docs
;            openapi-docs
;            ["/v1"
;             {:tags ["v1 API"]}
;             (scramble-route)]]
;           router-config)))
;      #_(update :body #(some-> % slurp)))
;
;
;  (-> (ring/router
;        [swagger-docs
;         openapi-docs
;         ["/v1"
;          {:tags ["v1 API"]}
;          (scramble-route)]]
;        router-config)
;      (reitit.core/routes
;        (swagger-ui/create-swagger-ui-handler
;          {:path   "/"
;           :config {:validatorUrl     nil
;                    :urls             [{:name "swagger", :url "swagger.json"}
;                                       {:name "openapi", :url "openapi.json"}]
;                    :urls.primaryName "openapi"
;                    :operationsSorter "alpha"}})
;        ))
;
;  )