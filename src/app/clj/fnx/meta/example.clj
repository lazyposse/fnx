;; This file contains some dummy functions and vars **just to test** the
;; functionnalities of `fnx.meta.expose`.
;;
(ns fnx.meta.example
  "Example of namespace that exposes functions..")

(defn hello-noir "A public fn with zero arg, should be listed"
  [] (str "Hello world from a function exposed!"))

(defn one-arg-fn "A public fn with one arg, should be listed"
  [x] (str "arg=" x))

(defn two-arg-fn "A public fn with two args, should be listed"
  [x y] (str "args=" x "," y))

(defn- hello-private "A private fn that shouldn't be listed"
  [] (str "Hello noir, today we are " (java.util.Date.)))

(def ^{:doc "A public var that shouldn't be listed"}
  a-public-var-that-shouldnt-be-list 0)
