(ns backend.calculate.routes
  (:require [backend.calculate.main :refer [scramble?]]
            [backend.calculate.spec :refer [allowed? scramble-route-response-spec]]))


(defn handle-scramble [{{{:keys [str1 str2]} :query} :parameters}]
   {:status 200
   :body   {:scramble (scramble? str1 str2)}})


(defn scramble-route
  []
  ["/scramble"
   {:get {:openapi {:operationId "get-scramble"
                    :deprecated false
                    :responses {400 {:description "kosh"
                                     :content {"application/json" {:schema {:type "string"}}}}}}
          :description "Check rearrangable by Str1 <> Str2. Both required."
          :summary    "accepts two strings in a request and applies function scramble function"
          :parameters {:query [:map
                               [:str1
                                {:title               "str1 string"
                                 :description         "Just small english letters allowed"
                                 :json-schema/default "appletree"}
                                allowed?]
                               [:str2
                                {:title               "str2 string"
                                 :description         "Just small english letters allowed"
                                 :json-schema/default "apple"}
                                allowed?]]}
          :responses  {200 {:body scramble-route-response-spec
                            :description "200 response"}
                       }
          :handler    #'handle-scramble}}])


