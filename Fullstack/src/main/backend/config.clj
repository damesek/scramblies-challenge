(ns backend.config
  (:require [reitit.coercion.malli]
            [reitit.openapi :as openapi]
            [reitit.ring.malli]
            [reitit.swagger :as swagger]
            [reitit.ring.coercion :as coercion]
            [reitit.dev.pretty :as pretty]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [reitit.ring.middleware.exception :as exception]
            [reitit.ring.middleware.multipart :as multipart]
            [reitit.ring.middleware.parameters :as parameters]
            [ring.middleware.cors :refer [wrap-cors]]
            [muuntaja.core :as m]
            [malli.util :as mu]))


(def swagger-docs
  ["/swagger.json"
   {:get {:no-doc  true
          :swagger {:info {:title       "Scramblies API"
                           :description "Complete the function (scramble str1 str2) that returns true if a portion of str1
                                         characters can be rearranged to match str2, otherwise returns false."
                           :version     "0.0.1"}
                    :tags [{:name        "v1",
                            :description "v1-api"}]}
          :handler (swagger/create-swagger-handler)}}])


(def openapi-docs
  ["/openapi.json"
   {:get {:no-doc  true
          :openapi {:info {:title       "Scramblies API"
                           :description "Complete the function (scramble str1 str2) that returns true if a portion of str1
                                         characters can be rearranged to match str2, otherwise returns false"
                           :version     "0.0.1"}}
          :tags    [{:name        "v1",
                     :description "v1-api"}]
          :handler (openapi/create-openapi-handler)}}])


(def router-config
  {;;:reitit.middleware/transform dev/print-request-diffs ;; pretty diffs
   ;; :validate spec/validate ;; enable spec validation for route data
   ;;:reitit.spec/wrap spell/closed ;; strict top-level validation
   :exception pretty/exception
   :data      {:coercion   (reitit.coercion.malli/create
                             {;; set of keys to include in error messages
                              :error-keys       #{#_:type :coercion :in :schema :value :errors :humanized #_:transformed}
                              ;; schema identity function (default: close all map schemas)
                              :compile          mu/closed-schema
                              ;; strip-extra-keys (effects only predefined transformers)
                              :strip-extra-keys true
                              ;; add/set default values
                              :default-values   true
                              ;; malli options
                              :options          nil})
               :muuntaja   m/instance
               :middleware [[wrap-cors
                             :access-control-allow-origin [#".*"]
                             :access-control-allow-methods [:get :put :post :patch :delete]]
                            ;; swagger & openapi
                            swagger/swagger-feature
                            openapi/openapi-feature
                            ;; query-params & form-params
                            parameters/parameters-middleware
                            ;; content-negotiation
                            muuntaja/format-negotiate-middleware
                            ;; encoding response body
                            muuntaja/format-response-middleware
                            ;; exception handling
                            exception/exception-middleware
                            ;; decoding request body
                            muuntaja/format-request-middleware
                            ;; coercing response bodys
                            coercion/coerce-response-middleware
                            ;; coercing request parameters
                            coercion/coerce-request-middleware
                            ;; multipart
                            multipart/multipart-middleware]}})
