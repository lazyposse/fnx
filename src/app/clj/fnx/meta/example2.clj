;; This other file contains some other dummy functions
;; and vars **just to test** the functionnalities of `fnx.meta.expose`.
;;
(ns fnx.meta.example2
  "Another Example of namespace that exposes functions..")

(defn hello "A public fn with zero arg, should be listed"
  [] (str "Hello world from a function exposed!"))

(defn three-arg-fn "A public fn with one arg, should be listed"
  [x y z] (str "arg=" x y z))
