(ns scramblies.calculate.spec
  (:require [malli.core :as m]
            [malli.error :as me]))


(def ^:private first-char (int \a))
(def ^:private alphabet-size 26)
(def ^:private last-char (+ first-char (dec alphabet-size)))



(defn- valid-char?
  "Validation logic for the input.
   We check here: small letters (a-z) or not."
  [char-int]
  (cond (>= (dec first-char) char-int) (reduced false)
        (<= last-char char-int)        (reduced false)
        :else true))



(defn allowed-chars?
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
  [:and [:string {:min 1}]
   [:fn {:error/message "Must be lowercase without special chars"}
    #(allowed-chars? %)]])



(def scramble-route-response-spec
  [:map [:scramble [:or :boolean :string]]])


