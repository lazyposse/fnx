goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__7109 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____7110 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____7110))
{return doc__7109.setProperty;
} else
{return and__3546__auto____7110;
}
})()))
{doc__7109.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__7109.evaluate))
{return technique_2.call(null,null,doc__7109,node,path);
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error("Could not find XPath support in this browser."));
} else
{return null;
}
}
}
});
/**
* Selects a single node using an XPath expression and a root node
*/
domina.xpath.select_node = (function select_node(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectSingleNode(expr);
}),(function (resolver,doc,node,expr){
var result__7111 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__7111.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__7112 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__7113 = result__7112.snapshotLength;

var i__7114 = 0;
var acc__7115 = null;

while(true){
if(cljs.core.truth_((i__7114 < num_results__7113)))
{{
var G__7116 = (i__7114 + 1);
var G__7117 = cljs.core.cons.call(null,result__7112.snapshotItem(i__7114),acc__7115);
i__7114 = G__7116;
acc__7115 = G__7117;
continue;
}
} else
{return acc__7115;
}
break;
}
}));
});
domina.xpath.root_element = (function root_element(){
return (goog.dom.getElementsByTagNameAndClass.call(null,"html")[0]);
});
/**
* Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses js/document as a base.
*/
domina.xpath.xpath = (function() {
var xpath = null;
var xpath__7123 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__7124 = (function (base,expr){
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.xpath.t7118)))
{
/**
* @constructor
*/
domina.xpath.t7118 = (function (expr,base,xpath,__meta){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.__meta = __meta;
})
domina.xpath.t7118.prototype.domina$DomContent$ = true;
domina.xpath.t7118.prototype.domina$DomContent$nodes = (function (_){
var this__7119 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__7119.expr),domina.nodes.call(null,this__7119.base));
});
domina.xpath.t7118.prototype.domina$DomContent$single_node = (function (_){
var this__7120 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__7120.expr),domina.nodes.call(null,this__7120.base))));
});
domina.xpath.t7118.prototype.cljs$core$IMeta$ = true;
domina.xpath.t7118.prototype.cljs$core$IMeta$_meta = (function (_){
var this__7121 = this;
return this__7121.__meta;
});
domina.xpath.t7118.prototype.cljs$core$IWithMeta$ = true;
domina.xpath.t7118.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__7122 = this;
return (new domina.xpath.t7118(this__7122.expr,this__7122.base,this__7122.xpath,__meta));
});
} else
{}
return (new domina.xpath.t7118(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__7123.call(this,base);
case  2 :
return xpath__7124.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
