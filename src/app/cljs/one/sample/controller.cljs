(ns ^{:doc "Respond to user actions by updating local and remote
  application state."}
  one.sample.controller
  (:use [one.browser.remote :only (request)]
        [one.sample.model :only (state state-fnx)])
  (:require [cljs.reader :as reader]
            [clojure.browser.event :as event]
            [one.dispatch :as dispatch]
            [goog.uri.utils :as uri]))

(defmulti action
  "Accepts a map containing information about an action to perform.

  Actions may cause state changes on the client or the server. This
  function dispatches on the value of the `:type` key and currently
  supports `:init`, `:form`, and `:greeting` actions.

  The `:init` action will initialize the appliation's state.

  The `:form` action will only update the status atom, setting its state
  to `:from`.

  The `:greeting` action will send the entered name to the server and
  update the state to `:greeting` while adding `:name` and `:exists`
  values to the application's state."
  :type)

(defmethod action :init [_])

(defmethod action :form [_]
  (when-not (#{:form :init} (:state @state))
    (swap! state assoc :state :form)))

(defn host
  "Get the name of the host which served this script."
  []
  (uri/getHost (.toString window.location ())))

(defn remote
  "Accepts a function id (an identifier for this request), data (the
  data to send to the server) and a callback function which will be
  called if the transmission is successful. Perform an Ajax `POST`
  request to the backend API which sends the passed data to the
  server.

  A tranmission error will add an error message to the application's
  state."
  [f data on-success]
  (request f (str (host) "/remote")
           :method "POST"
           :on-success #(on-success (reader/read-string (:body %)))
           :on-error #(swap! state assoc :error "Error communicating with server.")
           :content (str "data=" (pr-str {:fn f :args data}))))

(defn add-name-callback
  "This is the success callback function which will be called when a
  request is successful. Accepts a name and a map of response data.
  Sets the current state to `:greeting` and adds the `:name` and
  `:exists` values to the application's state."
  [name response]
  (swap! state (fn [old]
                 (assoc (assoc old :state :greeting :name name)
                   :exists (boolean (:exists response))))))

(defmethod action :greeting [{name :name}]
  (remote :add-name {:name name} #(add-name-callback name %)))

(dispatch/react-to #{:init :form :greeting}
                   (fn [t d] (action (assoc d :type t))))

;; --------------- <fnx> ---------------

(defmulti action-fnx
  "Accepts a map containing information about an action to perform.

  Actions may cause state changes on the client or the server. This
  function dispatches on the value of the `:type` key and currently
  supports `:init`, `:ns-nav`

  The `:init` action will fetch the ns hierarchy from the server and store it in the atom state.

  The `:ns-nav` action will navigate to a particular namespace."
  :type)

(defn add-ns-callback
  "This is the success callback function which will be called when a
  request is successful. Accepts a map of response data.
  Sets the current state to `:ns-navigating` and adds the `:all-ns` and
  `:ns-nav` to the application's state."
  [response]
  (swap! state-fnx (fn [old]
                     (assoc old
                       :state :ns-navigating
                       :all-ns (response :res)
                       :ns-nav nil))))

;; Mock map of namespaces-fns, this is an example of what comes from the server.
(def all-ns 
  {nil            [nil       ["foo" "bar"]                []]
   "foo"          [nil       ["foo.aws"]                  []]
   "bar"          [nil       ["bar.file"]                 []]
   "foo.aws"      ["foo"     ["foo.aws.ec2" "foo.aws.s3"] ["describe-region"]]
   "foo.aws.ec2"  ["foo.aws" []                           ["list-ami"]]
   "foo.aws.s3"   ["foo.aws" []                           ["delete-buckets"]]
   "bar.file"     ["bar"     []                           ["ls"]]})

(defmethod action-fnx :init [_]
  ;; event init to reset the state of the application and incidentally refresh the ui
  (reset! state-fnx {:state :init})
  ;; call the server to populate the namespaces
  (remote :load-map-ns {} #(add-ns-callback %)))

(defmethod action-fnx :ns-clicked [{ns :ns}]
  ;; update the model with the new namespace
  (swap! state-fnx (fn [old]
                     (assoc old
                       :state :ns-navigating
                       :ns-nav ns))))

;; This is mock map, example of what comes from the server.
(def fn-meta-to-display
  {:fname "fully.qualified.ns/some-function-to-display"
   :arglists [["a"] ["b" "c"] ["e" "f" "g"]]
   :doc "This a sample example of a function to transform into a list of inputs."})

(defn- fn-display-callback
  "This is the success callback function which will be called when a
  request is successful. Accepts the name of the function and a map of response data.
  Sets the current state to `:fn-form-displaying` and adds the current map of metadata from the function
  fname"
  [fname response]
    (swap! state-fnx (fn [old]
                     (assoc old
                       :state :fn-form-displaying
                       :current-fn (:meta-fn response)))))

(defmethod action-fnx :fn-clicked [{f :fn}]
  (remote :load-map-meta-fn {:fq-fn f} #(fn-display-callback f %)))

(defn- fn-display-result-callback
  "This is the success callback function which will be called when a
  request is successful. Accepts the name of the function, the args with
  which the fn will be called and a response data.
  Sets the current state to `:fn-result-showing'"
  [fname args response]
    (swap! state-fnx (fn [old]
                     (assoc old
                       :state :fn-result-showing
                       :current-fn fname
                       :args args
                       :fn-result (:res response)))))

;; React to the run clicked event that will launch the execution of the function in the server
(defmethod action-fnx :run-clicked [{f :fname args :args}]
  ;; before launching the computing of function in remote
  (swap! state-fnx  (fn [old]
                     (assoc old
                       :state :fn-running
                       :current-fn f
                       :args args)))

  ;; launch the function computing
  (remote :apply-fn {:meta-fn f
                     :args args} #(fn-display-result-callback f args %)))

(dispatch/react-to #{:init :ns-clicked :fn-clicked :run-clicked}
                   (fn [t d] (action-fnx (assoc d :type t))))

;; --------------- </fnx> ---------------
