(ns backend.router
  (:require [reitit.ring :as ring]
            [reitit.coercion.malli]
            [reitit.ring.malli]
            [reitit.swagger-ui :as swagger-ui]
            [backend.config :refer [swagger-docs openapi-docs
                                       router-config]]
            [backend.calculate.routes :refer [scramble-route]]))


(defn swagger-routes
  []
  (swagger-ui/create-swagger-ui-handler
    {:path   "/"
     :config {:validatorUrl     nil
              :urls             [{:name "swagger", :url "swagger.json"}
                                 {:name "openapi", :url "openapi.json"}]
              :urls.primaryName "openapi"
              :operationsSorter "alpha"}}))


(defn routes [env]
  (ring/ring-handler
    (ring/router
      [swagger-docs
       openapi-docs
       ["/v1"
        {:openapi {:tags ["v1"]}}
        (scramble-route)]]
      router-config)
    (ring/routes (swagger-routes)
                 (ring/create-default-handler))))


