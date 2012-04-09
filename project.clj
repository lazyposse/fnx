(defproject fnx "1.0.0-SNAPSHOT"
  :description "Expose your Clojure functions on the web easily"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [ring "1.0.0-RC1"]
                 [compojure "0.6.4"]
                 [enlive "1.0.0"]
                 [org.mozilla/rhino "1.7R3"]
                 [com.google.javascript/closure-compiler "r1592"]
                 [org.clojure/google-closure-library "0.0-790"]
                 [midje "1.3.1"]]
  :dev-dependencies [[jline "0.9.94"]
                     [marginalia "0.7.0"]
                     [lein-marginalia "0.7.0"]
                     [com.intelie/lazytest "1.0.0-SNAPSHOT" :exclusions [swank-clojure]]]
  :git-dependencies [["https://github.com/clojure/clojurescript.git"
                      "886d8dc81812962d30a741d6d05ce9d90975160f"]
                     ["https://github.com/levand/domina.git"
                      "8933b2d12c44832c9bfaecf457a1bc5db251a774"]]
  :repl-init one.sample.repl
  :source-path "src/app/clj"
  :extra-classpath-dirs [".lein-git-deps/clojurescript/src/clj"
                         ".lein-git-deps/clojurescript/src/cljs"
                         ".lein-git-deps/domina/src/cljs"
                         "src/app/cljs"
                         "src/app/cljs-macros"
                         "src/lib/clj"
                         "src/lib/cljs"
                         "templates"])
