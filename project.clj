(defproject fnx "0.1.0-SNAPSHOT"
  :description "Expose your Clojure functions on the web easily"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [compojure "1.0.1"]
                 [clj-stacktrace "0.2.4"]]
  :dev-dependencies [[midje "1.3.1"]
                     [lein-ring "0.5.4"]
                     [com.intelie/lazytest "1.0.0-SNAPSHOT" :exclusions [swank-clojure]]
                     [lein-marginalia "0.7.0-SNAPSHOT"]
                     [clj-http "0.3.2"]] 
  :ring {:handler fnx.server/app})
