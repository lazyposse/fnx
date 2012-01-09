(ns ^{:doc "Example functions to test the noir-test.meta.expose ns"}
  my-noir-lab.meta.example)

(defn hello-noir "A public fn that should be listed"
  [] (str "Hello noir, today we are " (java.util.Date.)))

(defn- hello-private "A private fn that shouldn't be listed"
  [] (str "Hello noir, today we are " (java.util.Date.)))

(def a-public-var-that-shouldnt-be-list 0)
