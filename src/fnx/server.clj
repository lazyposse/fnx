(ns fnx.server
  "Main entry point to launch fnx."
  (:require [noir.server :as server]))

(server/load-views "src/fnx/views/")

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8080"))]
    (server/start port {:mode mode
                        :ns 'fnx})))

