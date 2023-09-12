(ns scramblies.calculate.main-test
  (:require [clojure.test :refer :all]
            [scramblies.calculate.main :refer [scramble? validate-or-explain]]
            [scramblies.calculate.spec :refer [allowed?]]))


(deftest scramble-core-test
  (testing "With one character"
    (is (scramble? "alma" "a")))
  (testing "With one diff character"
    (is (not (scramble? "alma" "k"))))
  (testing "Contains the input string"
    (is (scramble? "appletree" "apple")))
  (testing "Does not contain the input string"
    (is (not (scramble? "appletree" "applek")))))



(deftest string-validation-test
  (testing "With empty strings"
    (is (validate-or-explain allowed? "")))
  (testing "With a string"
    (is (validate-or-explain allowed? "alma")))
  (testing "With not allowed special characters"
    (is (= ["Must be lowercase without special chars"]
           (validate-or-explain allowed? "alm$a"))))
  (testing "With numbers in the string"
    (is (= ["Must be lowercase without special chars"]
           (validate-or-explain allowed? "as1lm2a3"))))
  (testing "With number as input"
    (is (= ["should be a string"
            "Must be lowercase without special chars"]
           (validate-or-explain allowed? 1))))
  (testing "With capital letters"
    (is (= ["Must be lowercase without special chars"]
           (validate-or-explain allowed? "almaFa"))))
  (testing "With nil value"
    (is (= ["should be a string"]
           (validate-or-explain allowed? nil)))))

