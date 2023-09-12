(ns user
  (:require [shadow.cljs.devtools.api :as cljs]))

(defn cljs-repl []
  (cljs/repl :app))

(comment



  (cljs-repl)

  )