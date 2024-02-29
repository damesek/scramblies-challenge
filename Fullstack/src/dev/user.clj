(ns user
  (:require [integrant.repl :as ig-repl]
            [integrant.core :as ig]
            [integrant.repl.state :as state]
            [backend.server]))


(ig-repl/set-prep!
  (fn [] (-> "src/resources/config.edn" slurp ig/read-string)))

(def go ig-repl/go)
(def halt ig-repl/halt)
(def reset ig-repl/reset)
(def reset-all ig-repl/reset-all)

(def app (-> state/system :scramblies/app))
(def db (-> state/system :db/postgres))



(comment
(go)


  ;(require '[martian.core :as martian]
  ;         '[martian.clj-http :as martian-http]
  ;         '[martian.interceptors :as mi])
  ;
  ;(let [m (martian-http/bootstrap-openapi "http://localhost:3000/openapi.json"
  ;                                        {:server-url "http://localhost:3000"})]
  ;  (martian/response-for m :get-scramble {:str1 "dsdas"
  ;                                         :str2 "dsd.s"}))

  )
