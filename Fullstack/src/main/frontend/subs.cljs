(ns frontend.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
  :success-response
  (fn [db _]
    (-> db :success)))

(rf/reg-sub
  :error-response
  (fn [db _]
    (-> db :error :response :body :humanized )))

; :response :body :humanize