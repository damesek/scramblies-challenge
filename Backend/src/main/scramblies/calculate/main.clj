(ns scramblies.calculate.main
  (:require [clojure.string :refer [replace-first]]
            [malli.core :as m]
            [malli.error :as me]))



(defn validate-or-explain
  "If the value is valid, returns true;
   otherwise explains the error."
  [schema val]
  (if (m/validate schema val)
    true
    (-> (m/explain schema val)
        (me/humanize))))



(defn scramble?
  "If the strings are rearrangeable, returns true; otherwise,
  returns false. Malli pre-validation checks that both strings contain
  only allowed characters."
  [str1 str2]
  (empty?
    (reduce #(replace-first %1 %2 "") str2 str1)))
