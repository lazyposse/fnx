(ns {:doc "Example functions to test the noir-test.meta.expose ns"}
  noir-test.meta.example)

(defn hello-noir
  [] (str "Hello noir, today we are " (java.util.Date.)))
