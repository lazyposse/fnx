(ns one.sample.api
  "The server side of the sample application. Provides a simple API for
  updating an in-memory database."
  (:use [compojure.core :only (defroutes POST)]
        [fnx.meta.expose :only [load-map-ns load-fq-fn! fn-meta apply-fn]]
        [midje.sweet]))

(defonce ^:private next-id (atom 0))

(defonce ^:dynamic *database* (atom #{}))

(defmulti remote
  "Multimethod to handle incoming API calls. Implementations are
  selected based on the :fn key in the data sent by the client.
  Implementation are called with whatever data struture the client
  sends (which will already have been read into a Clojure value) and
  can return any Clojure value. The value the implementation returns
  will be serialized to a string before being sent back to the client."
  :fn)

(defmethod remote :default [data]
  {:status :error :message "Unknown endpoint."})

(defmethod remote :add-name [data]
  (let [n (-> data :args :name)
        response {:exists (contains? @*database* n)}]
    (swap! *database* conj n)
    response))

(defmethod remote :load-map-ns [data]
  (let [response {:res (load-map-ns (load-fq-fn!))}]
    response))

(fact ":load-map-ns"
  (remote {:fn :load-map-ns
           :args {:fq-fn :fully-qualified-fn-name}}) => {:res :output-result}
  (provided
    (load-fq-fn!) => :some-fully-qualified-fns
    (load-map-ns :some-fully-qualified-fns) => :output-result))

;; Remote access to retrieve the map of metadata for the function fnxs.
(defmethod remote :load-map-meta-fn [data]
  (let [fname (-> data :args :fq-fn)
        response {:meta-fn (fn-meta fname)}]
    response))

(fact ":load-map-meta-fn"
  (remote {:fn :load-map-meta-fn
           :args {:fq-fn :fully-qualified-fn-name}}) => {:meta-fn :output-result}
  (provided
    (fn-meta :fully-qualified-fn-name) => :output-result))

;; Remote access to apply a function to its arguments
(defmethod remote :apply-fn [data]
  (let [meta-fn (-> data :args :meta-fn)
        args (-> data :args :args)
        fname (:fname meta-fn)
        arglists (:arglists meta-fn)]
    {:res (apply-fn fname arglists args)}))

(fact "apply-fn"
  (remote {:fn :apply-fn
           :args {:meta-fn {:fname :real-fq-fn
                            :arglists :some-arglists}
                  :args :some-real-map-with-args}}) => {:res :output-result}
  (provided
    (apply-fn :real-fq-fn
              :some-arglists
              :some-real-map-with-args) => :output-result))

(fact "IT - no order needed"
  (remote {:fn :apply-fn
           :args {:meta-fn {:fname "clojure.core/+"
                            :arglists [['x 'y]]}
                  :args {'x 1
                         'y 2} }}) => {:res 3})

(fact "IT - order needed"
  (remote {:fn :apply-fn
           :args {:meta-fn {:fname "clojure.core/-"
                            :arglists [['x 'y]]}
                  :args {'y 1
                         'x 2} }}) => {:res 1})

(defroutes remote-routes
  (POST "/remote" {{data "data"} :params}
        (pr-str
         (remote
          (binding [*read-eval* false]
            (read-string data))))))
