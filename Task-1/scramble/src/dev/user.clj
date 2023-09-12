(ns dev.user
  (:require [clojure.string :refer [join]]
            [criterium.core :refer [bench quick-bench]]))

;; (set! *warn-on-reflection* true)
;
;(def ^:private char-offset (int \a))
;(def ^:private alphabet-size 26)
;
;; 65 - 90  uppercase
;; 48 - 57  numbers
;
;(def ^:private last-char
;  (+ char-offset (dec alphabet-size)))

