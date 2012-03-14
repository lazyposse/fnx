goog.provide('one.browser.animation');
goog.require('cljs.core');
goog.require('one.core');
goog.require('one.color');
goog.require('clojure.browser.event');
goog.require('goog.fx.easing');
goog.require('domina.xpath');
goog.require('clojure.browser.dom');
goog.require('goog.fx.dom');
goog.require('goog.fx.AnimationQueue');
goog.require('goog.style');
goog.require('domina');
goog.require('goog.async.Delay');
goog.require('goog.string');
one.browser.animation._STAR_default_time_STAR_ = 1000;
/**
* Accepts a keyword, string or element and returns an
* element. Strings are assumed to be xpath format.
*/
one.browser.animation.get_element = (function get_element(e){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,e)))
{return domina.by_id.call(null,cljs.core.name.call(null,e));
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,e)))
{return cljs.core.first.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,e)));
} else
{if(cljs.core.truth_("﷐'else"))
{return e;
} else
{return null;
}
}
}
});
one.browser.animation.IPosition = {};
one.browser.animation.position = (function position(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5762 = this$;

if(cljs.core.truth_(and__3546__auto____5762))
{return this$.one$browser$animation$IPosition$position;
} else
{return and__3546__auto____5762;
}
})()))
{return this$.one$browser$animation$IPosition$position(this$);
} else
{return (function (){var or__3548__auto____5763 = (one.browser.animation.position[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5763))
{return or__3548__auto____5763;
} else
{var or__3548__auto____5764 = (one.browser.animation.position["_"]);

if(cljs.core.truth_(or__3548__auto____5764))
{return or__3548__auto____5764;
} else
{throw cljs.core.missing_protocol.call(null,"IPosition.position",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$IPosition$ = true;
Element.prototype.one$browser$animation$IPosition$position = (function (this$){
var p__5765 = cljs.core.js__GT_clj.call(null,goog.style.getPosition.call(null,this$),"﷐'keywordize-keys",true);

return cljs.core.Vector.fromArray(["﷐'x".call(null,p__5765),"﷐'y".call(null,p__5765)]);
});
Array.prototype.one$browser$animation$IPosition$ = true;
Array.prototype.one$browser$animation$IPosition$position = (function (this$){
return cljs.core.js__GT_clj.call(null,this$);
});
cljs.core.Vector.prototype.one$browser$animation$IPosition$ = true;
cljs.core.Vector.prototype.one$browser$animation$IPosition$position = (function (this$){
return this$;
});
one.browser.animation.IScroll = {};
one.browser.animation.scroll = (function scroll(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5766 = this$;

if(cljs.core.truth_(and__3546__auto____5766))
{return this$.one$browser$animation$IScroll$scroll;
} else
{return and__3546__auto____5766;
}
})()))
{return this$.one$browser$animation$IScroll$scroll(this$);
} else
{return (function (){var or__3548__auto____5767 = (one.browser.animation.scroll[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5767))
{return or__3548__auto____5767;
} else
{var or__3548__auto____5768 = (one.browser.animation.scroll["_"]);

if(cljs.core.truth_(or__3548__auto____5768))
{return or__3548__auto____5768;
} else
{throw cljs.core.missing_protocol.call(null,"IScroll.scroll",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$IScroll$ = true;
Element.prototype.one$browser$animation$IScroll$scroll = (function (this$){
return cljs.core.Vector.fromArray([this$.scrollLeft,this$.scrollTop]);
});
cljs.core.Vector.prototype.one$browser$animation$IScroll$ = true;
cljs.core.Vector.prototype.one$browser$animation$IScroll$scroll = (function (this$){
return this$;
});
Number.prototype.one$browser$animation$IScroll$ = true;
Number.prototype.one$browser$animation$IScroll$scroll = (function (this$){
return cljs.core.Vector.fromArray([0,this$]);
});
one.browser.animation.ISize = {};
one.browser.animation.size = (function size(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5769 = this$;

if(cljs.core.truth_(and__3546__auto____5769))
{return this$.one$browser$animation$ISize$size;
} else
{return and__3546__auto____5769;
}
})()))
{return this$.one$browser$animation$ISize$size(this$);
} else
{return (function (){var or__3548__auto____5770 = (one.browser.animation.size[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5770))
{return or__3548__auto____5770;
} else
{var or__3548__auto____5771 = (one.browser.animation.size["_"]);

if(cljs.core.truth_(or__3548__auto____5771))
{return or__3548__auto____5771;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.size",this$);
}
}
})().call(null,this$);
}
});
one.browser.animation.width = (function width(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5772 = this$;

if(cljs.core.truth_(and__3546__auto____5772))
{return this$.one$browser$animation$ISize$width;
} else
{return and__3546__auto____5772;
}
})()))
{return this$.one$browser$animation$ISize$width(this$);
} else
{return (function (){var or__3548__auto____5773 = (one.browser.animation.width[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5773))
{return or__3548__auto____5773;
} else
{var or__3548__auto____5774 = (one.browser.animation.width["_"]);

if(cljs.core.truth_(or__3548__auto____5774))
{return or__3548__auto____5774;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.width",this$);
}
}
})().call(null,this$);
}
});
one.browser.animation.height = (function height(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5775 = this$;

if(cljs.core.truth_(and__3546__auto____5775))
{return this$.one$browser$animation$ISize$height;
} else
{return and__3546__auto____5775;
}
})()))
{return this$.one$browser$animation$ISize$height(this$);
} else
{return (function (){var or__3548__auto____5776 = (one.browser.animation.height[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5776))
{return or__3548__auto____5776;
} else
{var or__3548__auto____5777 = (one.browser.animation.height["_"]);

if(cljs.core.truth_(or__3548__auto____5777))
{return or__3548__auto____5777;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.height",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$ISize$ = true;
Element.prototype.one$browser$animation$ISize$size = (function (this$){
var s__5778 = cljs.core.js__GT_clj.call(null,goog.style.getSize.call(null,this$),"﷐'keywordize-keys",true);

return cljs.core.Vector.fromArray(["﷐'width".call(null,s__5778),"﷐'height".call(null,s__5778)]);
});
Element.prototype.one$browser$animation$ISize$width = (function (this$){
return one.browser.animation.width.call(null,one.browser.animation.size.call(null,this$));
});
Element.prototype.one$browser$animation$ISize$height = (function (this$){
return one.browser.animation.height.call(null,one.browser.animation.size.call(null,this$));
});
cljs.core.Vector.prototype.one$browser$animation$ISize$ = true;
cljs.core.Vector.prototype.one$browser$animation$ISize$size = (function (this$){
return this$;
});
cljs.core.Vector.prototype.one$browser$animation$ISize$width = (function (this$){
return cljs.core.first.call(null,this$);
});
cljs.core.Vector.prototype.one$browser$animation$ISize$height = (function (this$){
return cljs.core.second.call(null,this$);
});
Number.prototype.one$browser$animation$ISize$ = true;
Number.prototype.one$browser$animation$ISize$size = (function (this$){
return cljs.core.Vector.fromArray([this$,this$]);
});
Number.prototype.one$browser$animation$ISize$width = (function (this$){
return this$;
});
Number.prototype.one$browser$animation$ISize$height = (function (this$){
return this$;
});
one.browser.animation.IOpacity = {};
one.browser.animation.opacity = (function opacity(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5779 = this$;

if(cljs.core.truth_(and__3546__auto____5779))
{return this$.one$browser$animation$IOpacity$opacity;
} else
{return and__3546__auto____5779;
}
})()))
{return this$.one$browser$animation$IOpacity$opacity(this$);
} else
{return (function (){var or__3548__auto____5780 = (one.browser.animation.opacity[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5780))
{return or__3548__auto____5780;
} else
{var or__3548__auto____5781 = (one.browser.animation.opacity["_"]);

if(cljs.core.truth_(or__3548__auto____5781))
{return or__3548__auto____5781;
} else
{throw cljs.core.missing_protocol.call(null,"IOpacity.opacity",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$IOpacity$ = true;
Element.prototype.one$browser$animation$IOpacity$opacity = (function (this$){
var op__5782 = goog.style.getComputedStyle.call(null,this$,"opacity");

if(cljs.core.truth_(cljs.core._EQ_.call(null,op__5782,"")))
{return one.browser.animation.opacity.call(null,goog.style.getOpacity.call(null,this$));
} else
{return op__5782;
}
});
Number.prototype.one$browser$animation$IOpacity$ = true;
Number.prototype.one$browser$animation$IOpacity$opacity = (function (this$){
return this$;
});
String.prototype.one$browser$animation$IOpacity$ = true;
String.prototype.one$browser$animation$IOpacity$opacity = (function (this$){
return parseFloat.call(null,this$);
});
goog.fx.AnimationQueue.prototype.one$core$Disposable$ = true;
goog.fx.AnimationQueue.prototype.one$core$Disposable$dispose = (function (this$){
return this$.dispose(cljs.core.List.EMPTY);
});
goog.fx.AnimationQueue.prototype.one$core$Startable$ = true;
goog.fx.AnimationQueue.prototype.one$core$Startable$start = (function (this$){
return this$.play(cljs.core.List.EMPTY);
});
goog.fx.dom.PredefinedEffect.prototype.clojure$browser$event$EventType$ = true;
goog.fx.dom.PredefinedEffect.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__5783){
var vec__5784__5785 = p__5783;
var k__5786 = cljs.core.nth.call(null,vec__5784__5785,0,null);
var v__5787 = cljs.core.nth.call(null,vec__5784__5785,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__5786.toLowerCase()),v__5787]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.fx.Animation.EventType))));
});
goog.fx.dom.PredefinedEffect.prototype.one$core$Disposable$ = true;
goog.fx.dom.PredefinedEffect.prototype.one$core$Disposable$dispose = (function (this$){
return this$.dispose(cljs.core.List.EMPTY);
});
goog.fx.dom.PredefinedEffect.prototype.one$core$Startable$ = true;
goog.fx.dom.PredefinedEffect.prototype.one$core$Startable$start = (function (this$){
return this$.play(cljs.core.List.EMPTY);
});
/**
* Get the acceleration function associated with a given
* keyword. Implementing this as a multimethod allows developers to add new
* functions and still represent effects as data.
*/
one.browser.animation.acceleration = (function (){var method_table__513__auto____5788 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__514__auto____5789 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__515__auto____5790 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__516__auto____5791 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__517__auto____5792 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject(["﷐'default"],{"﷐'default":"﷐'ease-out"}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("acceleration",cljs.core.identity,"﷐'ease-out",hierarchy__517__auto____5792,method_table__513__auto____5788,prefer_table__514__auto____5789,method_cache__515__auto____5790,cached_hierarchy__516__auto____5791));
})();
cljs.core._add_method.call(null,one.browser.animation.acceleration,"﷐'ease-out",(function (name){
return goog.fx.easing.easeOut;
}));
cljs.core._add_method.call(null,one.browser.animation.acceleration,"﷐'ease-in",(function (name){
return goog.fx.easing.easeIn;
}));
cljs.core._add_method.call(null,one.browser.animation.acceleration,"﷐'in-and-out",(function (name){
return goog.fx.easing.inAndOut;
}));
/**
* Given a map which represents an effect. Return the acceleration
* function or `nil`.
*/
one.browser.animation.accel = (function accel(m){
var temp__3698__auto____5793 = "﷐'accel".call(null,m);

if(cljs.core.truth_(temp__3698__auto____5793))
{var a__5794 = temp__3698__auto____5793;

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,a__5794)))
{return a__5794;
} else
{return one.browser.animation.acceleration.call(null,a__5794);
}
} else
{return null;
}
});


/**
* @constructor
* @param {*} effect
* @param {*} start
* @param {*} end
* @param {*} time
* @param {*} accel
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
one.browser.animation.Effect = (function (effect,start,end,time,accel,__meta,__extmap){
this.effect = effect;
this.start = start;
this.end = end;
this.time = time;
this.accel = accel;
this.__meta = __meta;
this.__extmap = __extmap;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
one.browser.animation.Effect.prototype.one$browser$animation$IScroll$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$IScroll$scroll = (function (this$){
var this__5797 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$IHash$ = true;
one.browser.animation.Effect.prototype.cljs$core$IHash$_hash = (function (this__326__auto__){
var this__5798 = this;
return cljs.core.hash_coll.call(null,this__326__auto__);
});
one.browser.animation.Effect.prototype.cljs$core$ILookup$ = true;
one.browser.animation.Effect.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5824 = null;
var G__5824__5825 = (function (this__331__auto__,k__332__auto__){
var this__5799 = this;
return cljs.core._lookup.call(null,this__331__auto__,k__332__auto__,null);
});
var G__5824__5826 = (function (this__333__auto__,k__334__auto__,else__335__auto__){
var this__5800 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'effect",this__5800.effect,"﷐'start",this__5800.start,"﷐'end",this__5800.end,"﷐'time",this__5800.time,"﷐'accel",this__5800.accel),this__5800.__extmap),k__334__auto__,else__335__auto__);
});
G__5824 = function(this__333__auto__,k__334__auto__,else__335__auto__){
switch(arguments.length){
case  2 :
return G__5824__5825.call(this,this__333__auto__,k__334__auto__);
case  3 :
return G__5824__5826.call(this,this__333__auto__,k__334__auto__,else__335__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5824;
})()
;
one.browser.animation.Effect.prototype.cljs$core$IAssociative$ = true;
one.browser.animation.Effect.prototype.cljs$core$IAssociative$_assoc = (function (this__339__auto__,k__340__auto__,G__5795){
var this__5801 = this;
var pred__5802__5805 = cljs.core.identical_QMARK_;
var expr__5803__5806 = k__340__auto__;

if(cljs.core.truth_(pred__5802__5805.call(null,"﷐'effect",expr__5803__5806)))
{return (new one.browser.animation.Effect(G__5795,this__5801.start,this__5801.end,this__5801.time,this__5801.accel,this__5801.__meta,this__5801.__extmap));
} else
{if(cljs.core.truth_(pred__5802__5805.call(null,"﷐'start",expr__5803__5806)))
{return (new one.browser.animation.Effect(this__5801.effect,G__5795,this__5801.end,this__5801.time,this__5801.accel,this__5801.__meta,this__5801.__extmap));
} else
{if(cljs.core.truth_(pred__5802__5805.call(null,"﷐'end",expr__5803__5806)))
{return (new one.browser.animation.Effect(this__5801.effect,this__5801.start,G__5795,this__5801.time,this__5801.accel,this__5801.__meta,this__5801.__extmap));
} else
{if(cljs.core.truth_(pred__5802__5805.call(null,"﷐'time",expr__5803__5806)))
{return (new one.browser.animation.Effect(this__5801.effect,this__5801.start,this__5801.end,G__5795,this__5801.accel,this__5801.__meta,this__5801.__extmap));
} else
{if(cljs.core.truth_(pred__5802__5805.call(null,"﷐'accel",expr__5803__5806)))
{return (new one.browser.animation.Effect(this__5801.effect,this__5801.start,this__5801.end,this__5801.time,G__5795,this__5801.__meta,this__5801.__extmap));
} else
{return (new one.browser.animation.Effect(this__5801.effect,this__5801.start,this__5801.end,this__5801.time,this__5801.accel,this__5801.__meta,cljs.core.assoc.call(null,this__5801.__extmap,k__340__auto__,G__5795)));
}
}
}
}
}
});
one.browser.animation.Effect.prototype.cljs$core$IRecord$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICollection$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICollection$_conj = (function (this__337__auto__,entry__338__auto__){
var this__5807 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__338__auto__)))
{return cljs.core._assoc.call(null,this__337__auto__,cljs.core._nth.call(null,entry__338__auto__,0),cljs.core._nth.call(null,entry__338__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__337__auto__,entry__338__auto__);
}
});
one.browser.animation.Effect.prototype.one$browser$animation$IPosition$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$IPosition$position = (function (this$){
var this__5808 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$color$IColorSource$ = true;
one.browser.animation.Effect.prototype.one$color$IColorSource$color = (function (this$){
var this__5809 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$color$IColorSource$bg_color = (function (this$){
var this__5810 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$ISeqable$ = true;
one.browser.animation.Effect.prototype.cljs$core$ISeqable$_seq = (function (this__344__auto__){
var this__5811 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'effect",this__5811.effect),cljs.core.vector.call(null,"﷐'start",this__5811.start),cljs.core.vector.call(null,"﷐'end",this__5811.end),cljs.core.vector.call(null,"﷐'time",this__5811.time),cljs.core.vector.call(null,"﷐'accel",this__5811.accel)]),this__5811.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IPrintable$ = true;
one.browser.animation.Effect.prototype.cljs$core$IPrintable$_pr_seq = (function (this__346__auto__,opts__347__auto__){
var this__5812 = this;
var pr_pair__348__auto____5813 = (function (keyval__349__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__347__auto__,keyval__349__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__348__auto____5813,cljs.core.str.call(null,"#","one.browser.animation.Effect","{"),", ","}",opts__347__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'effect",this__5812.effect),cljs.core.vector.call(null,"﷐'start",this__5812.start),cljs.core.vector.call(null,"﷐'end",this__5812.end),cljs.core.vector.call(null,"﷐'time",this__5812.time),cljs.core.vector.call(null,"﷐'accel",this__5812.accel)]),this__5812.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$ICounted$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICounted$_count = (function (this__336__auto__){
var this__5814 = this;
return (5 + cljs.core.count.call(null,this__5814.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IEquiv$ = true;
one.browser.animation.Effect.prototype.cljs$core$IEquiv$_equiv = (function (this__327__auto__,other__328__auto__){
var this__5815 = this;
var and__3546__auto____5816 = (this__327__auto__.constructor === other__328__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____5816))
{return cljs.core.equiv_map.call(null,this__327__auto__,other__328__auto__);
} else
{return and__3546__auto____5816;
}
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$ISize$size = (function (this$){
var this__5817 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$width = (function (this$){
var this__5818 = this;
return one.browser.animation.width.call(null,"﷐'end".call(null,this$));
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$height = (function (this$){
var this__5819 = this;
return one.browser.animation.height.call(null,"﷐'end".call(null,this$));
});
one.browser.animation.Effect.prototype.cljs$core$IWithMeta$ = true;
one.browser.animation.Effect.prototype.cljs$core$IWithMeta$_with_meta = (function (this__330__auto__,G__5795){
var this__5820 = this;
return (new one.browser.animation.Effect(this__5820.effect,this__5820.start,this__5820.end,this__5820.time,this__5820.accel,G__5795,this__5820.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IMeta$ = true;
one.browser.animation.Effect.prototype.cljs$core$IMeta$_meta = (function (this__329__auto__){
var this__5821 = this;
return this__5821.__meta;
});
one.browser.animation.Effect.prototype.one$browser$animation$IOpacity$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$IOpacity$opacity = (function (this$){
var this__5823 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$IMap$ = true;
one.browser.animation.Effect.prototype.cljs$core$IMap$_dissoc = (function (this__341__auto__,k__342__auto__){
var this__5822 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'effect","﷐'start","﷐'end","﷐'accel","﷐'time"]),k__342__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__341__auto__),this__5822.__meta),k__342__auto__);
} else
{return (new one.browser.animation.Effect(this__5822.effect,this__5822.start,this__5822.end,this__5822.time,this__5822.accel,this__5822.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__5822.__extmap,k__342__auto__))));
}
});
one.browser.animation.__GT_Effect = (function __GT_Effect(effect,start,end,time,accel){
return (new one.browser.animation.Effect(effect,start,end,time,accel));
});
one.browser.animation.map__GT_Effect = (function map__GT_Effect(G__5796){
return (new one.browser.animation.Effect("﷐'effect".call(null,G__5796),"﷐'start".call(null,G__5796),"﷐'end".call(null,G__5796),"﷐'time".call(null,G__5796),"﷐'accel".call(null,G__5796),null,cljs.core.dissoc.call(null,G__5796,"﷐'effect","﷐'start","﷐'end","﷐'time","﷐'accel")));
});
/**
* Dispatch function for effect multimethods. Accepts an element and a
* map describing an effect and returns the effect name as a keyword.
*/
one.browser.animation.effect_dispatch = (function effect_dispatch(_,p__5828){
var map__5829__5830 = p__5828;
var map__5829__5831 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5829__5830))?cljs.core.apply.call(null,cljs.core.hash_map,map__5829__5830):map__5829__5830);
var effect__5832 = cljs.core.get.call(null,map__5829__5831,"﷐'effect");

return effect__5832;
});
/**
* Accepts an element and an effect map and returns a standardized
* effect map which must contain the four keys: `:start`, `:end`,
* `:time` and `:accel`.
* 
* The element argument can either be an HTML element or an effect map
* which describes the previous effect.
*/
one.browser.animation.standardize = (function (){var method_table__513__auto____5833 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__514__auto____5834 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__515__auto____5835 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__516__auto____5836 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__517__auto____5837 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("standardize",one.browser.animation.effect_dispatch,"﷐'default",hierarchy__517__auto____5837,method_table__513__auto____5833,prefer_table__514__auto____5834,method_cache__515__auto____5835,cached_hierarchy__516__auto____5836));
})();
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'color",(function (element,m){
return (new one.browser.animation.Effect("﷐'color",one.color.color.call(null,(function (){var or__3548__auto____5838 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5838))
{return or__3548__auto____5838;
} else
{return element;
}
})()),one.color.color.call(null,(function (){var or__3548__auto____5839 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5839))
{return or__3548__auto____5839;
} else
{return element;
}
})()),(function (){var or__3548__auto____5840 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5840))
{return or__3548__auto____5840;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
/**
* Accepts an element and a map and returns an effect. The returned
* effect may be run or composed with other effects.
* 
* Available effects include: `:color`, `:fade`, `:fade-in`, `:fade-out`,
* `:fade-in-and-show`, `:fade-out-and-hide`, `:slide`, `:swipe`, `:bg-color`,
* `:resize`, `:resize-width` and `:resize-height`.
*/
one.browser.animation.effect = (function (){var method_table__513__auto____5841 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__514__auto____5842 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__515__auto____5843 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__516__auto____5844 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__517__auto____5845 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("effect",one.browser.animation.effect_dispatch,"﷐'default",hierarchy__517__auto____5845,method_table__513__auto____5841,prefer_table__514__auto____5842,method_cache__515__auto____5843,cached_hierarchy__516__auto____5844));
})();
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'color",(function (element,m){
var map__5846__5847 = one.browser.animation.standardize.call(null,element,m);
var map__5846__5848 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5846__5847))?cljs.core.apply.call(null,cljs.core.hash_map,map__5846__5847):map__5846__5847);
var accel__5849 = cljs.core.get.call(null,map__5846__5848,"﷐'accel");
var time__5850 = cljs.core.get.call(null,map__5846__5848,"﷐'time");
var end__5851 = cljs.core.get.call(null,map__5846__5848,"﷐'end");
var start__5852 = cljs.core.get.call(null,map__5846__5848,"﷐'start");

return (new goog.fx.dom.ColorTransform(element,cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,start__5852)),cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,end__5851)),time__5850,accel__5849));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade",one.browser.animation.opacity.call(null,(function (){var or__3548__auto____5853 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5853))
{return or__3548__auto____5853;
} else
{return element;
}
})()),one.browser.animation.opacity.call(null,"﷐'end".call(null,m)),(function (){var or__3548__auto____5854 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5854))
{return or__3548__auto____5854;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade",(function (element,m){
var map__5855__5856 = one.browser.animation.standardize.call(null,element,m);
var map__5855__5857 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5855__5856))?cljs.core.apply.call(null,cljs.core.hash_map,map__5855__5856):map__5855__5856);
var accel__5858 = cljs.core.get.call(null,map__5855__5857,"﷐'accel");
var time__5859 = cljs.core.get.call(null,map__5855__5857,"﷐'time");
var end__5860 = cljs.core.get.call(null,map__5855__5857,"﷐'end");
var start__5861 = cljs.core.get.call(null,map__5855__5857,"﷐'start");

return (new goog.fx.dom.Fade(element,start__5861,end__5860,time__5859,accel__5858));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-in",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-in",0,1,(function (){var or__3548__auto____5862 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5862))
{return or__3548__auto____5862;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-in",(function (element,m){
var map__5863__5864 = one.browser.animation.standardize.call(null,element,m);
var map__5863__5865 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5863__5864))?cljs.core.apply.call(null,cljs.core.hash_map,map__5863__5864):map__5863__5864);
var accel__5866 = cljs.core.get.call(null,map__5863__5865,"﷐'accel");
var time__5867 = cljs.core.get.call(null,map__5863__5865,"﷐'time");

return (new goog.fx.dom.FadeIn(element,time__5867,accel__5866));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-out",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-out",1,0,(function (){var or__3548__auto____5868 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5868))
{return or__3548__auto____5868;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-out",(function (element,m){
var map__5869__5870 = one.browser.animation.standardize.call(null,element,m);
var map__5869__5871 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5869__5870))?cljs.core.apply.call(null,cljs.core.hash_map,map__5869__5870):map__5869__5870);
var accel__5872 = cljs.core.get.call(null,map__5869__5871,"﷐'accel");
var time__5873 = cljs.core.get.call(null,map__5869__5871,"﷐'time");

return (new goog.fx.dom.FadeOut(element,time__5873,accel__5872));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-in-and-show",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-in-and-show",0,1,(function (){var or__3548__auto____5874 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5874))
{return or__3548__auto____5874;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-in-and-show",(function (element,m){
var map__5875__5876 = one.browser.animation.standardize.call(null,element,m);
var map__5875__5877 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5875__5876))?cljs.core.apply.call(null,cljs.core.hash_map,map__5875__5876):map__5875__5876);
var accel__5878 = cljs.core.get.call(null,map__5875__5877,"﷐'accel");
var time__5879 = cljs.core.get.call(null,map__5875__5877,"﷐'time");

return (new goog.fx.dom.FadeInAndShow(element,time__5879,accel__5878));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-out-and-hide",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-out-and-hide",1,0,(function (){var or__3548__auto____5880 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5880))
{return or__3548__auto____5880;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-out-and-hide",(function (element,m){
var map__5882__5883 = one.browser.animation.standardize.call(null,element,m);
var map__5882__5884 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5882__5883))?cljs.core.apply.call(null,cljs.core.hash_map,map__5882__5883):map__5882__5883);
var accel__5885 = cljs.core.get.call(null,map__5882__5884,"﷐'accel");
var time__5886 = cljs.core.get.call(null,map__5882__5884,"﷐'time");

return (new goog.fx.dom.FadeOutAndHide(element,time__5886,accel__5885));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'bg-color",(function (element,m){
var start__5888 = (function (){var or__3548__auto____5887 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5887))
{return or__3548__auto____5887;
} else
{return element;
}
})();
var end__5890 = (function (){var or__3548__auto____5889 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5889))
{return or__3548__auto____5889;
} else
{return element;
}
})();

return (new one.browser.animation.Effect("﷐'bg-color",one.color.bg_color.call(null,start__5888),one.color.bg_color.call(null,end__5890),(function (){var or__3548__auto____5891 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5891))
{return or__3548__auto____5891;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'bg-color",(function (element,m){
var map__5892__5893 = one.browser.animation.standardize.call(null,element,m);
var map__5892__5894 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5892__5893))?cljs.core.apply.call(null,cljs.core.hash_map,map__5892__5893):map__5892__5893);
var accel__5895 = cljs.core.get.call(null,map__5892__5894,"﷐'accel");
var time__5896 = cljs.core.get.call(null,map__5892__5894,"﷐'time");
var end__5897 = cljs.core.get.call(null,map__5892__5894,"﷐'end");
var start__5898 = cljs.core.get.call(null,map__5892__5894,"﷐'start");

return (new goog.fx.dom.BgColorTransform(element,cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,start__5898)),cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,end__5897)),time__5896,accel__5895));
}));
/**
* Calculate the end of a slide based on the start value and the
* passed `:left`, `:right`, `:up` and `:down` values.
*/
one.browser.animation.calculate_slide_end = (function calculate_slide_end(p__5899,m){
var vec__5900__5901 = p__5899;
var x__5902 = cljs.core.nth.call(null,vec__5900__5901,0,null);
var y__5903 = cljs.core.nth.call(null,vec__5900__5901,1,null);

return cljs.core.vector.call(null,((x__5902 - "﷐'left".call(null,m,0)) + "﷐'right".call(null,m,0)),((y__5903 - "﷐'up".call(null,m,0)) + "﷐'down".call(null,m,0)));
});
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'slide",(function (element,m){
var start__5905 = one.browser.animation.position.call(null,(function (){var or__3548__auto____5904 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5904))
{return or__3548__auto____5904;
} else
{return element;
}
})());
var end__5907 = (function (){var or__3548__auto____5906 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5906))
{return or__3548__auto____5906;
} else
{return one.browser.animation.calculate_slide_end.call(null,start__5905,m);
}
})();

return (new one.browser.animation.Effect("﷐'slide",start__5905,end__5907,(function (){var or__3548__auto____5908 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5908))
{return or__3548__auto____5908;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'slide",(function (element,m){
var map__5909__5910 = one.browser.animation.standardize.call(null,element,m);
var map__5909__5911 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5909__5910))?cljs.core.apply.call(null,cljs.core.hash_map,map__5909__5910):map__5909__5910);
var accel__5912 = cljs.core.get.call(null,map__5909__5911,"﷐'accel");
var time__5913 = cljs.core.get.call(null,map__5909__5911,"﷐'time");
var end__5914 = cljs.core.get.call(null,map__5909__5911,"﷐'end");
var start__5915 = cljs.core.get.call(null,map__5909__5911,"﷐'start");

return (new goog.fx.dom.Slide(element,cljs.core.apply.call(null,cljs.core.array,start__5915),cljs.core.apply.call(null,cljs.core.array,end__5914),time__5913,accel__5912));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize-height",(function (element,m){
var start__5918 = (function (){var temp__3698__auto____5916 = "﷐'start".call(null,m);

if(cljs.core.truth_(temp__3698__auto____5916))
{var h__5917 = temp__3698__auto____5916;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,element),one.browser.animation.height.call(null,h__5917)]);
} else
{return null;
}
})();
var end__5921 = (function (){var temp__3698__auto____5919 = "﷐'end".call(null,m);

if(cljs.core.truth_(temp__3698__auto____5919))
{var h__5920 = temp__3698__auto____5919;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,element),one.browser.animation.height.call(null,h__5920)]);
} else
{return null;
}
})();

return (new one.browser.animation.Effect("﷐'resize-height",one.browser.animation.size.call(null,(function (){var or__3548__auto____5922 = start__5918;

if(cljs.core.truth_(or__3548__auto____5922))
{return or__3548__auto____5922;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____5923 = end__5921;

if(cljs.core.truth_(or__3548__auto____5923))
{return or__3548__auto____5923;
} else
{return element;
}
})()),(function (){var or__3548__auto____5924 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5924))
{return or__3548__auto____5924;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize-height",(function (element,m){
var map__5925__5926 = one.browser.animation.standardize.call(null,element,m);
var map__5925__5927 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5925__5926))?cljs.core.apply.call(null,cljs.core.hash_map,map__5925__5926):map__5925__5926);
var accel__5928 = cljs.core.get.call(null,map__5925__5927,"﷐'accel");
var time__5929 = cljs.core.get.call(null,map__5925__5927,"﷐'time");
var end__5930 = cljs.core.get.call(null,map__5925__5927,"﷐'end");
var start__5931 = cljs.core.get.call(null,map__5925__5927,"﷐'start");

return (new goog.fx.dom.ResizeHeight(element,one.browser.animation.height.call(null,start__5931),one.browser.animation.height.call(null,end__5930),time__5929,accel__5928));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize-width",(function (element,m){
var start__5934 = (function (){var temp__3698__auto____5932 = "﷐'start".call(null,m);

if(cljs.core.truth_(temp__3698__auto____5932))
{var w__5933 = temp__3698__auto____5932;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,w__5933),one.browser.animation.height.call(null,element)]);
} else
{return null;
}
})();
var end__5937 = (function (){var temp__3698__auto____5935 = "﷐'end".call(null,m);

if(cljs.core.truth_(temp__3698__auto____5935))
{var w__5936 = temp__3698__auto____5935;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,w__5936),one.browser.animation.height.call(null,element)]);
} else
{return null;
}
})();

return (new one.browser.animation.Effect("﷐'resize-width",one.browser.animation.size.call(null,(function (){var or__3548__auto____5938 = start__5934;

if(cljs.core.truth_(or__3548__auto____5938))
{return or__3548__auto____5938;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____5939 = end__5937;

if(cljs.core.truth_(or__3548__auto____5939))
{return or__3548__auto____5939;
} else
{return element;
}
})()),(function (){var or__3548__auto____5940 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5940))
{return or__3548__auto____5940;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize-width",(function (element,m){
var map__5941__5942 = one.browser.animation.standardize.call(null,element,m);
var map__5941__5943 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5941__5942))?cljs.core.apply.call(null,cljs.core.hash_map,map__5941__5942):map__5941__5942);
var accel__5944 = cljs.core.get.call(null,map__5941__5943,"﷐'accel");
var time__5945 = cljs.core.get.call(null,map__5941__5943,"﷐'time");
var end__5946 = cljs.core.get.call(null,map__5941__5943,"﷐'end");
var start__5947 = cljs.core.get.call(null,map__5941__5943,"﷐'start");

return (new goog.fx.dom.ResizeWidth(element,one.browser.animation.width.call(null,start__5947),one.browser.animation.width.call(null,end__5946),time__5945,accel__5944));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize",(function (element,m){
return (new one.browser.animation.Effect("﷐'resize",one.browser.animation.size.call(null,(function (){var or__3548__auto____5948 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5948))
{return or__3548__auto____5948;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____5949 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5949))
{return or__3548__auto____5949;
} else
{return element;
}
})()),(function (){var or__3548__auto____5950 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5950))
{return or__3548__auto____5950;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize",(function (element,m){
var map__5951__5952 = one.browser.animation.standardize.call(null,element,m);
var map__5951__5953 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5951__5952))?cljs.core.apply.call(null,cljs.core.hash_map,map__5951__5952):map__5951__5952);
var accel__5954 = cljs.core.get.call(null,map__5951__5953,"﷐'accel");
var time__5955 = cljs.core.get.call(null,map__5951__5953,"﷐'time");
var end__5956 = cljs.core.get.call(null,map__5951__5953,"﷐'end");
var start__5957 = cljs.core.get.call(null,map__5951__5953,"﷐'start");

return (new goog.fx.dom.Resize(element,cljs.core.apply.call(null,cljs.core.array,start__5957),cljs.core.apply.call(null,cljs.core.array,end__5956),time__5955,accel__5954));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'scroll",(function (element,m){
var start__5959 = (function (){var or__3548__auto____5958 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5958))
{return or__3548__auto____5958;
} else
{return element;
}
})();
var end__5960 = "﷐'end".call(null,m);

return (new one.browser.animation.Effect("﷐'scroll",one.browser.animation.scroll.call(null,start__5959),one.browser.animation.scroll.call(null,end__5960),(function (){var or__3548__auto____5961 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5961))
{return or__3548__auto____5961;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'scroll",(function (element,m){
var map__5962__5963 = one.browser.animation.standardize.call(null,element,m);
var map__5962__5964 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5962__5963))?cljs.core.apply.call(null,cljs.core.hash_map,map__5962__5963):map__5962__5963);
var accel__5965 = cljs.core.get.call(null,map__5962__5964,"﷐'accel");
var time__5966 = cljs.core.get.call(null,map__5962__5964,"﷐'time");
var end__5967 = cljs.core.get.call(null,map__5962__5964,"﷐'end");
var start__5968 = cljs.core.get.call(null,map__5962__5964,"﷐'start");

return (new goog.fx.dom.Scroll(element,cljs.core.apply.call(null,cljs.core.array,start__5968),cljs.core.apply.call(null,cljs.core.array,end__5967),time__5966,accel__5965));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'swipe",(function (element,m){
var start__5970 = (function (){var or__3548__auto____5969 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5969))
{return or__3548__auto____5969;
} else
{return cljs.core.Vector.fromArray([0,0]);
}
})();
var end__5972 = (function (){var or__3548__auto____5971 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5971))
{return or__3548__auto____5971;
} else
{return element;
}
})();

return (new one.browser.animation.Effect("﷐'swipe",one.browser.animation.size.call(null,start__5970),one.browser.animation.size.call(null,end__5972),(function (){var or__3548__auto____5973 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5973))
{return or__3548__auto____5973;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'swipe",(function (element,m){
var map__5974__5975 = one.browser.animation.standardize.call(null,element,m);
var map__5974__5976 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5974__5975))?cljs.core.apply.call(null,cljs.core.hash_map,map__5974__5975):map__5974__5975);
var accel__5977 = cljs.core.get.call(null,map__5974__5976,"﷐'accel");
var time__5978 = cljs.core.get.call(null,map__5974__5976,"﷐'time");
var end__5979 = cljs.core.get.call(null,map__5974__5976,"﷐'end");
var start__5980 = cljs.core.get.call(null,map__5974__5976,"﷐'start");

return (new goog.fx.dom.Swipe(element,cljs.core.apply.call(null,cljs.core.array,start__5980),cljs.core.apply.call(null,cljs.core.array,end__5979),time__5978,accel__5977));
}));
/**
* Cause the passed animations to run in parallel.
* @param {...*} var_args
*/
one.browser.animation.parallel = (function() { 
var parallel__delegate = function (effects){
var parallel__5981 = (new goog.fx.AnimationParallelQueue());

var G__5982__5983 = cljs.core.seq.call(null,effects);

if(cljs.core.truth_(G__5982__5983))
{var effect__5984 = cljs.core.first.call(null,G__5982__5983);
var G__5982__5985 = G__5982__5983;

while(true){
parallel__5981.add(effect__5984);
var temp__3698__auto____5986 = cljs.core.next.call(null,G__5982__5985);

if(cljs.core.truth_(temp__3698__auto____5986))
{var G__5982__5987 = temp__3698__auto____5986;

{
var G__5988 = cljs.core.first.call(null,G__5982__5987);
var G__5989 = G__5982__5987;
effect__5984 = G__5988;
G__5982__5985 = G__5989;
continue;
}
} else
{}
break;
}
} else
{}
return parallel__5981;
};
var parallel = function (var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return parallel__delegate.call(this, effects);
};
parallel.cljs$lang$maxFixedArity = 0;
parallel.cljs$lang$applyTo = (function (arglist__5990){
var effects = cljs.core.seq( arglist__5990 );;
return parallel__delegate.call(this, effects);
});
return parallel;
})()
;
/**
* Cause the passed animations to be run in order.
* @param {...*} var_args
*/
one.browser.animation.serial = (function() { 
var serial__delegate = function (effects){
var serial__5991 = (new goog.fx.AnimationSerialQueue());

var G__5992__5993 = cljs.core.seq.call(null,effects);

if(cljs.core.truth_(G__5992__5993))
{var effect__5994 = cljs.core.first.call(null,G__5992__5993);
var G__5992__5995 = G__5992__5993;

while(true){
serial__5991.add(effect__5994);
var temp__3698__auto____5996 = cljs.core.next.call(null,G__5992__5995);

if(cljs.core.truth_(temp__3698__auto____5996))
{var G__5992__5997 = temp__3698__auto____5996;

{
var G__5998 = cljs.core.first.call(null,G__5992__5997);
var G__5999 = G__5992__5997;
effect__5994 = G__5998;
G__5992__5995 = G__5999;
continue;
}
} else
{}
break;
}
} else
{}
return serial__5991;
};
var serial = function (var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return serial__delegate.call(this, effects);
};
serial.cljs$lang$maxFixedArity = 0;
serial.cljs$lang$applyTo = (function (arglist__6000){
var effects = cljs.core.seq( arglist__6000 );;
return serial__delegate.call(this, effects);
});
return serial;
})()
;
/**
* Mapping of specific effects to a more general category of
* effect. For example, there are multiple size and opacity
* effects. Within a single animation, each type of effect should
* influence subsequent effects of the same type.
*/
one.browser.animation.effect_types = cljs.core.ObjMap.fromObject(["﷐'fade-in","﷐'resize-height","﷐'fade-in-and-show","﷐'color","﷐'resize","﷐'slide","﷐'bg-color","﷐'resize-width","﷐'swipe","﷐'scroll","﷐'fade-out-and-hide","﷐'fade","﷐'fade-out"],{"﷐'fade-in":"﷐'opacity","﷐'resize-height":"﷐'size","﷐'fade-in-and-show":"﷐'opacity","﷐'color":"﷐'color","﷐'resize":"﷐'size","﷐'slide":"﷐'position","﷐'bg-color":"﷐'bg-color","﷐'resize-width":"﷐'size","﷐'swipe":"﷐'size","﷐'scroll":"﷐'scroll","﷐'fade-out-and-hide":"﷐'opacity","﷐'fade":"﷐'opacity","﷐'fade-out":"﷐'opacity"});
/**
* Standardize an effect within the scope of previous effects. Return
* a vector containing the new environment and the standardized
* effect. An effect may be a single map or a vector of maps
*/
one.browser.animation.standardize_in_env = (function standardize_in_env(element,env,effect){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,effect)))
{var coll__6002 = cljs.core.map.call(null,(function (p1__6001_SHARP_){
return standardize_in_env.call(null,element,env,p1__6001_SHARP_);
}),effect);

return cljs.core.Vector.fromArray([cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,cljs.core.first,coll__6002)),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.second,coll__6002))]);
} else
{var effect_type__6003 = "﷐'effect".call(null,effect).call(null,one.browser.animation.effect_types);
var effect__6004 = one.browser.animation.standardize.call(null,cljs.core.get.call(null,env,effect_type__6003,element),effect);
var env__6005 = cljs.core.assoc.call(null,env,effect_type__6003,effect__6004);

return cljs.core.Vector.fromArray([env__6005,effect__6004]);
}
});
/**
* Accepts an element and a list of effects and vectors of effects and
* returns the same structure with all effect map standardized. Missing
* values will be calculated based on previous effects.
* @param {...*} var_args
*/
one.browser.animation.standardize_all_effects = (function() { 
var standardize_all_effects__delegate = function (element,effects){
var env__6006 = cljs.core.ObjMap.fromObject([],{});
var effects__6007 = effects;
var std_effects__6008 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,effects__6007)))
{var effect__6010 = cljs.core.first.call(null,effects__6007);
var vec__6009__6011 = one.browser.animation.standardize_in_env.call(null,element,env__6006,effect__6010);
var env__6012 = cljs.core.nth.call(null,vec__6009__6011,0,null);
var effect__6013 = cljs.core.nth.call(null,vec__6009__6011,1,null);

{
var G__6014 = env__6012;
var G__6015 = cljs.core.rest.call(null,effects__6007);
var G__6016 = cljs.core.conj.call(null,std_effects__6008,effect__6013);
env__6006 = G__6014;
effects__6007 = G__6015;
std_effects__6008 = G__6016;
continue;
}
} else
{return std_effects__6008;
}
break;
}
};
var standardize_all_effects = function (element,var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return standardize_all_effects__delegate.call(this, element, effects);
};
standardize_all_effects.cljs$lang$maxFixedArity = 1;
standardize_all_effects.cljs$lang$applyTo = (function (arglist__6017){
var element = cljs.core.first(arglist__6017);
var effects = cljs.core.rest(arglist__6017);
return standardize_all_effects__delegate.call(this, element, effects);
});
return standardize_all_effects;
})()
;
/**
* Bind effects to an element returning an animation. Accepts an HTML
* element and any number of effects. Effects can be Maps or a Vector
* of Maps. Each effect is run in order. Each effect within a Vector is
* run in parallel.
* @param {...*} var_args
*/
one.browser.animation.bind = (function() { 
var bind__delegate = function (element,effects){
var element__6018 = one.browser.animation.get_element.call(null,element);
var effects__6019 = cljs.core.apply.call(null,one.browser.animation.standardize_all_effects,element__6018,effects);
var serial__6020 = (new goog.fx.AnimationSerialQueue());

var G__6021__6022 = cljs.core.seq.call(null,effects__6019);

if(cljs.core.truth_(G__6021__6022))
{var sequential_effect__6023 = cljs.core.first.call(null,G__6021__6022);
var G__6021__6024 = G__6021__6022;

while(true){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,sequential_effect__6023)))
{var parallel__6025 = (new goog.fx.AnimationParallelQueue());

var G__6026__6027 = cljs.core.seq.call(null,sequential_effect__6023);

if(cljs.core.truth_(G__6026__6027))
{var parallel_effect__6028 = cljs.core.first.call(null,G__6026__6027);
var G__6026__6029 = G__6026__6027;

while(true){
parallel__6025.add(one.browser.animation.effect.call(null,element__6018,parallel_effect__6028));
var temp__3698__auto____6030 = cljs.core.next.call(null,G__6026__6029);

if(cljs.core.truth_(temp__3698__auto____6030))
{var G__6026__6031 = temp__3698__auto____6030;

{
var G__6034 = cljs.core.first.call(null,G__6026__6031);
var G__6035 = G__6026__6031;
parallel_effect__6028 = G__6034;
G__6026__6029 = G__6035;
continue;
}
} else
{}
break;
}
} else
{}
serial__6020.add(parallel__6025);
} else
{serial__6020.add(one.browser.animation.effect.call(null,element__6018,sequential_effect__6023));
}
var temp__3698__auto____6032 = cljs.core.next.call(null,G__6021__6024);

if(cljs.core.truth_(temp__3698__auto____6032))
{var G__6021__6033 = temp__3698__auto____6032;

{
var G__6036 = cljs.core.first.call(null,G__6021__6033);
var G__6037 = G__6021__6033;
sequential_effect__6023 = G__6036;
G__6021__6024 = G__6037;
continue;
}
} else
{}
break;
}
} else
{}
return serial__6020;
};
var bind = function (element,var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bind__delegate.call(this, element, effects);
};
bind.cljs$lang$maxFixedArity = 1;
bind.cljs$lang$applyTo = (function (arglist__6038){
var element = cljs.core.first(arglist__6038);
var effects = cljs.core.rest(arglist__6038);
return bind__delegate.call(this, element, effects);
});
return bind;
})()
;
/**
* Source of unique animation ids.
*/
one.browser.animation.animation_id = cljs.core.atom.call(null,0);
/**
* Data structure which supports running animations
* sequentially which have been started by the play and play-animation
* functions.
*/
one.browser.animation.animation_queue = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["﷐'runner","﷐'running","﷐'next"],{"﷐'runner":null,"﷐'running":null,"﷐'next":cljs.core.Vector.fromArray([])}));
/**
* Add an animation to the `animation-queue`. If no runner is
* currently running animations then assign that job to the calling
* function by setting `:runner` to the passed `id` and putting the
* first animation to run under `:running`.
* 
* If a runner is already running then add this animation to the
* vector under `:next`.
*/
one.browser.animation.add_to_queue = (function add_to_queue(queue,id,animations){
var new_next__6039 = cljs.core.conj.call(null,"﷐'next".call(null,queue),animations);

if(cljs.core.truth_("﷐'runner".call(null,queue)))
{return cljs.core.assoc.call(null,queue,"﷐'next",new_next__6039);
} else
{return cljs.core.assoc.call(null,queue,"﷐'runner",id,"﷐'running",cljs.core.first.call(null,new_next__6039),"﷐'next",cljs.core.vec.call(null,cljs.core.rest.call(null,new_next__6039)));
}
});
/**
* Record that the runner with `id` has finished running the
* animation. If there are more animations to run, move the next
* animation under the running key and remove it from `:next`. The same
* runner will continue running animations.
* 
* If there are no more animations to run, release the runner from duty
* by setting `:runner` to nil.
*/
one.browser.animation.record_finished_animation = (function record_finished_animation(queue,id){
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,"﷐'next".call(null,queue))))
{return cljs.core.assoc.call(null,queue,"﷐'runner",null,"﷐'running",null);
} else
{return cljs.core.assoc.call(null,queue,"﷐'running",cljs.core.first.call(null,"﷐'next".call(null,queue)),"﷐'next",cljs.core.vec.call(null,cljs.core.rest.call(null,"﷐'next".call(null,queue))));
}
});
/**
* This function is called when the runner with `id` has finished
* running an animation. After updating the queue, if this runner is
* still the designated runner, then start running the next
* animation. If the animation which has completed has an associated
* `:after` function, run it.
*/
one.browser.animation.animation_finished = (function animation_finished(id,p__6040){
var map__6041__6042 = p__6040;
var map__6041__6043 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6041__6042))?cljs.core.apply.call(null,cljs.core.hash_map,map__6041__6042):map__6041__6042);
var after__6044 = cljs.core.get.call(null,map__6041__6043,"﷐'after");

var new_queue__6045 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_queue,one.browser.animation.record_finished_animation,id);

if(cljs.core.truth_(after__6044))
{after__6044.call(null);
} else
{}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'runner".call(null,new_queue__6045),id)))
{return one.browser.animation.play_animations.call(null,id,new_queue__6045);
} else
{return null;
}
});
/**
* Create the animation to run.
*/
one.browser.animation.make_animation = (function make_animation(p__6046){
var map__6047__6048 = p__6046;
var map__6047__6049 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6047__6048))?cljs.core.apply.call(null,cljs.core.hash_map,map__6047__6048):map__6047__6048);
var animation__6050 = cljs.core.get.call(null,map__6047__6049,"﷐'animation");
var element__6051 = cljs.core.get.call(null,map__6047__6049,"﷐'element");

if(cljs.core.truth_(element__6051))
{return one.browser.animation.bind.call(null,element__6051,animation__6050);
} else
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,animation__6050)))
{return animation__6050.call(null);
} else
{if(cljs.core.truth_("﷐'else"))
{return animation__6050;
} else
{return null;
}
}
}
});
/**
* Called by a function which has been assigned the task of running
* animations until there are no more to run. `id` is the runner
* id. `queue` is the value of animation-queue after it was last
* updated. Runs any `:before` function then runs the
* animation. Arranges for `animation-finished` to be called when the
* animation is complete.
* 
* Implementation note: The delay is a hack to get around the fact that
* the `finish` event fires just before the animation has completed. The
* 100 ms delay gives the finished animation just enough time to
* complete before the next animation is started.
*/
one.browser.animation.play_animations = (function play_animations(id,queue){
var animation_map__6052 = "﷐'running".call(null,queue);
var animation__6053 = one.browser.animation.make_animation.call(null,animation_map__6052);

clojure.browser.event.listen_once.call(null,animation__6053,"finish",(function (){
return (new goog.async.Delay((function (){
return one.browser.animation.animation_finished.call(null,id,animation_map__6052);
}))).start(100);
}));
var temp__3698__auto____6054 = "﷐'before".call(null,animation_map__6052);

if(cljs.core.truth_(temp__3698__auto____6054))
{var before__6055 = temp__3698__auto____6054;

before__6055.call(null);
} else
{}
return one.core.start.call(null,animation__6053);
});
/**
* Accepts an element and an animation and ensures that this animation
* will be run after all other animations that have been started by
* this function or by `play-animation`. An optional map may also be
* passed which may contain the keys `:before` and `:after`. Use the `:before`
* key to provide a function which will be called just before
* the animation starts. Use the `:after` key to provide a function
* which will be called after the aniamtion is finished.
* 
* The `serial` function allows you to create animations which run in
* sequence. The `start` function will run these animations. If `start`
* is called to run an animation before a previous call to `start` has
* completed, the animations can conflict. This function should be used
* instead of `start` when you need to ensure that animations do not
* overlap.
*/
one.browser.animation.play = (function() {
var play = null;
var play__6066 = (function (element,animation){
return play.call(null,element,animation,cljs.core.ObjMap.fromObject([],{}));
});
var play__6067 = (function (element,animation,p__6056){
var map__6057__6058 = p__6056;
var map__6057__6059 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6057__6058))?cljs.core.apply.call(null,cljs.core.hash_map,map__6057__6058):map__6057__6058);
var before__6060 = cljs.core.get.call(null,map__6057__6059,"﷐'before");
var after__6061 = cljs.core.get.call(null,map__6057__6059,"﷐'after");
var name__6062 = cljs.core.get.call(null,map__6057__6059,"﷐'name");

var id__6063 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_id,cljs.core.inc);
var animation__6064 = cljs.core.ObjMap.fromObject(["﷐'name","﷐'id","﷐'element","﷐'animation","﷐'before","﷐'after"],{"﷐'name":name__6062,"﷐'id":id__6063,"﷐'element":element,"﷐'animation":animation,"﷐'before":before__6060,"﷐'after":after__6061});
var queue__6065 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_queue,one.browser.animation.add_to_queue,id__6063,animation__6064);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'runner".call(null,queue__6065),id__6063)))
{return one.browser.animation.play_animations.call(null,id__6063,queue__6065);
} else
{return null;
}
});
play = function(element,animation,p__6056){
switch(arguments.length){
case  2 :
return play__6066.call(this,element,animation);
case  3 :
return play__6067.call(this,element,animation,p__6056);
}
throw('Invalid arity: ' + arguments.length);
};
return play;
})()
;
/**
* Accepts an animation and an optional map and ensures that this
* animation will be run after all other animations that have been
* started by this function or by `play`. See documentation for `play`.
*/
one.browser.animation.play_animation = (function() {
var play_animation = null;
var play_animation__6069 = (function (animation){
return play_animation.call(null,animation,cljs.core.ObjMap.fromObject([],{}));
});
var play_animation__6070 = (function (animation,opts){
return one.browser.animation.play.call(null,null,animation,opts);
});
play_animation = function(animation,opts){
switch(arguments.length){
case  1 :
return play_animation__6069.call(this,animation);
case  2 :
return play_animation__6070.call(this,animation,opts);
}
throw('Invalid arity: ' + arguments.length);
};
return play_animation;
})()
;
