goog.provide('one.sample.model');
goog.require('cljs.core');
goog.require('one.dispatch');
/**
* An atom containing a map which is the application's current state.
*/
one.sample.model.state = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
cljs.core.add_watch.call(null,one.sample.model.state,"﷐'state-change-key",(function (k,r,o,n){
return one.dispatch.fire.call(null,"﷐'state-change",n);
}));
/**
* An atom containing the state of the greeting form and
* each of its fields.
*/
one.sample.model.greeting_form = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
cljs.core.add_watch.call(null,one.sample.model.greeting_form,"﷐'form-change-key",(function (k,r,o,n){
return one.dispatch.fire.call(null,"﷐'form-change",cljs.core.ObjMap.fromObject(["﷐'old","﷐'new"],{"﷐'old":o,"﷐'new":n}));
}));
one.sample.model.new_status = (function (){var method_table__513__auto____5612 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__514__auto____5613 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__515__auto____5614 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__516__auto____5615 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__517__auto____5616 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("new-status",(function() { 
var G__5617__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var G__5617 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5617__delegate.call(this, args);
};
G__5617.cljs$lang$maxFixedArity = 0;
G__5617.cljs$lang$applyTo = (function (arglist__5618){
var args = cljs.core.seq( arglist__5618 );;
return G__5617__delegate.call(this, args);
});
return G__5617;
})()
,"﷐'default",hierarchy__517__auto____5616,method_table__513__auto____5612,prefer_table__514__auto____5613,method_cache__515__auto____5614,cached_hierarchy__516__auto____5615));
})();
one.sample.model.error_status = cljs.core.ObjMap.fromObject(["﷐'status","﷐'error"],{"﷐'status":"﷐'error","﷐'error":"Are you sure about that? Names must have at least two characters."});
one.sample.model.editing_error_status = cljs.core.ObjMap.fromObject(["﷐'status","﷐'error"],{"﷐'status":"﷐'editing-error","﷐'error":"Names must have at least two characters."});
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'empty","﷐'focus","﷐'empty"]),(function (p,e,f){
return cljs.core.ObjMap.fromObject(["﷐'status"],{"﷐'status":"﷐'editing"});
}));
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'editing","﷐'finished","﷐'empty"]),(function (p,e,f){
return cljs.core.ObjMap.fromObject(["﷐'status"],{"﷐'status":"﷐'empty"});
}));
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'editing","﷐'change","﷐'empty"]),(function (p,e,f){
return cljs.core.ObjMap.fromObject(["﷐'status"],{"﷐'status":"﷐'editing"});
}));
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'editing","﷐'change","﷐'error"]),(function (p,e,f){
return cljs.core.ObjMap.fromObject(["﷐'status"],{"﷐'status":"﷐'editing"});
}));
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'editing","﷐'change","﷐'valid"]),(function (p,e,f){
return cljs.core.ObjMap.fromObject(["﷐'status"],{"﷐'status":"﷐'editing-valid"});
}));
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'editing","﷐'finished","﷐'error"]),(function (p,e,f){
return one.sample.model.error_status;
}));
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'editing-valid","﷐'change","﷐'error"]),(function (p,e,f){
return cljs.core.ObjMap.fromObject(["﷐'status"],{"﷐'status":"﷐'editing"});
}));
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'editing-valid","﷐'change","﷐'valid"]),(function (p,e,f){
return cljs.core.ObjMap.fromObject(["﷐'status"],{"﷐'status":"﷐'editing-valid"});
}));
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'editing-valid","﷐'finished","﷐'valid"]),(function (p,e,f){
return cljs.core.ObjMap.fromObject(["﷐'status"],{"﷐'status":"﷐'valid"});
}));
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'error","﷐'focus","﷐'error"]),(function (p,e,f){
return one.sample.model.editing_error_status;
}));
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'change","﷐'error"]),(function (p,e,f){
return one.sample.model.editing_error_status;
}));
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'finished","﷐'error"]),(function (p,e,f){
return one.sample.model.error_status;
}));
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'change","﷐'valid"]),(function (p,e,f){
return cljs.core.ObjMap.fromObject(["﷐'status"],{"﷐'status":"﷐'editing-valid"});
}));
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'change","﷐'empty"]),(function (p,e,f){
return cljs.core.ObjMap.fromObject(["﷐'status"],{"﷐'status":"﷐'editing-error"});
}));
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'finished","﷐'empty"]),(function (p,e,f){
return cljs.core.ObjMap.fromObject(["﷐'status"],{"﷐'status":"﷐'empty"});
}));
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'valid","﷐'focus","﷐'valid"]),(function (p,e,f){
return cljs.core.ObjMap.fromObject(["﷐'status"],{"﷐'status":"﷐'editing-valid"});
}));
cljs.core._add_method.call(null,one.sample.model.new_status,cljs.core.Vector.fromArray(["﷐'valid","﷐'finished","﷐'empty"]),(function (p,e,f){
return cljs.core.ObjMap.fromObject(["﷐'status"],{"﷐'status":"﷐'empty"});
}));
cljs.core._add_method.call(null,one.sample.model.new_status,"﷐'default",(function (p,e,f){
return cljs.core.ObjMap.fromObject(["﷐'status"],{"﷐'status":p});
}));
/**
* Accepts a form id and a value and returns a map
* with `:value`, `:status`, and `:error` keys. Status will be set to
* either `:valid` or `:error`. If there was an error, then there will be
* an error message associated with the `:error` key.
*/
one.sample.model.validate = (function (){var method_table__513__auto____5619 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__514__auto____5620 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__515__auto____5621 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__516__auto____5622 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__517__auto____5623 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("validate",(function (id,_){
return id;
}),"﷐'default",hierarchy__517__auto____5623,method_table__513__auto____5619,prefer_table__514__auto____5620,method_cache__515__auto____5621,cached_hierarchy__516__auto____5622));
})();
cljs.core._add_method.call(null,one.sample.model.validate,"name-input",(function (_,v){
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,v),0)))
{return "﷐'empty";
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,v),1)))
{return "﷐'error";
} else
{if(cljs.core.truth_("﷐'else"))
{return "﷐'valid";
} else
{return null;
}
}
}
}));
/**
* Calculates the status of the whole form based on the status of each
* field. Retuns `:finished` or `:editing`.
*/
one.sample.model.form_status = (function form_status(m){
if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,(function (p1__5624_SHARP_){
var or__3548__auto____5625 = cljs.core._EQ_.call(null,p1__5624_SHARP_,"﷐'valid");

if(cljs.core.truth_(or__3548__auto____5625))
{return or__3548__auto____5625;
} else
{return cljs.core._EQ_.call(null,p1__5624_SHARP_,"﷐'editing-valid");
}
}),cljs.core.map.call(null,"﷐'status",cljs.core.vals.call(null,"﷐'fields".call(null,m))))))
{return "﷐'finished";
} else
{return "﷐'editing";
}
});
/**
* Accepts a field-id and value. Validates the field and updates the
* greeting form atom.
*/
one.sample.model.set_field_value = (function set_field_value(field_id,type,value){
return cljs.core.swap_BANG_.call(null,one.sample.model.greeting_form,(function (old){
var field__5626 = cljs.core.get.call(null,"﷐'fields".call(null,old),field_id,cljs.core.ObjMap.fromObject([],{}));
var field_status__5627 = cljs.core.assoc.call(null,one.sample.model.new_status.call(null,"﷐'status".call(null,field_id.call(null,"﷐'fields".call(null,old))),type,one.sample.model.validate.call(null,field_id,value)),"﷐'value",value);
var new$__5628 = cljs.core.assoc_in.call(null,old,cljs.core.Vector.fromArray(["﷐'fields",field_id]),field_status__5627);

return cljs.core.assoc.call(null,new$__5628,"﷐'status",one.sample.model.form_status.call(null,new$__5628));
}));
});
/**
* Update the form state for a given field to indicate that the form
* is still being edited.
*/
one.sample.model.set_editing = (function set_editing(id){
return cljs.core.swap_BANG_.call(null,one.sample.model.greeting_form,(function (old){
var field_map__5629 = id.call(null,"﷐'fields".call(null,old));
var status__5631 = (function (){var or__3548__auto____5630 = "﷐'status".call(null,field_map__5629);

if(cljs.core.truth_(or__3548__auto____5630))
{return or__3548__auto____5630;
} else
{return "﷐'empty";
}
})();
var field_status__5632 = one.sample.model.new_status.call(null,status__5631,"﷐'focus",status__5631);

return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,old,cljs.core.Vector.fromArray(["﷐'fields",id]),cljs.core.assoc.call(null,field_status__5632,"﷐'value","﷐'value".call(null,field_map__5629))),"﷐'status",one.sample.model.form_status.call(null,old));
}));
});
one.dispatch.react_to.call(null,(function (e){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,e),"﷐'field-finished");
}),(function (p__5633,value){
var vec__5634__5635 = p__5633;
var ___5636 = cljs.core.nth.call(null,vec__5634__5635,0,null);
var id__5637 = cljs.core.nth.call(null,vec__5634__5635,1,null);

return one.sample.model.set_field_value.call(null,id__5637,"﷐'finished",value);
}));
one.dispatch.react_to.call(null,(function (e){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,e),"﷐'field-changed");
}),(function (p__5638,value){
var vec__5639__5640 = p__5638;
var ___5641 = cljs.core.nth.call(null,vec__5639__5640,0,null);
var id__5642 = cljs.core.nth.call(null,vec__5639__5640,1,null);

return one.sample.model.set_field_value.call(null,id__5642,"﷐'change",value);
}));
one.dispatch.react_to.call(null,(function (e){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,e),"﷐'editing-field");
}),(function (p__5643,_){
var vec__5644__5645 = p__5643;
var ___5646 = cljs.core.nth.call(null,vec__5644__5645,0,null);
var id__5647 = cljs.core.nth.call(null,vec__5644__5645,1,null);

return one.sample.model.set_editing.call(null,id__5647);
}));
one.dispatch.react_to.call(null,cljs.core.set(["﷐'form-submit"]),(function (t,d){
var form_data__5648 = cljs.core.deref.call(null,one.sample.model.greeting_form);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'status".call(null,form_data__5648),"﷐'finished")))
{return one.dispatch.fire.call(null,"﷐'greeting",cljs.core.ObjMap.fromObject(["﷐'name"],{"﷐'name":"﷐'value".call(null,"name-input".call(null,"﷐'fields".call(null,form_data__5648)))}));
} else
{return null;
}
}));
