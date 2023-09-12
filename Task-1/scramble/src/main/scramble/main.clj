(ns scramble.main
  (:require [clojure.string :refer [replace-first]]
            [malli.core :as m]
            [malli.error :as me]))


(def ^:private first-char (int \a))
(def ^:private alphabet-size 26)
(def ^:private last-char (+ first-char (dec alphabet-size)))



(defn scramble
  "original core, selected function by performance"
  [s1 s2]
  (empty?
    (reduce #(replace-first %1 %2 "") s2 s1)))



(defn- valid-char?
  "Validation logic for the input.
   We check here: small letters (a-z) or not."
  [char-int]
  (cond (>= (dec first-char) char-int) (reduced false)
        (<= last-char char-int)        (reduced false)
        :else true))



(defn- allowed-chars?
  "Only lower case letters will be used (a-z).
   No punctuation, special chars or digits could
   be included. All empty string is valid."
  [str]
  (cond
    (empty? str) true
    :else (reduce #(let [char-int (int %2)]
                     (valid-char? char-int))
                  false str)))



(def allowed?
  "Malli schema for the allowed characters."
  [:and [:string {:min 0}]
   [:fn {:error/message "Must be lowercase without special chars"}
    #(allowed-chars? %)]])



(defn- validate-or-explain
  "If the value is valid, returns true;
   otherwise explains the error."
  [schema val]
  (if (m/validate schema val)
    true
    (-> (m/explain schema val)
        (me/humanize))))



(defn- possible-rearrange?
  "Complete the function (scramble str1 str2) that returns true if
   a portion of str1 characters can be rearranged to match str2,
   otherwise returns false"
  [str1 str2]
  (empty?
    (reduce #(replace-first %1 %2 "") str2 str1)))



(defn scramble?
  "If the strings are rearrangeable, returns true; otherwise,
  returns false. Malli pre-validation checks that both strings contain
  only allowed characters."
  [str1 str2]
  (let [v1 (validate-or-explain allowed? str1)
        v2 (validate-or-explain allowed? str2)]
    (if (and (true? v1) (true? v2))
      (possible-rearrange? str1 str2)
      {:str1 v1
       :str2 v2})))





