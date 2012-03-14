goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____7126 = content;

if(cljs.core.truth_(and__3546__auto____7126))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____7126;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____7127 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____7127))
{return or__3548__auto____7127;
} else
{var or__3548__auto____7128 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____7128))
{return or__3548__auto____7128;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____7129 = nodeseq;

if(cljs.core.truth_(and__3546__auto____7129))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____7129;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____7130 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____7130))
{return or__3548__auto____7130;
} else
{var or__3548__auto____7131 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____7131))
{return or__3548__auto____7131;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement.call(null,cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.t7132)))
{
/**
* @constructor
*/
domina.t7132 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t7132.prototype.domina$DomContent$ = true;
domina.t7132.prototype.domina$DomContent$nodes = (function (_){
var this__7133 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__7133.class_name));
});
domina.t7132.prototype.domina$DomContent$single_node = (function (_){
var this__7134 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__7134.class_name));
});
domina.t7132.prototype.cljs$core$IMeta$ = true;
domina.t7132.prototype.cljs$core$IMeta$_meta = (function (_){
var this__7135 = this;
return this__7135.__meta;
});
domina.t7132.prototype.cljs$core$IWithMeta$ = true;
domina.t7132.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__7136 = this;
return (new domina.t7132(this__7136.class_name,this__7136.by_class,__meta));
});
} else
{}
return (new domina.t7132(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__7137_SHARP_){
return p1__7137_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__7138_SHARP_,p2__7139_SHARP_){
return goog.dom.insertChildAt.call(null,p1__7138_SHARP_,p2__7139_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__7141_SHARP_,p2__7140_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__7140_SHARP_,p1__7141_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__7143_SHARP_,p2__7142_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__7142_SHARP_,p1__7143_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__7145_SHARP_,p2__7144_SHARP_){
return goog.dom.replaceNode.call(null,p2__7144_SHARP_,p1__7145_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s__7146 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__7146))))
{return s__7146;
} else
{return null;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword.
*/
domina.set_style_BANG_ = (function set_style_BANG_(content,name,value){
var G__7147__7148 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__7147__7148))
{var n__7149 = cljs.core.first.call(null,G__7147__7148);
var G__7147__7150 = G__7147__7148;

while(true){
goog.style.setStyle.call(null,n__7149,cljs.core.name.call(null,name),value);
var temp__3698__auto____7151 = cljs.core.next.call(null,G__7147__7150);

if(cljs.core.truth_(temp__3698__auto____7151))
{var G__7147__7152 = temp__3698__auto____7151;

{
var G__7153 = cljs.core.first.call(null,G__7147__7152);
var G__7154 = G__7147__7152;
n__7149 = G__7153;
G__7147__7150 = G__7154;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword.
*/
domina.set_attr_BANG_ = (function set_attr_BANG_(content,name,value){
var G__7155__7156 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__7155__7156))
{var n__7157 = cljs.core.first.call(null,G__7155__7156);
var G__7155__7158 = G__7155__7156;

while(true){
n__7157.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____7159 = cljs.core.next.call(null,G__7155__7158);

if(cljs.core.truth_(temp__3698__auto____7159))
{var G__7155__7160 = temp__3698__auto____7159;

{
var G__7161 = cljs.core.first.call(null,G__7155__7160);
var G__7162 = G__7155__7160;
n__7157 = G__7161;
G__7155__7158 = G__7162;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__7163__7164 = pair.split(/\s*:\s*/);
var k__7165 = cljs.core.nth.call(null,vec__7163__7164,0,null);
var v__7166 = cljs.core.nth.call(null,vec__7163__7164,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____7167 = k__7165;

if(cljs.core.truth_(and__3546__auto____7167))
{return v__7166;
} else
{return and__3546__auto____7167;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__7165.toLowerCase()),v__7166);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
return domina.parse_style_attributes.call(null,domina.attr.call(null,content,"style"));
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__7169 = domina.single_node.call(null,content);
var attrs__7170 = node__7169.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__7168_SHARP_){
var attr__7171 = attrs__7170.item(p1__7168_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__7171.nodeName.toLowerCase())],[attr__7171.nodeValue]);
}),cljs.core.range.call(null,attrs__7170.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__7172__7173 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__7172__7173))
{var G__7175__7177 = cljs.core.first.call(null,G__7172__7173);
var vec__7176__7178 = G__7175__7177;
var name__7179 = cljs.core.nth.call(null,vec__7176__7178,0,null);
var value__7180 = cljs.core.nth.call(null,vec__7176__7178,1,null);
var G__7172__7181 = G__7172__7173;

var G__7175__7182 = G__7175__7177;
var G__7172__7183 = G__7172__7181;

while(true){
var vec__7184__7185 = G__7175__7182;
var name__7186 = cljs.core.nth.call(null,vec__7184__7185,0,null);
var value__7187 = cljs.core.nth.call(null,vec__7184__7185,1,null);
var G__7172__7188 = G__7172__7183;

domina.set_style_BANG_.call(null,content,name__7186,value__7187);
var temp__3698__auto____7189 = cljs.core.next.call(null,G__7172__7188);

if(cljs.core.truth_(temp__3698__auto____7189))
{var G__7172__7190 = temp__3698__auto____7189;

{
var G__7191 = cljs.core.first.call(null,G__7172__7190);
var G__7192 = G__7172__7190;
G__7175__7182 = G__7191;
G__7172__7183 = G__7192;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var G__7193__7194 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__7193__7194))
{var G__7196__7198 = cljs.core.first.call(null,G__7193__7194);
var vec__7197__7199 = G__7196__7198;
var name__7200 = cljs.core.nth.call(null,vec__7197__7199,0,null);
var value__7201 = cljs.core.nth.call(null,vec__7197__7199,1,null);
var G__7193__7202 = G__7193__7194;

var G__7196__7203 = G__7196__7198;
var G__7193__7204 = G__7193__7202;

while(true){
var vec__7205__7206 = G__7196__7203;
var name__7207 = cljs.core.nth.call(null,vec__7205__7206,0,null);
var value__7208 = cljs.core.nth.call(null,vec__7205__7206,1,null);
var G__7193__7209 = G__7193__7204;

domina.set_attr_BANG_.call(null,content,name__7207,value__7208);
var temp__3698__auto____7210 = cljs.core.next.call(null,G__7193__7209);

if(cljs.core.truth_(temp__3698__auto____7210))
{var G__7193__7211 = temp__3698__auto____7210;

{
var G__7212 = cljs.core.first.call(null,G__7193__7211);
var G__7213 = G__7193__7211;
G__7196__7203 = G__7212;
G__7193__7204 = G__7213;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has.call(null,domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var G__7214__7215 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__7214__7215))
{var node__7216 = cljs.core.first.call(null,G__7214__7215);
var G__7214__7217 = G__7214__7215;

while(true){
goog.dom.classes.add.call(null,node__7216,class$);
var temp__3698__auto____7218 = cljs.core.next.call(null,G__7214__7217);

if(cljs.core.truth_(temp__3698__auto____7218))
{var G__7214__7219 = temp__3698__auto____7218;

{
var G__7220 = cljs.core.first.call(null,G__7214__7219);
var G__7221 = G__7214__7219;
node__7216 = G__7220;
G__7214__7217 = G__7221;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var G__7222__7223 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__7222__7223))
{var node__7224 = cljs.core.first.call(null,G__7222__7223);
var G__7222__7225 = G__7222__7223;

while(true){
goog.dom.classes.remove.call(null,node__7224,class$);
var temp__3698__auto____7226 = cljs.core.next.call(null,G__7222__7225);

if(cljs.core.truth_(temp__3698__auto____7226))
{var G__7222__7227 = temp__3698__auto____7226;

{
var G__7228 = cljs.core.first.call(null,G__7222__7227);
var G__7229 = G__7222__7227;
node__7224 = G__7228;
G__7222__7225 = G__7229;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get.call(null,domina.single_node.call(null,content)));
});
/**
* Returns the text of a node. Assumes content is a single node. Optional 'normalize' paramter indicates whether to collapse whitespace, normalize line breaks and trim (defaults to true). Does not return internal markup.
*/
domina.text = (function() {
var text = null;
var text__7230 = (function (content){
return text.call(null,content,true);
});
var text__7231 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__7230.call(this,content);
case  2 :
return text__7231.call(this,content,normalize);
}
throw('Invalid arity: ' + arguments.length);
};
return text;
})()
;
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__7233__7234 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__7233__7234))
{var node__7235 = cljs.core.first.call(null,G__7233__7234);
var G__7233__7236 = G__7233__7234;

while(true){
goog.dom.setTextContent.call(null,node__7235,value);
var temp__3698__auto____7237 = cljs.core.next.call(null,G__7233__7236);

if(cljs.core.truth_(temp__3698__auto____7237))
{var G__7233__7238 = temp__3698__auto____7237;

{
var G__7239 = cljs.core.first.call(null,G__7233__7238);
var G__7240 = G__7233__7238;
node__7235 = G__7239;
G__7233__7236 = G__7240;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue.call(null,domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var G__7241__7242 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__7241__7242))
{var node__7243 = cljs.core.first.call(null,G__7241__7242);
var G__7241__7244 = G__7241__7242;

while(true){
goog.dom.forms.setValue.call(null,node__7243,value);
var temp__3698__auto____7245 = cljs.core.next.call(null,G__7241__7244);

if(cljs.core.truth_(temp__3698__auto____7245))
{var G__7241__7246 = temp__3698__auto____7245;

{
var G__7247 = cljs.core.first.call(null,G__7241__7246);
var G__7248 = G__7241__7246;
node__7243 = G__7247;
G__7241__7244 = G__7248;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,value){
var G__7249__7250 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__7249__7250))
{var node__7251 = cljs.core.first.call(null,G__7249__7250);
var G__7249__7252 = G__7249__7250;

while(true){
node__7251.innerHTML = value;
var temp__3698__auto____7253 = cljs.core.next.call(null,G__7249__7252);

if(cljs.core.truth_(temp__3698__auto____7253))
{var G__7249__7254 = temp__3698__auto____7253;

{
var G__7255 = cljs.core.first.call(null,G__7249__7254);
var G__7256 = G__7249__7254;
node__7251 = G__7255;
G__7249__7252 = G__7256;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Takes a two-arg function, a reference DomContent and new DomContent. Applies the function for each reference / content combination. Uses clones of the new content for each additional parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__7257 = domina.nodes.call(null,parent_content);

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,parents__7257))))
{var G__7258__7259 = cljs.core.seq.call(null,domina.nodes.call(null,child_content));

if(cljs.core.truth_(G__7258__7259))
{var child__7260 = cljs.core.first.call(null,G__7258__7259);
var G__7258__7261 = G__7258__7259;

while(true){
f.call(null,cljs.core.first.call(null,parents__7257),child__7260);
var temp__3698__auto____7262 = cljs.core.next.call(null,G__7258__7261);

if(cljs.core.truth_(temp__3698__auto____7262))
{var G__7258__7263 = temp__3698__auto____7262;

{
var G__7276 = cljs.core.first.call(null,G__7258__7263);
var G__7277 = G__7258__7263;
child__7260 = G__7276;
G__7258__7261 = G__7277;
continue;
}
} else
{}
break;
}
} else
{}
var G__7264__7266 = cljs.core.seq.call(null,cljs.core.rest.call(null,parents__7257));

if(cljs.core.truth_(G__7264__7266))
{var parent__7267 = cljs.core.first.call(null,G__7264__7266);
var G__7264__7268 = G__7264__7266;

while(true){
var G__7265__7269 = cljs.core.seq.call(null,domina.nodes.call(null,domina.clone.call(null,child_content)));

if(cljs.core.truth_(G__7265__7269))
{var child__7270 = cljs.core.first.call(null,G__7265__7269);
var G__7265__7271 = G__7265__7269;

while(true){
f.call(null,parent__7267,child__7270);
var temp__3698__auto____7272 = cljs.core.next.call(null,G__7265__7271);

if(cljs.core.truth_(temp__3698__auto____7272))
{var G__7265__7273 = temp__3698__auto____7272;

{
var G__7278 = cljs.core.first.call(null,G__7265__7273);
var G__7279 = G__7265__7273;
child__7270 = G__7278;
G__7265__7271 = G__7279;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____7274 = cljs.core.next.call(null,G__7264__7268);

if(cljs.core.truth_(temp__3698__auto____7274))
{var G__7264__7275 = temp__3698__auto____7274;

{
var G__7280 = cljs.core.first.call(null,G__7264__7275);
var G__7281 = G__7264__7275;
parent__7267 = G__7280;
G__7264__7268 = G__7281;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__7282 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__7283 = (function (nl,n){
if(cljs.core.truth_((n < nl.length)))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nodelist.call(null,nl,(n + 1)));
})));
} else
{return null;
}
});
lazy_nodelist = function(nl,n){
switch(arguments.length){
case  1 :
return lazy_nodelist__7282.call(this,nl);
case  2 :
return lazy_nodelist__7283.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nodelist;
})()
;
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
return cljs.core.seq.call(null,content);
}));
(domina.single_node["_"] = (function (content){
return cljs.core.first.call(null,content);
}));
Element.prototype.domina$DomContent$ = true;
Element.prototype.domina$DomContent$nodes = (function (content){
return cljs.core.cons.call(null,content);
});
Element.prototype.domina$DomContent$single_node = (function (content){
return content;
});
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.cons.call(null,goog.dom.htmlToDocumentFragment.call(null,s));
}));
(domina.single_node["string"] = (function (s){
return goog.dom.htmlToDocumentFragment.call(null,s);
}));
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7285 = null;
var G__7285__7286 = (function (nodelist,n){
return nodelist.item(n);
});
var G__7285__7287 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__7285 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__7285__7286.call(this,nodelist,n);
case  3 :
return G__7285__7287.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7285;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
if(cljs.core.truth_(window.StaticNodeList))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7289 = null;
var G__7289__7290 = (function (nodelist,n){
return nodelist.item(n);
});
var G__7289__7291 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__7289 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__7289__7290.call(this,nodelist,n);
case  3 :
return G__7289__7291.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7289;
})()
;
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7293 = null;
var G__7293__7294 = (function (coll,n){
return coll.item(n);
});
var G__7293__7295 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__7293 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7293__7294.call(this,coll,n);
case  3 :
return G__7293__7295.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7293;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
