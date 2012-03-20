(ns denlab-4clojure-exercices.view-helper
  (:use
     [clojure.string :only [split]]))

(ns denlab-4clojure-exercices.view-helper
  (:use
   [clojure.repl   :only [doc]]
   [clojure.pprint :only [pprint]]
   [midje.sweet]))

(unfinished )

(comment
  foo.aws/describe-region
  foo.aws.ec2/list-ami
  foo.aws.ec2/describe-ami
  foo.aws.s3/delete-buckets
  bar.file/ls

  {"foo"
   {"foo.aws"
    {"foo.aws.ec2" ["list-ami" "describe-ami"]
     "foo.aws.s3"  ["delete-buckets"]
     :fns          ["describe-region"]}}
   "bar" {"bar.file" ["ls"]}}
  
  {"foo"          [nil       ["foo.aws"]                  []]
   "bar"          [nil       ["bar.file"]                 []]
   "foo.aws"      ["foo"     ["foo.aws.ec2" "foo.aws.s3"] ["describe-region"]]
   "foo.aws.ec2"  ["foo.aws" []                           ["list-ami"]]
   "foo.aws.s3"   ["foo.aws" []                           ["delete-buckets"]]
   "bar.file"     ["bar"     []                           ["ls"]]}

  ["root"
   ["foo"
    ["aws"
     "describe-region"
     ["ec2" "list-ami"]
     ["s3" "delete-buckets"]]]
   ["bar"
    ["file" "ls"]]])


(defn ls-curr-ns
  [all-ns curr-ns] (let [[_ nses fns] (all-ns curr-ns)]
                     [nses fns]))

(defn parent-ns
  [all-ns curr-ns] (first (all-ns curr-ns)))

(def test-all-ns
  {nil            [nil       ["foo" "bar"]                []]
   "foo"          [nil       ["foo.aws"]                  []]
   "bar"          [nil       ["bar.file"]                 []]
   "foo.aws"      ["foo"     ["foo.aws.ec2" "foo.aws.s3"] ["describe-region"]]
   "foo.aws.ec2"  ["foo.aws" []                           ["list-ami"]]
   "foo.aws.s3"   ["foo.aws" []                           ["delete-buckets"]]
   "bar.file"     ["bar"     []                           ["ls"]]})


(fact "ls-curr-ns: root case"
  (ls-curr-ns test-all-ns "foo.aws") => [["foo.aws.ec2" "foo.aws.s3"]
                                         ["describe-region"]])

(fact "parent-ns"
  (parent-ns test-all-ns "foo.aws.s3") => "foo.aws")

