goog.provide('one.color');
goog.require('cljs.core');
goog.require('one.core');
goog.require('goog.string');
goog.require('goog.style');
goog.require('goog.color');
goog.require('goog.color.alpha');
one.color.IColor = {};
one.color.rgb = (function rgb(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6072 = this$;

if(cljs.core.truth_(and__3546__auto____6072))
{return this$.one$color$IColor$rgb;
} else
{return and__3546__auto____6072;
}
})()))
{return this$.one$color$IColor$rgb(this$);
} else
{return (function (){var or__3548__auto____6073 = (one.color.rgb[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6073))
{return or__3548__auto____6073;
} else
{var or__3548__auto____6074 = (one.color.rgb["_"]);

if(cljs.core.truth_(or__3548__auto____6074))
{return or__3548__auto____6074;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.rgb",this$);
}
}
})().call(null,this$);
}
});
one.color.rgba = (function rgba(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6075 = this$;

if(cljs.core.truth_(and__3546__auto____6075))
{return this$.one$color$IColor$rgba;
} else
{return and__3546__auto____6075;
}
})()))
{return this$.one$color$IColor$rgba(this$);
} else
{return (function (){var or__3548__auto____6076 = (one.color.rgba[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6076))
{return or__3548__auto____6076;
} else
{var or__3548__auto____6077 = (one.color.rgba["_"]);

if(cljs.core.truth_(or__3548__auto____6077))
{return or__3548__auto____6077;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.rgba",this$);
}
}
})().call(null,this$);
}
});
one.color.hex = (function hex(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6078 = this$;

if(cljs.core.truth_(and__3546__auto____6078))
{return this$.one$color$IColor$hex;
} else
{return and__3546__auto____6078;
}
})()))
{return this$.one$color$IColor$hex(this$);
} else
{return (function (){var or__3548__auto____6079 = (one.color.hex[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6079))
{return or__3548__auto____6079;
} else
{var or__3548__auto____6080 = (one.color.hex["_"]);

if(cljs.core.truth_(or__3548__auto____6080))
{return or__3548__auto____6080;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.hex",this$);
}
}
})().call(null,this$);
}
});
one.color.hex_rgba = (function hex_rgba(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6081 = this$;

if(cljs.core.truth_(and__3546__auto____6081))
{return this$.one$color$IColor$hex_rgba;
} else
{return and__3546__auto____6081;
}
})()))
{return this$.one$color$IColor$hex_rgba(this$);
} else
{return (function (){var or__3548__auto____6082 = (one.color.hex_rgba[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6082))
{return or__3548__auto____6082;
} else
{var or__3548__auto____6083 = (one.color.hex_rgba["_"]);

if(cljs.core.truth_(or__3548__auto____6083))
{return or__3548__auto____6083;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.hex-rgba",this$);
}
}
})().call(null,this$);
}
});
one.color.alpha = (function alpha(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6084 = this$;

if(cljs.core.truth_(and__3546__auto____6084))
{return this$.one$color$IColor$alpha;
} else
{return and__3546__auto____6084;
}
})()))
{return this$.one$color$IColor$alpha(this$);
} else
{return (function (){var or__3548__auto____6085 = (one.color.alpha[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6085))
{return or__3548__auto____6085;
} else
{var or__3548__auto____6086 = (one.color.alpha["_"]);

if(cljs.core.truth_(or__3548__auto____6086))
{return or__3548__auto____6086;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.alpha",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
* @param {*} r
* @param {*} g
* @param {*} b
* @param {*} a
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
one.color.Color = (function (r,g,b,a,__meta,__extmap){
this.r = r;
this.g = g;
this.b = b;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
one.color.Color.prototype.cljs$core$IHash$ = true;
one.color.Color.prototype.cljs$core$IHash$_hash = (function (this__326__auto__){
var this__6089 = this;
return cljs.core.hash_coll.call(null,this__326__auto__);
});
one.color.Color.prototype.cljs$core$ILookup$ = true;
one.color.Color.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6113 = null;
var G__6113__6114 = (function (this__331__auto__,k__332__auto__){
var this__6090 = this;
return cljs.core._lookup.call(null,this__331__auto__,k__332__auto__,null);
});
var G__6113__6115 = (function (this__333__auto__,k__334__auto__,else__335__auto__){
var this__6091 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'r",this__6091.r,"﷐'g",this__6091.g,"﷐'b",this__6091.b,"﷐'a",this__6091.a),this__6091.__extmap),k__334__auto__,else__335__auto__);
});
G__6113 = function(this__333__auto__,k__334__auto__,else__335__auto__){
switch(arguments.length){
case  2 :
return G__6113__6114.call(this,this__333__auto__,k__334__auto__);
case  3 :
return G__6113__6115.call(this,this__333__auto__,k__334__auto__,else__335__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6113;
})()
;
one.color.Color.prototype.cljs$core$IAssociative$ = true;
one.color.Color.prototype.cljs$core$IAssociative$_assoc = (function (this__339__auto__,k__340__auto__,G__6087){
var this__6092 = this;
var pred__6093__6096 = cljs.core.identical_QMARK_;
var expr__6094__6097 = k__340__auto__;

if(cljs.core.truth_(pred__6093__6096.call(null,"﷐'r",expr__6094__6097)))
{return (new one.color.Color(G__6087,this__6092.g,this__6092.b,this__6092.a,this__6092.__meta,this__6092.__extmap));
} else
{if(cljs.core.truth_(pred__6093__6096.call(null,"﷐'g",expr__6094__6097)))
{return (new one.color.Color(this__6092.r,G__6087,this__6092.b,this__6092.a,this__6092.__meta,this__6092.__extmap));
} else
{if(cljs.core.truth_(pred__6093__6096.call(null,"﷐'b",expr__6094__6097)))
{return (new one.color.Color(this__6092.r,this__6092.g,G__6087,this__6092.a,this__6092.__meta,this__6092.__extmap));
} else
{if(cljs.core.truth_(pred__6093__6096.call(null,"﷐'a",expr__6094__6097)))
{return (new one.color.Color(this__6092.r,this__6092.g,this__6092.b,G__6087,this__6092.__meta,this__6092.__extmap));
} else
{return (new one.color.Color(this__6092.r,this__6092.g,this__6092.b,this__6092.a,this__6092.__meta,cljs.core.assoc.call(null,this__6092.__extmap,k__340__auto__,G__6087)));
}
}
}
}
});
one.color.Color.prototype.one$color$IColor$ = true;
one.color.Color.prototype.one$color$IColor$rgb = (function (_){
var this__6098 = this;
return cljs.core.Vector.fromArray([this__6098.r,this__6098.g,this__6098.b]);
});
one.color.Color.prototype.one$color$IColor$rgba = (function (_){
var this__6099 = this;
return cljs.core.Vector.fromArray([this__6099.r,this__6099.g,this__6099.b,this__6099.a]);
});
one.color.Color.prototype.one$color$IColor$hex = (function (_){
var this__6100 = this;
return goog.color.rgbArrayToHex.call(null,cljs.core.array.call(null,this__6100.r,this__6100.g,this__6100.b));
});
one.color.Color.prototype.one$color$IColor$hex_rgba = (function (_){
var this__6101 = this;
return goog.color.alpha.rgbaArrayToHex.call(null,cljs.core.array.call(null,this__6101.r,this__6101.g,this__6101.b,this__6101.a));
});
one.color.Color.prototype.one$color$IColor$alpha = (function (_){
var this__6102 = this;
return this__6102.a;
});
one.color.Color.prototype.cljs$core$IRecord$ = true;
one.color.Color.prototype.cljs$core$ICollection$ = true;
one.color.Color.prototype.cljs$core$ICollection$_conj = (function (this__337__auto__,entry__338__auto__){
var this__6103 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__338__auto__)))
{return cljs.core._assoc.call(null,this__337__auto__,cljs.core._nth.call(null,entry__338__auto__,0),cljs.core._nth.call(null,entry__338__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__337__auto__,entry__338__auto__);
}
});
one.color.Color.prototype.cljs$core$ISeqable$ = true;
one.color.Color.prototype.cljs$core$ISeqable$_seq = (function (this__344__auto__){
var this__6104 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'r",this__6104.r),cljs.core.vector.call(null,"﷐'g",this__6104.g),cljs.core.vector.call(null,"﷐'b",this__6104.b),cljs.core.vector.call(null,"﷐'a",this__6104.a)]),this__6104.__extmap));
});
one.color.Color.prototype.cljs$core$IPrintable$ = true;
one.color.Color.prototype.cljs$core$IPrintable$_pr_seq = (function (this__346__auto__,opts__347__auto__){
var this__6105 = this;
var pr_pair__348__auto____6106 = (function (keyval__349__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__347__auto__,keyval__349__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__348__auto____6106,cljs.core.str.call(null,"#","one.color.Color","{"),", ","}",opts__347__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'r",this__6105.r),cljs.core.vector.call(null,"﷐'g",this__6105.g),cljs.core.vector.call(null,"﷐'b",this__6105.b),cljs.core.vector.call(null,"﷐'a",this__6105.a)]),this__6105.__extmap));
});
one.color.Color.prototype.cljs$core$ICounted$ = true;
one.color.Color.prototype.cljs$core$ICounted$_count = (function (this__336__auto__){
var this__6107 = this;
return (4 + cljs.core.count.call(null,this__6107.__extmap));
});
one.color.Color.prototype.cljs$core$IEquiv$ = true;
one.color.Color.prototype.cljs$core$IEquiv$_equiv = (function (this__327__auto__,other__328__auto__){
var this__6108 = this;
var and__3546__auto____6109 = (this__327__auto__.constructor === other__328__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____6109))
{return cljs.core.equiv_map.call(null,this__327__auto__,other__328__auto__);
} else
{return and__3546__auto____6109;
}
});
one.color.Color.prototype.cljs$core$IWithMeta$ = true;
one.color.Color.prototype.cljs$core$IWithMeta$_with_meta = (function (this__330__auto__,G__6087){
var this__6110 = this;
return (new one.color.Color(this__6110.r,this__6110.g,this__6110.b,this__6110.a,G__6087,this__6110.__extmap));
});
one.color.Color.prototype.cljs$core$IMeta$ = true;
one.color.Color.prototype.cljs$core$IMeta$_meta = (function (this__329__auto__){
var this__6111 = this;
return this__6111.__meta;
});
one.color.Color.prototype.cljs$core$IMap$ = true;
one.color.Color.prototype.cljs$core$IMap$_dissoc = (function (this__341__auto__,k__342__auto__){
var this__6112 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'r","﷐'a","﷐'b","﷐'g"]),k__342__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__341__auto__),this__6112.__meta),k__342__auto__);
} else
{return (new one.color.Color(this__6112.r,this__6112.g,this__6112.b,this__6112.a,this__6112.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__6112.__extmap,k__342__auto__))));
}
});
one.color.__GT_Color = (function __GT_Color(r,g,b,a){
return (new one.color.Color(r,g,b,a));
});
one.color.map__GT_Color = (function map__GT_Color(G__6088){
return (new one.color.Color("﷐'r".call(null,G__6088),"﷐'g".call(null,G__6088),"﷐'b".call(null,G__6088),"﷐'a".call(null,G__6088),null,cljs.core.dissoc.call(null,G__6088,"﷐'r","﷐'g","﷐'b","﷐'a")));
});
one.color.make_color = (function() {
var make_color = null;
var make_color__6117 = (function (r,g,b){
return make_color.call(null,r,g,b,1);
});
var make_color__6118 = (function (r,g,b,a){
return (new one.color.Color(r,g,b,a));
});
make_color = function(r,g,b,a){
switch(arguments.length){
case  3 :
return make_color__6117.call(this,r,g,b);
case  4 :
return make_color__6118.call(this,r,g,b,a);
}
throw('Invalid arity: ' + arguments.length);
};
return make_color;
})()
;
one.color.IColorSource = {};
one.color.color = (function color(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6120 = this$;

if(cljs.core.truth_(and__3546__auto____6120))
{return this$.one$color$IColorSource$color;
} else
{return and__3546__auto____6120;
}
})()))
{return this$.one$color$IColorSource$color(this$);
} else
{return (function (){var or__3548__auto____6121 = (one.color.color[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6121))
{return or__3548__auto____6121;
} else
{var or__3548__auto____6122 = (one.color.color["_"]);

if(cljs.core.truth_(or__3548__auto____6122))
{return or__3548__auto____6122;
} else
{throw cljs.core.missing_protocol.call(null,"IColorSource.color",this$);
}
}
})().call(null,this$);
}
});
one.color.bg_color = (function bg_color(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6123 = this$;

if(cljs.core.truth_(and__3546__auto____6123))
{return this$.one$color$IColorSource$bg_color;
} else
{return and__3546__auto____6123;
}
})()))
{return this$.one$color$IColorSource$bg_color(this$);
} else
{return (function (){var or__3548__auto____6124 = (one.color.bg_color[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6124))
{return or__3548__auto____6124;
} else
{var or__3548__auto____6125 = (one.color.bg_color["_"]);

if(cljs.core.truth_(or__3548__auto____6125))
{return or__3548__auto____6125;
} else
{throw cljs.core.missing_protocol.call(null,"IColorSource.bg-color",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$color$IColorSource$ = true;
Element.prototype.one$color$IColorSource$color = (function (this$){
return one.color.color.call(null,cljs.core.js__GT_clj.call(null,goog.color.parse.call(null,one.core.get_style.call(null,this$,"color")),"﷐'keywordize-keys",true));
});
Element.prototype.one$color$IColorSource$bg_color = (function (this$){
return one.color.color.call(null,cljs.core.js__GT_clj.call(null,(function (){var c__6126 = goog.style.getBackgroundColor.call(null,this$);

try{return goog.color.parse.call(null,c__6126);
}catch (e6127){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e6127)))
{var e__6128 = e6127;

return goog.color.alpha.parse.call(null,c__6126);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e6127;
} else
{return null;
}
}
}})(),"﷐'keywordize-keys",true));
});
cljs.core.ObjMap.prototype.one$color$IColorSource$ = true;
cljs.core.ObjMap.prototype.one$color$IColorSource$color = (function (this$){
return one.color.color.call(null,"﷐'hex".call(null,this$));
});
cljs.core.ObjMap.prototype.one$color$IColorSource$bg_color = (function (this$){
return one.color.color.call(null,this$);
});
String.prototype.one$color$IColorSource$ = true;
String.prototype.one$color$IColorSource$color = (function (this$){
return one.color.color.call(null,cljs.core.js__GT_clj.call(null,(cljs.core.truth_(goog.string.startsWith.call(null,this$,"#"))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$),7))?goog.color.hexToRgb.call(null,this$):(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$),9))?goog.color.alpha.hexToRgba.call(null,this$):null)):(cljs.core.truth_(goog.string.startsWith.call(null,this$,"rgba("))?goog.color.alpha.parse.call(null,this$):(cljs.core.truth_(goog.string.startsWith.call(null,this$,"rgb("))?goog.color.parseRgb.call(null,this$):null))),"﷐'keywordize-keys",true));
});
String.prototype.one$color$IColorSource$bg_color = (function (this$){
return one.color.color.call(null,this$);
});
Array.prototype.one$color$IColorSource$ = true;
Array.prototype.one$color$IColorSource$color = (function (this$){
return cljs.core.apply.call(null,one.color.make_color,cljs.core.js__GT_clj.call(null,this$));
});
Array.prototype.one$color$IColorSource$bg_color = (function (this$){
return cljs.core.apply.call(null,one.color.make_color,cljs.core.js__GT_clj.call(null,this$));
});
cljs.core.Vector.prototype.one$color$IColorSource$ = true;
cljs.core.Vector.prototype.one$color$IColorSource$color = (function (this$){
return cljs.core.apply.call(null,one.color.make_color,this$);
});
cljs.core.Vector.prototype.one$color$IColorSource$bg_color = (function (this$){
return cljs.core.apply.call(null,one.color.make_color,this$);
});
one.color.Color.prototype.one$color$IColorSource$ = true;
one.color.Color.prototype.one$color$IColorSource$color = (function (this$){
return this$;
});
one.color.Color.prototype.one$color$IColorSource$bg_color = (function (this$){
return this$;
});
(one.color.IColorSource["null"] = true);
(one.color.color["null"] = (function (this$){
return one.color.make_color.call(null,0,0,0);
}));
(one.color.bg_color["null"] = (function (this$){
return one.color.make_color.call(null,0,0,0);
}));
