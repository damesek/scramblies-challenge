(ns scramble.core-test
  (:require [clojure.test :refer :all]
            [scramble.main :refer :all]))



(deftest scramble?-test
  (testing "With one character"
    (is (scramble "alma" "a")))
  (testing "With one diff character"
    (is (not (scramble "alma" "k"))))
  (testing "Contains the input string"
    (is (scramble "appletree" "apple")))
  (testing "Does not contain the input string"
    (is (not (scramble "appletree" "applek")))))


(deftest scramble-main-test
  (testing "With empty strings"
    (is (scramble? "" "")))
  (testing "With one empty string"
    (is (scramble "alma" "")))
  (testing "With the other empty string"
    (is (false? (scramble? "" "alma"))))
  (testing "With not allowed special characters"
    (is (= {:str1 ["Must be lowercase without special chars"]
            :str2 ["Must be lowercase without special chars"]}
           (scramble? "alm#a" "a#"))))
  (testing "With numbers in the string"
    (is (= {:str1 ["Must be lowercase without special chars"]
            :str2 ["Must be lowercase without special chars"]}
           (scramble? "as1lm2a3" "12"))))
  (testing "With number as input"
    (is (= ["should be a string"
            "Must be lowercase without special chars"]
           (:str2 (scramble? "alma" 1)))))
  (testing "With number as input"
    (is (= ["should be a string"
            "Must be lowercase without special chars"]
           (:str1 (scramble? 1 "alma")))))
  (testing "With capital letters in parameter values"
      (is (= ["Must be lowercase without special chars"]
             (:str1 (scramble? "almaFa" "alma")))))
  (testing "With nil value"
    (is (= ["should be a string"]
           (:str2 (scramble? "almaFa" nil)))))
  (testing "With longer second string"
      (is (not (scramble? "alma" "almak")))))

