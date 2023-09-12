(ns scramblies.calculate.routes
  (:require [scramblies.calculate.main :refer [scramble?]]
            [scramblies.calculate.spec :refer [allowed? scramble-route-response-spec]]
            [jsonista.core :as json]))

(defn handle-scramble [{{{:keys [str1 str2]} :query} :parameters}]
  {:status 200
   :body   {:scramble (scramble? str1 str2)}})

(defn scramble-route
  []
  ["/scramble"
   {:get {:summary    "accepts two strings in a request and applies function scramble function"
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
          :responses  {200 {:body scramble-route-response-spec}}
          :handler    #'handle-scramble}}])




