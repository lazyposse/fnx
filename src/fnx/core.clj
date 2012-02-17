;; # What's this?
;; 
;; Automagicaly expose your Clojure functions to the web
;; 
;; ## Why?
;; 
;; On my day to day job, I often write snippet of Clojure code to solve
;; small problems: convert a file in one format to another, fetch and parse some
;; resource from the network, etc.
;;
;; I would like to share those snippets of functionalities to my
;; fellow co-workers, problem is: They may even not know what Clojure
;;is.
;;
;; So what I would like to do: Just write my functions to get the job
;; done, but because I put my functions in a particular namespace,
;; it's automatically exposed in a web interface, where the user can
;; file the parameters with HTML textboxes, click `submit` and get the
;; result back.
;;
;; That's what this project tries to accomplish.
;;
;; ## What's is this fnx cool name?
;;
;; fnx : FuNctions eXpose

(ns fnx.core)
