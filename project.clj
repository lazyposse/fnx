(defproject fnx "0.1.0-SNAPSHOT"
  :description "Expose your Clojure functions on the web easily"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [noir                "1.2.1"]
                 [clj-stacktrace      "0.2.4"]]
  :dev-dependencies [[midje "1.3.1"]
                     [com.intelie/lazytest "1.0.0-SNAPSHOT" :exclusions [swank-clojure]]
                     [lein-marginalia "0.7.0-SNAPSHOT"]] 
  :main fnx.server)
