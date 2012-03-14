goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____7378 = reader;

if(cljs.core.truth_(and__3546__auto____7378))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____7378;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____7379 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____7379))
{return or__3548__auto____7379;
} else
{var or__3548__auto____7380 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____7380))
{return or__3548__auto____7380;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____7381 = reader;

if(cljs.core.truth_(and__3546__auto____7381))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____7381;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____7382 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____7382))
{return or__3548__auto____7382;
} else
{var or__3548__auto____7383 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____7383))
{return or__3548__auto____7383;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__7384 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__7384.buffer_atom))))
{var idx__7385 = cljs.core.deref.call(null,this__7384.index_atom);

cljs.core.swap_BANG_.call(null,this__7384.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__7384.s,idx__7385);
} else
{var buf__7386 = cljs.core.deref.call(null,this__7384.buffer_atom);

cljs.core.swap_BANG_.call(null,this__7384.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__7386);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__7387 = this;
return cljs.core.swap_BANG_.call(null,this__7387.buffer_atom,(function (p1__7377_SHARP_){
return cljs.core.cons.call(null,ch,p1__7377_SHARP_);
}));
});
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____7388 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____7388))
{return or__3548__auto____7388;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____7389 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____7389))
{return or__3548__auto____7389;
} else
{var and__3546__auto____7391 = (function (){var or__3548__auto____7390 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____7390))
{return or__3548__auto____7390;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____7391))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__7392 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__7392);
return next_ch__7392;
})());
} else
{return and__3546__auto____7391;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__7393){
var rdr = cljs.core.first(arglist__7393);
var msg = cljs.core.rest(arglist__7393);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____7394 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____7394))
{var and__3546__auto____7395 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____7395))
{var and__3546__auto____7396 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____7396))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____7396;
}
} else
{return and__3546__auto____7395;
}
} else
{return and__3546__auto____7394;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__7397 = (new goog.string.StringBuffer(initch));
var ch__7398 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____7399 = cljs.core.nil_QMARK_.call(null,ch__7398);

if(cljs.core.truth_(or__3548__auto____7399))
{return or__3548__auto____7399;
} else
{var or__3548__auto____7400 = cljs.reader.whitespace_QMARK_.call(null,ch__7398);

if(cljs.core.truth_(or__3548__auto____7400))
{return or__3548__auto____7400;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__7398);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__7398);
return sb__7397.toString();
} else
{{
var G__7401 = (function (){sb__7397.append(ch__7398);
return sb__7397;
})();
var G__7402 = cljs.reader.read_char.call(null,rdr);
sb__7397 = G__7401;
ch__7398 = G__7402;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__7403 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____7404 = cljs.core._EQ_.call(null,ch__7403,"n");

if(cljs.core.truth_(or__3548__auto____7404))
{return or__3548__auto____7404;
} else
{var or__3548__auto____7405 = cljs.core._EQ_.call(null,ch__7403,"r");

if(cljs.core.truth_(or__3548__auto____7405))
{return or__3548__auto____7405;
} else
{return cljs.core.nil_QMARK_.call(null,ch__7403);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__7406 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__7407 = cljs.core.nth.call(null,groups__7406,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____7408 = cljs.core.undefined_QMARK_.call(null,group3__7407);

if(cljs.core.truth_(or__3548__auto____7408))
{return or__3548__auto____7408;
} else
{return (group3__7407.length < 1);
}
})())))
{return 0;
} else
{var negate__7410 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__7406,1)))?-1:1);
var vec__7409__7411 = (cljs.core.truth_(cljs.core.nth.call(null,groups__7406,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__7406,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__7406,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__7406,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__7406,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__7406,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__7406,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__7406,7),parseInt.call(null,cljs.core.nth.call(null,groups__7406,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__7412 = cljs.core.nth.call(null,vec__7409__7411,0,null);
var radix__7413 = cljs.core.nth.call(null,vec__7409__7411,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__7412)))
{return null;
} else
{return (negate__7410 * parseInt.call(null,n__7412,radix__7413));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__7414 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__7415 = cljs.core.nth.call(null,groups__7414,1);
var denominator__7416 = cljs.core.nth.call(null,groups__7414,2);

return (parseInt.call(null,numinator__7415) / parseInt.call(null,denominator__7416));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__7417 = cljs.reader.read_char.call(null,reader);
var mapresult__7418 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__7417);

if(cljs.core.truth_(mapresult__7418))
{return mapresult__7418;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____7419 = cljs.core._EQ_.call(null,"u",ch__7417);

if(cljs.core.truth_(or__3548__auto____7419))
{return or__3548__auto____7419;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__7417);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__7417);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__7417);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__7420 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__7420)))
{{
var G__7421 = cljs.reader.read_char.call(null,rdr);
ch__7420 = G__7421;
continue;
}
} else
{return ch__7420;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__7422 = cljs.core.Vector.fromArray([]);

while(true){
var ch__7423 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__7423))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__7423)))
{return a__7422;
} else
{var temp__3695__auto____7424 = cljs.core.get.call(null,cljs.reader.macros,ch__7423);

if(cljs.core.truth_(temp__3695__auto____7424))
{var macrofn__7425 = temp__3695__auto____7424;

var mret__7426 = macrofn__7425.call(null,rdr,ch__7423);

{
var G__7428 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__7426,rdr))?a__7422:cljs.core.conj.call(null,a__7422,mret__7426));
a__7422 = G__7428;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__7423);
var o__7427 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__7429 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__7427,rdr))?a__7422:cljs.core.conj.call(null,a__7422,o__7427));
a__7422 = G__7429;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__7430 = cljs.reader.read_char.call(null,rdr);
var dm__7431 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__7430);

if(cljs.core.truth_(dm__7431))
{return dm__7431.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__7430);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__7432 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__7432))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__7432);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__7433 = (new goog.string.StringBuffer(initch));
var ch__7434 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____7435 = cljs.core.nil_QMARK_.call(null,ch__7434);

if(cljs.core.truth_(or__3548__auto____7435))
{return or__3548__auto____7435;
} else
{var or__3548__auto____7436 = cljs.reader.whitespace_QMARK_.call(null,ch__7434);

if(cljs.core.truth_(or__3548__auto____7436))
{return or__3548__auto____7436;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__7434);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__7434);
var s__7437 = buffer__7433.toString();

var or__3548__auto____7438 = cljs.reader.match_number.call(null,s__7437);

if(cljs.core.truth_(or__3548__auto____7438))
{return or__3548__auto____7438;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__7437,"]");
}
} else
{{
var G__7439 = (function (){buffer__7433.append(ch__7434);
return buffer__7433;
})();
var G__7440 = cljs.reader.read_char.call(null,reader);
buffer__7433 = G__7439;
ch__7434 = G__7440;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__7441 = (new goog.string.StringBuffer());
var ch__7442 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__7442)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__7442)))
{{
var G__7443 = (function (){buffer__7441.append(cljs.reader.escape_char.call(null,buffer__7441,reader));
return buffer__7441;
})();
var G__7444 = cljs.reader.read_char.call(null,reader);
buffer__7441 = G__7443;
ch__7442 = G__7444;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__7442)))
{return buffer__7441.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__7445 = (function (){buffer__7441.append(ch__7442);
return buffer__7441;
})();
var G__7446 = cljs.reader.read_char.call(null,reader);
buffer__7441 = G__7445;
ch__7442 = G__7446;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__7447 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__7447,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__7447,0,token__7447.indexOf("/")),cljs.core.subs.call(null,token__7447,(token__7447.indexOf("/") + 1),token__7447.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__7447,cljs.core.symbol.call(null,token__7447));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__7449 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__7448__7450 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__7449);
var token__7451 = cljs.core.nth.call(null,vec__7448__7450,0,null);
var ns__7452 = cljs.core.nth.call(null,vec__7448__7450,1,null);
var name__7453 = cljs.core.nth.call(null,vec__7448__7450,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____7455 = (function (){var and__3546__auto____7454 = cljs.core.not.call(null,cljs.core.undefined_QMARK_.call(null,ns__7452));

if(cljs.core.truth_(and__3546__auto____7454))
{return (ns__7452.substring((ns__7452.length - 2),ns__7452.length) === ":/");
} else
{return and__3546__auto____7454;
}
})();

if(cljs.core.truth_(or__3548__auto____7455))
{return or__3548__auto____7455;
} else
{var or__3548__auto____7456 = ((name__7453[(name__7453.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____7456))
{return or__3548__auto____7456;
} else
{return cljs.core.not.call(null,(token__7451.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__7451);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__7452.substring(0,ns__7452.indexOf("/")),name__7453);
} else
{return cljs.core.keyword.call(null,token__7451);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("﷐'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__7457 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__7457)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__7458 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__394__auto____7459 = o__7458;

if(cljs.core.truth_((function (){var and__3546__auto____7460 = x__394__auto____7459;

if(cljs.core.truth_(and__3546__auto____7460))
{var and__3546__auto____7461 = x__394__auto____7459.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____7461))
{return cljs.core.not.call(null,x__394__auto____7459.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____7461;
}
} else
{return and__3546__auto____7460;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__394__auto____7459);
}
})()))
{return cljs.core.with_meta.call(null,o__7458,cljs.core.merge.call(null,cljs.core.meta.call(null,o__7458),m__7457));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"﷑'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"﷑'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__7462 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__7462)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__7462)))
{{
var G__7464 = reader;
var G__7465 = eof_is_error;
var G__7466 = sentinel;
var G__7467 = is_recursive;
reader = G__7464;
eof_is_error = G__7465;
sentinel = G__7466;
is_recursive = G__7467;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__7462)))
{{
var G__7468 = cljs.reader.read_comment.call(null,reader,ch__7462);
var G__7469 = eof_is_error;
var G__7470 = sentinel;
var G__7471 = is_recursive;
reader = G__7468;
eof_is_error = G__7469;
sentinel = G__7470;
is_recursive = G__7471;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__7463 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__7462))?cljs.reader.macros.call(null,ch__7462).call(null,reader,ch__7462):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__7462))?cljs.reader.read_number.call(null,reader,ch__7462):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__7462):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__7463,reader)))
{{
var G__7472 = reader;
var G__7473 = eof_is_error;
var G__7474 = sentinel;
var G__7475 = is_recursive;
reader = G__7472;
eof_is_error = G__7473;
sentinel = G__7474;
is_recursive = G__7475;
continue;
}
} else
{return res__7463;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__7476 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__7476,true,null,false);
});
