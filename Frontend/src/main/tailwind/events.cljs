(ns tailwind.events
  (:require [tailwind.db :refer [initial-state-db]]
            [re-frame.core :as rf :refer [path]]
            [clojure.walk :as w]
            [day8.re-frame.http-fx]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [ajax.core :refer [GET] :as ajax]
            [ajax.edn]))



(rf/reg-event-fx :initialize
                 (fn [_db _event]
                   {:db initial-state-db}))



(rf/reg-event-fx
  ::success
  (fn [{:keys [db]} [_ coll]]
    (let [resp (->> coll
                    (w/keywordize-keys))
          _ (js/console.log "success! " coll " *** " resp)]
      {:db (assoc db :error nil
                     :success resp)})))



(rf/reg-event-fx
  ::error
  (fn [{:keys [db]} [_ coll]]
    (let [resp (->> coll
                    (w/keywordize-keys))]
      {:db (assoc db :error resp
                     :success nil)})))



(rf/reg-event-fx
  :possible-rearrange?
  (fn-traced [{:keys [db]} [_ str1 str2]]
             (let []
               {:http-xhrio {:uri             "http://localhost:3000/v1/scramble"
                             :method          :get
                             :params          {:str1 str1 :str2 str2}
                             :on-success      [::success]
                             :on-failure      [::error]
                             ;:on-request      [::track-slow-request "my-request"]
                             :format          (ajax.json/json-request-format)
                             :response-format (ajax/ring-response-format {:format (ajax/json-response-format)})}})))




