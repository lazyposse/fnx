(ns one.sample.view-helper)

(defn ls-curr-ns
  [all-ns curr-ns] (let [[_ nses fns] (all-ns curr-ns)]
                     [nses fns]))

(defn parent-ns
  [all-ns curr-ns] (first (all-ns curr-ns)))

