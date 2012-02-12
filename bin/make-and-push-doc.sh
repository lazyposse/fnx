#!/bin/bash -xe

cd $(dirname $(readlink -f $0))/..

TMP=$(mktemp -d)

lein marg
mv docs/uberdoc.html $TMP

git checkout gh-pages

mv $TMP/uberdoc.html index.html

git add index.html

git commit -m 'doc: marginalia generated'

git push origin gh-pages

git checkout master

echo "Everything OK !"
