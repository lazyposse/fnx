(ns ^{:doc "Example functions to test the noir-test.meta.expose ns"}
  fnx.meta.example)

(defn hello-noir "A public fn that should be listed"
  [] (str "Hello noir"))

(defn one-arg-fn
  [x] (str "arg=" x))

(defn two-arg-fn
  [x y] (str "args=" x "," y))

(defn- hello-private "A private fn that shouldn't be listed"
  [] (str "Hello noir, today we are " (java.util.Date.)))

(def a-public-var-that-shouldnt-be-list 0)
