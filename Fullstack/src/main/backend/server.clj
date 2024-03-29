(ns backend.server
  (:require [ring.adapter.jetty :as jetty]
            [shadow.cljs.devtools.api :as cljs]
            [shadow.cljs.devtools.server :as shadow]
            [integrant.core :as ig]
            [environ.core :refer [env]]
            [backend.router :as router]))

(defn app
  [env]
  (router/routes env))

(defmethod ig/prep-key :server/jetty
  [_ config]
  (merge config {:port (Integer/parseInt (env :port))}))

(defmethod ig/init-key :server/jetty
  [_ {:keys [handler port]}]
  (println (str "\nServer running on port " port))
  (jetty/run-jetty handler {:port port :join? false}))

(defmethod ig/init-key :scramblies/app
  [_ config]
  (println "\nStarted app")
  (app config))

(defmethod ig/init-key :db/postgres
  [_ config]
  (println "\nConfigured db")
  (:jdbc-url config))

(defmethod ig/halt-key! :server/jetty
  [_ jetty]
  (.stop jetty))

#_(defmethod ig/init-key :shadow/server
  [_ {:keys [handler]}]
  (shadow/start!)
  (cljs/watch :app))

#_(defmethod ig/halt-key! :shadow/server
  [_ _build-id]
  (shadow/stop!)
  (cljs/stop-worker :app))

(shadow/start!)
(cljs/watch :app)

(defn -main
  [config-file]
  (let [config (-> config-file slurp ig/read-string)]
    (-> config ig/prep ig/init)))

(comment
  (app {:request-method :get
        :uri "/v1/scramble?str1=al.ma&str2=a"})
  (-main))
