goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35673 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35673(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35677 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35677(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34562 = coll;
var G__34563 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34562,G__34563) : shadow.dom.lazy_native_coll_seq.call(null,G__34562,G__34563));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34574 = arguments.length;
switch (G__34574) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34584 = arguments.length;
switch (G__34584) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34593 = arguments.length;
switch (G__34593) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34601 = arguments.length;
switch (G__34601) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34611 = arguments.length;
switch (G__34611) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34622 = arguments.length;
switch (G__34622) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34645){if((e34645 instanceof Object)){
var e = e34645;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34645;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34670 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34671 = null;
var count__34672 = (0);
var i__34673 = (0);
while(true){
if((i__34673 < count__34672)){
var el = chunk__34671.cljs$core$IIndexed$_nth$arity$2(null,i__34673);
var handler_35729__$1 = ((function (seq__34670,chunk__34671,count__34672,i__34673,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34670,chunk__34671,count__34672,i__34673,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35729__$1);


var G__35730 = seq__34670;
var G__35731 = chunk__34671;
var G__35732 = count__34672;
var G__35733 = (i__34673 + (1));
seq__34670 = G__35730;
chunk__34671 = G__35731;
count__34672 = G__35732;
i__34673 = G__35733;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34670);
if(temp__5804__auto__){
var seq__34670__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34670__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34670__$1);
var G__35734 = cljs.core.chunk_rest(seq__34670__$1);
var G__35735 = c__4679__auto__;
var G__35736 = cljs.core.count(c__4679__auto__);
var G__35737 = (0);
seq__34670 = G__35734;
chunk__34671 = G__35735;
count__34672 = G__35736;
i__34673 = G__35737;
continue;
} else {
var el = cljs.core.first(seq__34670__$1);
var handler_35740__$1 = ((function (seq__34670,chunk__34671,count__34672,i__34673,el,seq__34670__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34670,chunk__34671,count__34672,i__34673,el,seq__34670__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35740__$1);


var G__35743 = cljs.core.next(seq__34670__$1);
var G__35744 = null;
var G__35745 = (0);
var G__35746 = (0);
seq__34670 = G__35743;
chunk__34671 = G__35744;
count__34672 = G__35745;
i__34673 = G__35746;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34700 = arguments.length;
switch (G__34700) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34713 = cljs.core.seq(events);
var chunk__34714 = null;
var count__34715 = (0);
var i__34716 = (0);
while(true){
if((i__34716 < count__34715)){
var vec__34735 = chunk__34714.cljs$core$IIndexed$_nth$arity$2(null,i__34716);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34735,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34735,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35774 = seq__34713;
var G__35775 = chunk__34714;
var G__35776 = count__34715;
var G__35777 = (i__34716 + (1));
seq__34713 = G__35774;
chunk__34714 = G__35775;
count__34715 = G__35776;
i__34716 = G__35777;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34713);
if(temp__5804__auto__){
var seq__34713__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34713__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34713__$1);
var G__35780 = cljs.core.chunk_rest(seq__34713__$1);
var G__35781 = c__4679__auto__;
var G__35782 = cljs.core.count(c__4679__auto__);
var G__35783 = (0);
seq__34713 = G__35780;
chunk__34714 = G__35781;
count__34715 = G__35782;
i__34716 = G__35783;
continue;
} else {
var vec__34741 = cljs.core.first(seq__34713__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34741,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34741,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35785 = cljs.core.next(seq__34713__$1);
var G__35786 = null;
var G__35787 = (0);
var G__35788 = (0);
seq__34713 = G__35785;
chunk__34714 = G__35786;
count__34715 = G__35787;
i__34716 = G__35788;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34748 = cljs.core.seq(styles);
var chunk__34749 = null;
var count__34750 = (0);
var i__34751 = (0);
while(true){
if((i__34751 < count__34750)){
var vec__34764 = chunk__34749.cljs$core$IIndexed$_nth$arity$2(null,i__34751);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35799 = seq__34748;
var G__35800 = chunk__34749;
var G__35801 = count__34750;
var G__35802 = (i__34751 + (1));
seq__34748 = G__35799;
chunk__34749 = G__35800;
count__34750 = G__35801;
i__34751 = G__35802;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34748);
if(temp__5804__auto__){
var seq__34748__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34748__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34748__$1);
var G__35804 = cljs.core.chunk_rest(seq__34748__$1);
var G__35805 = c__4679__auto__;
var G__35806 = cljs.core.count(c__4679__auto__);
var G__35807 = (0);
seq__34748 = G__35804;
chunk__34749 = G__35805;
count__34750 = G__35806;
i__34751 = G__35807;
continue;
} else {
var vec__34782 = cljs.core.first(seq__34748__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34782,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34782,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35808 = cljs.core.next(seq__34748__$1);
var G__35809 = null;
var G__35810 = (0);
var G__35811 = (0);
seq__34748 = G__35808;
chunk__34749 = G__35809;
count__34750 = G__35810;
i__34751 = G__35811;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34788_35812 = key;
var G__34788_35813__$1 = (((G__34788_35812 instanceof cljs.core.Keyword))?G__34788_35812.fqn:null);
switch (G__34788_35813__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35836 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_35836,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_35836,"aria-");
}
})())){
el.setAttribute(ks_35836,value);
} else {
(el[ks_35836] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34806){
var map__34808 = p__34806;
var map__34808__$1 = cljs.core.__destructure_map(map__34808);
var props = map__34808__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34808__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34811 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34811,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34811,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34811,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34815 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34815,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34815;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34819 = arguments.length;
switch (G__34819) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34835){
var vec__34836 = p__34835;
var seq__34837 = cljs.core.seq(vec__34836);
var first__34838 = cljs.core.first(seq__34837);
var seq__34837__$1 = cljs.core.next(seq__34837);
var nn = first__34838;
var first__34838__$1 = cljs.core.first(seq__34837__$1);
var seq__34837__$2 = cljs.core.next(seq__34837__$1);
var np = first__34838__$1;
var nc = seq__34837__$2;
var node = vec__34836;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34841 = nn;
var G__34842 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34841,G__34842) : create_fn.call(null,G__34841,G__34842));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34844 = nn;
var G__34845 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34844,G__34845) : create_fn.call(null,G__34844,G__34845));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34849 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34849,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34849,(1),null);
var seq__34854_35865 = cljs.core.seq(node_children);
var chunk__34855_35866 = null;
var count__34856_35867 = (0);
var i__34857_35868 = (0);
while(true){
if((i__34857_35868 < count__34856_35867)){
var child_struct_35869 = chunk__34855_35866.cljs$core$IIndexed$_nth$arity$2(null,i__34857_35868);
var children_35870 = shadow.dom.dom_node(child_struct_35869);
if(cljs.core.seq_QMARK_(children_35870)){
var seq__34922_35872 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35870));
var chunk__34924_35873 = null;
var count__34925_35874 = (0);
var i__34926_35875 = (0);
while(true){
if((i__34926_35875 < count__34925_35874)){
var child_35876 = chunk__34924_35873.cljs$core$IIndexed$_nth$arity$2(null,i__34926_35875);
if(cljs.core.truth_(child_35876)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35876);


var G__35878 = seq__34922_35872;
var G__35879 = chunk__34924_35873;
var G__35880 = count__34925_35874;
var G__35881 = (i__34926_35875 + (1));
seq__34922_35872 = G__35878;
chunk__34924_35873 = G__35879;
count__34925_35874 = G__35880;
i__34926_35875 = G__35881;
continue;
} else {
var G__35882 = seq__34922_35872;
var G__35883 = chunk__34924_35873;
var G__35884 = count__34925_35874;
var G__35885 = (i__34926_35875 + (1));
seq__34922_35872 = G__35882;
chunk__34924_35873 = G__35883;
count__34925_35874 = G__35884;
i__34926_35875 = G__35885;
continue;
}
} else {
var temp__5804__auto___35886 = cljs.core.seq(seq__34922_35872);
if(temp__5804__auto___35886){
var seq__34922_35887__$1 = temp__5804__auto___35886;
if(cljs.core.chunked_seq_QMARK_(seq__34922_35887__$1)){
var c__4679__auto___35888 = cljs.core.chunk_first(seq__34922_35887__$1);
var G__35889 = cljs.core.chunk_rest(seq__34922_35887__$1);
var G__35890 = c__4679__auto___35888;
var G__35891 = cljs.core.count(c__4679__auto___35888);
var G__35892 = (0);
seq__34922_35872 = G__35889;
chunk__34924_35873 = G__35890;
count__34925_35874 = G__35891;
i__34926_35875 = G__35892;
continue;
} else {
var child_35893 = cljs.core.first(seq__34922_35887__$1);
if(cljs.core.truth_(child_35893)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35893);


var G__35898 = cljs.core.next(seq__34922_35887__$1);
var G__35899 = null;
var G__35900 = (0);
var G__35901 = (0);
seq__34922_35872 = G__35898;
chunk__34924_35873 = G__35899;
count__34925_35874 = G__35900;
i__34926_35875 = G__35901;
continue;
} else {
var G__35902 = cljs.core.next(seq__34922_35887__$1);
var G__35903 = null;
var G__35904 = (0);
var G__35905 = (0);
seq__34922_35872 = G__35902;
chunk__34924_35873 = G__35903;
count__34925_35874 = G__35904;
i__34926_35875 = G__35905;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35870);
}


var G__35906 = seq__34854_35865;
var G__35907 = chunk__34855_35866;
var G__35908 = count__34856_35867;
var G__35909 = (i__34857_35868 + (1));
seq__34854_35865 = G__35906;
chunk__34855_35866 = G__35907;
count__34856_35867 = G__35908;
i__34857_35868 = G__35909;
continue;
} else {
var temp__5804__auto___35910 = cljs.core.seq(seq__34854_35865);
if(temp__5804__auto___35910){
var seq__34854_35911__$1 = temp__5804__auto___35910;
if(cljs.core.chunked_seq_QMARK_(seq__34854_35911__$1)){
var c__4679__auto___35912 = cljs.core.chunk_first(seq__34854_35911__$1);
var G__35913 = cljs.core.chunk_rest(seq__34854_35911__$1);
var G__35914 = c__4679__auto___35912;
var G__35915 = cljs.core.count(c__4679__auto___35912);
var G__35916 = (0);
seq__34854_35865 = G__35913;
chunk__34855_35866 = G__35914;
count__34856_35867 = G__35915;
i__34857_35868 = G__35916;
continue;
} else {
var child_struct_35917 = cljs.core.first(seq__34854_35911__$1);
var children_35918 = shadow.dom.dom_node(child_struct_35917);
if(cljs.core.seq_QMARK_(children_35918)){
var seq__34959_35919 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35918));
var chunk__34961_35920 = null;
var count__34962_35921 = (0);
var i__34963_35922 = (0);
while(true){
if((i__34963_35922 < count__34962_35921)){
var child_35923 = chunk__34961_35920.cljs$core$IIndexed$_nth$arity$2(null,i__34963_35922);
if(cljs.core.truth_(child_35923)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35923);


var G__35925 = seq__34959_35919;
var G__35926 = chunk__34961_35920;
var G__35927 = count__34962_35921;
var G__35928 = (i__34963_35922 + (1));
seq__34959_35919 = G__35925;
chunk__34961_35920 = G__35926;
count__34962_35921 = G__35927;
i__34963_35922 = G__35928;
continue;
} else {
var G__35929 = seq__34959_35919;
var G__35930 = chunk__34961_35920;
var G__35931 = count__34962_35921;
var G__35932 = (i__34963_35922 + (1));
seq__34959_35919 = G__35929;
chunk__34961_35920 = G__35930;
count__34962_35921 = G__35931;
i__34963_35922 = G__35932;
continue;
}
} else {
var temp__5804__auto___35934__$1 = cljs.core.seq(seq__34959_35919);
if(temp__5804__auto___35934__$1){
var seq__34959_35935__$1 = temp__5804__auto___35934__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34959_35935__$1)){
var c__4679__auto___35936 = cljs.core.chunk_first(seq__34959_35935__$1);
var G__35937 = cljs.core.chunk_rest(seq__34959_35935__$1);
var G__35938 = c__4679__auto___35936;
var G__35939 = cljs.core.count(c__4679__auto___35936);
var G__35940 = (0);
seq__34959_35919 = G__35937;
chunk__34961_35920 = G__35938;
count__34962_35921 = G__35939;
i__34963_35922 = G__35940;
continue;
} else {
var child_35941 = cljs.core.first(seq__34959_35935__$1);
if(cljs.core.truth_(child_35941)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35941);


var G__35942 = cljs.core.next(seq__34959_35935__$1);
var G__35943 = null;
var G__35944 = (0);
var G__35945 = (0);
seq__34959_35919 = G__35942;
chunk__34961_35920 = G__35943;
count__34962_35921 = G__35944;
i__34963_35922 = G__35945;
continue;
} else {
var G__35946 = cljs.core.next(seq__34959_35935__$1);
var G__35947 = null;
var G__35948 = (0);
var G__35949 = (0);
seq__34959_35919 = G__35946;
chunk__34961_35920 = G__35947;
count__34962_35921 = G__35948;
i__34963_35922 = G__35949;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35918);
}


var G__35950 = cljs.core.next(seq__34854_35911__$1);
var G__35951 = null;
var G__35952 = (0);
var G__35953 = (0);
seq__34854_35865 = G__35950;
chunk__34855_35866 = G__35951;
count__34856_35867 = G__35952;
i__34857_35868 = G__35953;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35012 = cljs.core.seq(node);
var chunk__35013 = null;
var count__35014 = (0);
var i__35015 = (0);
while(true){
if((i__35015 < count__35014)){
var n = chunk__35013.cljs$core$IIndexed$_nth$arity$2(null,i__35015);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35956 = seq__35012;
var G__35957 = chunk__35013;
var G__35958 = count__35014;
var G__35959 = (i__35015 + (1));
seq__35012 = G__35956;
chunk__35013 = G__35957;
count__35014 = G__35958;
i__35015 = G__35959;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35012);
if(temp__5804__auto__){
var seq__35012__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35012__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35012__$1);
var G__35960 = cljs.core.chunk_rest(seq__35012__$1);
var G__35961 = c__4679__auto__;
var G__35962 = cljs.core.count(c__4679__auto__);
var G__35963 = (0);
seq__35012 = G__35960;
chunk__35013 = G__35961;
count__35014 = G__35962;
i__35015 = G__35963;
continue;
} else {
var n = cljs.core.first(seq__35012__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35966 = cljs.core.next(seq__35012__$1);
var G__35967 = null;
var G__35968 = (0);
var G__35969 = (0);
seq__35012 = G__35966;
chunk__35013 = G__35967;
count__35014 = G__35968;
i__35015 = G__35969;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35030 = arguments.length;
switch (G__35030) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35035 = arguments.length;
switch (G__35035) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35042 = arguments.length;
switch (G__35042) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35986 = arguments.length;
var i__4865__auto___35987 = (0);
while(true){
if((i__4865__auto___35987 < len__4864__auto___35986)){
args__4870__auto__.push((arguments[i__4865__auto___35987]));

var G__35988 = (i__4865__auto___35987 + (1));
i__4865__auto___35987 = G__35988;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35081_35989 = cljs.core.seq(nodes);
var chunk__35082_35990 = null;
var count__35083_35991 = (0);
var i__35084_35992 = (0);
while(true){
if((i__35084_35992 < count__35083_35991)){
var node_35994 = chunk__35082_35990.cljs$core$IIndexed$_nth$arity$2(null,i__35084_35992);
fragment.appendChild(shadow.dom._to_dom(node_35994));


var G__35995 = seq__35081_35989;
var G__35996 = chunk__35082_35990;
var G__35997 = count__35083_35991;
var G__35998 = (i__35084_35992 + (1));
seq__35081_35989 = G__35995;
chunk__35082_35990 = G__35996;
count__35083_35991 = G__35997;
i__35084_35992 = G__35998;
continue;
} else {
var temp__5804__auto___36001 = cljs.core.seq(seq__35081_35989);
if(temp__5804__auto___36001){
var seq__35081_36003__$1 = temp__5804__auto___36001;
if(cljs.core.chunked_seq_QMARK_(seq__35081_36003__$1)){
var c__4679__auto___36005 = cljs.core.chunk_first(seq__35081_36003__$1);
var G__36006 = cljs.core.chunk_rest(seq__35081_36003__$1);
var G__36007 = c__4679__auto___36005;
var G__36008 = cljs.core.count(c__4679__auto___36005);
var G__36009 = (0);
seq__35081_35989 = G__36006;
chunk__35082_35990 = G__36007;
count__35083_35991 = G__36008;
i__35084_35992 = G__36009;
continue;
} else {
var node_36013 = cljs.core.first(seq__35081_36003__$1);
fragment.appendChild(shadow.dom._to_dom(node_36013));


var G__36014 = cljs.core.next(seq__35081_36003__$1);
var G__36015 = null;
var G__36016 = (0);
var G__36017 = (0);
seq__35081_35989 = G__36014;
chunk__35082_35990 = G__36015;
count__35083_35991 = G__36016;
i__35084_35992 = G__36017;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35070){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35070));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35110_36020 = cljs.core.seq(scripts);
var chunk__35111_36021 = null;
var count__35112_36022 = (0);
var i__35113_36023 = (0);
while(true){
if((i__35113_36023 < count__35112_36022)){
var vec__35124_36024 = chunk__35111_36021.cljs$core$IIndexed$_nth$arity$2(null,i__35113_36023);
var script_tag_36025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124_36024,(0),null);
var script_body_36026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124_36024,(1),null);
eval(script_body_36026);


var G__36028 = seq__35110_36020;
var G__36029 = chunk__35111_36021;
var G__36030 = count__35112_36022;
var G__36031 = (i__35113_36023 + (1));
seq__35110_36020 = G__36028;
chunk__35111_36021 = G__36029;
count__35112_36022 = G__36030;
i__35113_36023 = G__36031;
continue;
} else {
var temp__5804__auto___36033 = cljs.core.seq(seq__35110_36020);
if(temp__5804__auto___36033){
var seq__35110_36034__$1 = temp__5804__auto___36033;
if(cljs.core.chunked_seq_QMARK_(seq__35110_36034__$1)){
var c__4679__auto___36035 = cljs.core.chunk_first(seq__35110_36034__$1);
var G__36036 = cljs.core.chunk_rest(seq__35110_36034__$1);
var G__36037 = c__4679__auto___36035;
var G__36038 = cljs.core.count(c__4679__auto___36035);
var G__36039 = (0);
seq__35110_36020 = G__36036;
chunk__35111_36021 = G__36037;
count__35112_36022 = G__36038;
i__35113_36023 = G__36039;
continue;
} else {
var vec__35133_36040 = cljs.core.first(seq__35110_36034__$1);
var script_tag_36041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35133_36040,(0),null);
var script_body_36042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35133_36040,(1),null);
eval(script_body_36042);


var G__36043 = cljs.core.next(seq__35110_36034__$1);
var G__36044 = null;
var G__36045 = (0);
var G__36046 = (0);
seq__35110_36020 = G__36043;
chunk__35111_36021 = G__36044;
count__35112_36022 = G__36045;
i__35113_36023 = G__36046;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35141){
var vec__35142 = p__35141;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35159 = arguments.length;
switch (G__35159) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35187 = cljs.core.seq(style_keys);
var chunk__35188 = null;
var count__35189 = (0);
var i__35190 = (0);
while(true){
if((i__35190 < count__35189)){
var it = chunk__35188.cljs$core$IIndexed$_nth$arity$2(null,i__35190);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36057 = seq__35187;
var G__36058 = chunk__35188;
var G__36059 = count__35189;
var G__36060 = (i__35190 + (1));
seq__35187 = G__36057;
chunk__35188 = G__36058;
count__35189 = G__36059;
i__35190 = G__36060;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35187);
if(temp__5804__auto__){
var seq__35187__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35187__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35187__$1);
var G__36061 = cljs.core.chunk_rest(seq__35187__$1);
var G__36062 = c__4679__auto__;
var G__36063 = cljs.core.count(c__4679__auto__);
var G__36064 = (0);
seq__35187 = G__36061;
chunk__35188 = G__36062;
count__35189 = G__36063;
i__35190 = G__36064;
continue;
} else {
var it = cljs.core.first(seq__35187__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36065 = cljs.core.next(seq__35187__$1);
var G__36066 = null;
var G__36067 = (0);
var G__36068 = (0);
seq__35187 = G__36065;
chunk__35188 = G__36066;
count__35189 = G__36067;
i__35190 = G__36068;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35205,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35210 = k35205;
var G__35210__$1 = (((G__35210 instanceof cljs.core.Keyword))?G__35210.fqn:null);
switch (G__35210__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35205,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35216){
var vec__35217 = p__35216;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35217,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35217,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35204){
var self__ = this;
var G__35204__$1 = this;
return (new cljs.core.RecordIter((0),G__35204__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35206,other35207){
var self__ = this;
var this35206__$1 = this;
return (((!((other35207 == null)))) && ((((this35206__$1.constructor === other35207.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35206__$1.x,other35207.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35206__$1.y,other35207.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35206__$1.__extmap,other35207.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35205){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35234 = k35205;
var G__35234__$1 = (((G__35234 instanceof cljs.core.Keyword))?G__35234.fqn:null);
switch (G__35234__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35205);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35204){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35236 = cljs.core.keyword_identical_QMARK_;
var expr__35237 = k__4511__auto__;
if(cljs.core.truth_((pred__35236.cljs$core$IFn$_invoke$arity$2 ? pred__35236.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35237) : pred__35236.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35237)))){
return (new shadow.dom.Coordinate(G__35204,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35236.cljs$core$IFn$_invoke$arity$2 ? pred__35236.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35237) : pred__35236.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35237)))){
return (new shadow.dom.Coordinate(self__.x,G__35204,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35204),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35204){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35204,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35208){
var extmap__4542__auto__ = (function (){var G__35250 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35208,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35208)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35250);
} else {
return G__35250;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35208),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35208),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35265,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35278 = k35265;
var G__35278__$1 = (((G__35278 instanceof cljs.core.Keyword))?G__35278.fqn:null);
switch (G__35278__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35265,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35281){
var vec__35283 = p__35281;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35283,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35283,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35264){
var self__ = this;
var G__35264__$1 = this;
return (new cljs.core.RecordIter((0),G__35264__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35266,other35267){
var self__ = this;
var this35266__$1 = this;
return (((!((other35267 == null)))) && ((((this35266__$1.constructor === other35267.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35266__$1.w,other35267.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35266__$1.h,other35267.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35266__$1.__extmap,other35267.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35265){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35304 = k35265;
var G__35304__$1 = (((G__35304 instanceof cljs.core.Keyword))?G__35304.fqn:null);
switch (G__35304__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35265);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35264){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35305 = cljs.core.keyword_identical_QMARK_;
var expr__35306 = k__4511__auto__;
if(cljs.core.truth_((pred__35305.cljs$core$IFn$_invoke$arity$2 ? pred__35305.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35306) : pred__35305.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35306)))){
return (new shadow.dom.Size(G__35264,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35305.cljs$core$IFn$_invoke$arity$2 ? pred__35305.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35306) : pred__35305.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35306)))){
return (new shadow.dom.Size(self__.w,G__35264,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35264),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35264){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35264,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35269){
var extmap__4542__auto__ = (function (){var G__35314 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35269,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35269)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35314);
} else {
return G__35314;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35269),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35269),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__36112 = (i + (1));
var G__36113 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36112;
ret = G__36113;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35346){
var vec__35347 = p__35346;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35347,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35347,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35353 = arguments.length;
switch (G__35353) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36120 = ps;
var G__36121 = (i + (1));
el__$1 = G__36120;
i = G__36121;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35388 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35388,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35388,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35388,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35393_36127 = cljs.core.seq(props);
var chunk__35394_36128 = null;
var count__35395_36129 = (0);
var i__35396_36130 = (0);
while(true){
if((i__35396_36130 < count__35395_36129)){
var vec__35410_36131 = chunk__35394_36128.cljs$core$IIndexed$_nth$arity$2(null,i__35396_36130);
var k_36132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35410_36131,(0),null);
var v_36133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35410_36131,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_36132);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36132),v_36133);


var G__36134 = seq__35393_36127;
var G__36135 = chunk__35394_36128;
var G__36136 = count__35395_36129;
var G__36137 = (i__35396_36130 + (1));
seq__35393_36127 = G__36134;
chunk__35394_36128 = G__36135;
count__35395_36129 = G__36136;
i__35396_36130 = G__36137;
continue;
} else {
var temp__5804__auto___36138 = cljs.core.seq(seq__35393_36127);
if(temp__5804__auto___36138){
var seq__35393_36139__$1 = temp__5804__auto___36138;
if(cljs.core.chunked_seq_QMARK_(seq__35393_36139__$1)){
var c__4679__auto___36140 = cljs.core.chunk_first(seq__35393_36139__$1);
var G__36141 = cljs.core.chunk_rest(seq__35393_36139__$1);
var G__36142 = c__4679__auto___36140;
var G__36143 = cljs.core.count(c__4679__auto___36140);
var G__36144 = (0);
seq__35393_36127 = G__36141;
chunk__35394_36128 = G__36142;
count__35395_36129 = G__36143;
i__35396_36130 = G__36144;
continue;
} else {
var vec__35419_36146 = cljs.core.first(seq__35393_36139__$1);
var k_36147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35419_36146,(0),null);
var v_36148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35419_36146,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_36147);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36147),v_36148);


var G__36150 = cljs.core.next(seq__35393_36139__$1);
var G__36151 = null;
var G__36152 = (0);
var G__36153 = (0);
seq__35393_36127 = G__36150;
chunk__35394_36128 = G__36151;
count__35395_36129 = G__36152;
i__35396_36130 = G__36153;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35437 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35437,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35437,(1),null);
var seq__35440_36157 = cljs.core.seq(node_children);
var chunk__35443_36158 = null;
var count__35444_36159 = (0);
var i__35445_36160 = (0);
while(true){
if((i__35445_36160 < count__35444_36159)){
var child_struct_36161 = chunk__35443_36158.cljs$core$IIndexed$_nth$arity$2(null,i__35445_36160);
if((!((child_struct_36161 == null)))){
if(typeof child_struct_36161 === 'string'){
var text_36163 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36163),child_struct_36161].join(''));
} else {
var children_36167 = shadow.dom.svg_node(child_struct_36161);
if(cljs.core.seq_QMARK_(children_36167)){
var seq__35492_36169 = cljs.core.seq(children_36167);
var chunk__35494_36170 = null;
var count__35495_36171 = (0);
var i__35496_36172 = (0);
while(true){
if((i__35496_36172 < count__35495_36171)){
var child_36174 = chunk__35494_36170.cljs$core$IIndexed$_nth$arity$2(null,i__35496_36172);
if(cljs.core.truth_(child_36174)){
node.appendChild(child_36174);


var G__36178 = seq__35492_36169;
var G__36179 = chunk__35494_36170;
var G__36180 = count__35495_36171;
var G__36181 = (i__35496_36172 + (1));
seq__35492_36169 = G__36178;
chunk__35494_36170 = G__36179;
count__35495_36171 = G__36180;
i__35496_36172 = G__36181;
continue;
} else {
var G__36182 = seq__35492_36169;
var G__36183 = chunk__35494_36170;
var G__36184 = count__35495_36171;
var G__36185 = (i__35496_36172 + (1));
seq__35492_36169 = G__36182;
chunk__35494_36170 = G__36183;
count__35495_36171 = G__36184;
i__35496_36172 = G__36185;
continue;
}
} else {
var temp__5804__auto___36186 = cljs.core.seq(seq__35492_36169);
if(temp__5804__auto___36186){
var seq__35492_36188__$1 = temp__5804__auto___36186;
if(cljs.core.chunked_seq_QMARK_(seq__35492_36188__$1)){
var c__4679__auto___36192 = cljs.core.chunk_first(seq__35492_36188__$1);
var G__36193 = cljs.core.chunk_rest(seq__35492_36188__$1);
var G__36194 = c__4679__auto___36192;
var G__36195 = cljs.core.count(c__4679__auto___36192);
var G__36196 = (0);
seq__35492_36169 = G__36193;
chunk__35494_36170 = G__36194;
count__35495_36171 = G__36195;
i__35496_36172 = G__36196;
continue;
} else {
var child_36197 = cljs.core.first(seq__35492_36188__$1);
if(cljs.core.truth_(child_36197)){
node.appendChild(child_36197);


var G__36198 = cljs.core.next(seq__35492_36188__$1);
var G__36199 = null;
var G__36200 = (0);
var G__36201 = (0);
seq__35492_36169 = G__36198;
chunk__35494_36170 = G__36199;
count__35495_36171 = G__36200;
i__35496_36172 = G__36201;
continue;
} else {
var G__36202 = cljs.core.next(seq__35492_36188__$1);
var G__36203 = null;
var G__36204 = (0);
var G__36205 = (0);
seq__35492_36169 = G__36202;
chunk__35494_36170 = G__36203;
count__35495_36171 = G__36204;
i__35496_36172 = G__36205;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36167);
}
}


var G__36206 = seq__35440_36157;
var G__36207 = chunk__35443_36158;
var G__36208 = count__35444_36159;
var G__36209 = (i__35445_36160 + (1));
seq__35440_36157 = G__36206;
chunk__35443_36158 = G__36207;
count__35444_36159 = G__36208;
i__35445_36160 = G__36209;
continue;
} else {
var G__36210 = seq__35440_36157;
var G__36211 = chunk__35443_36158;
var G__36212 = count__35444_36159;
var G__36213 = (i__35445_36160 + (1));
seq__35440_36157 = G__36210;
chunk__35443_36158 = G__36211;
count__35444_36159 = G__36212;
i__35445_36160 = G__36213;
continue;
}
} else {
var temp__5804__auto___36214 = cljs.core.seq(seq__35440_36157);
if(temp__5804__auto___36214){
var seq__35440_36215__$1 = temp__5804__auto___36214;
if(cljs.core.chunked_seq_QMARK_(seq__35440_36215__$1)){
var c__4679__auto___36216 = cljs.core.chunk_first(seq__35440_36215__$1);
var G__36217 = cljs.core.chunk_rest(seq__35440_36215__$1);
var G__36218 = c__4679__auto___36216;
var G__36219 = cljs.core.count(c__4679__auto___36216);
var G__36220 = (0);
seq__35440_36157 = G__36217;
chunk__35443_36158 = G__36218;
count__35444_36159 = G__36219;
i__35445_36160 = G__36220;
continue;
} else {
var child_struct_36221 = cljs.core.first(seq__35440_36215__$1);
if((!((child_struct_36221 == null)))){
if(typeof child_struct_36221 === 'string'){
var text_36222 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36222),child_struct_36221].join(''));
} else {
var children_36223 = shadow.dom.svg_node(child_struct_36221);
if(cljs.core.seq_QMARK_(children_36223)){
var seq__35519_36224 = cljs.core.seq(children_36223);
var chunk__35521_36225 = null;
var count__35522_36226 = (0);
var i__35523_36227 = (0);
while(true){
if((i__35523_36227 < count__35522_36226)){
var child_36228 = chunk__35521_36225.cljs$core$IIndexed$_nth$arity$2(null,i__35523_36227);
if(cljs.core.truth_(child_36228)){
node.appendChild(child_36228);


var G__36229 = seq__35519_36224;
var G__36230 = chunk__35521_36225;
var G__36231 = count__35522_36226;
var G__36232 = (i__35523_36227 + (1));
seq__35519_36224 = G__36229;
chunk__35521_36225 = G__36230;
count__35522_36226 = G__36231;
i__35523_36227 = G__36232;
continue;
} else {
var G__36233 = seq__35519_36224;
var G__36234 = chunk__35521_36225;
var G__36235 = count__35522_36226;
var G__36236 = (i__35523_36227 + (1));
seq__35519_36224 = G__36233;
chunk__35521_36225 = G__36234;
count__35522_36226 = G__36235;
i__35523_36227 = G__36236;
continue;
}
} else {
var temp__5804__auto___36237__$1 = cljs.core.seq(seq__35519_36224);
if(temp__5804__auto___36237__$1){
var seq__35519_36241__$1 = temp__5804__auto___36237__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35519_36241__$1)){
var c__4679__auto___36242 = cljs.core.chunk_first(seq__35519_36241__$1);
var G__36243 = cljs.core.chunk_rest(seq__35519_36241__$1);
var G__36244 = c__4679__auto___36242;
var G__36245 = cljs.core.count(c__4679__auto___36242);
var G__36246 = (0);
seq__35519_36224 = G__36243;
chunk__35521_36225 = G__36244;
count__35522_36226 = G__36245;
i__35523_36227 = G__36246;
continue;
} else {
var child_36247 = cljs.core.first(seq__35519_36241__$1);
if(cljs.core.truth_(child_36247)){
node.appendChild(child_36247);


var G__36248 = cljs.core.next(seq__35519_36241__$1);
var G__36249 = null;
var G__36250 = (0);
var G__36251 = (0);
seq__35519_36224 = G__36248;
chunk__35521_36225 = G__36249;
count__35522_36226 = G__36250;
i__35523_36227 = G__36251;
continue;
} else {
var G__36252 = cljs.core.next(seq__35519_36241__$1);
var G__36253 = null;
var G__36254 = (0);
var G__36255 = (0);
seq__35519_36224 = G__36252;
chunk__35521_36225 = G__36253;
count__35522_36226 = G__36254;
i__35523_36227 = G__36255;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36223);
}
}


var G__36256 = cljs.core.next(seq__35440_36215__$1);
var G__36257 = null;
var G__36258 = (0);
var G__36259 = (0);
seq__35440_36157 = G__36256;
chunk__35443_36158 = G__36257;
count__35444_36159 = G__36258;
i__35445_36160 = G__36259;
continue;
} else {
var G__36260 = cljs.core.next(seq__35440_36215__$1);
var G__36261 = null;
var G__36262 = (0);
var G__36263 = (0);
seq__35440_36157 = G__36260;
chunk__35443_36158 = G__36261;
count__35444_36159 = G__36262;
i__35445_36160 = G__36263;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36267 = arguments.length;
var i__4865__auto___36268 = (0);
while(true){
if((i__4865__auto___36268 < len__4864__auto___36267)){
args__4870__auto__.push((arguments[i__4865__auto___36268]));

var G__36269 = (i__4865__auto___36268 + (1));
i__4865__auto___36268 = G__36269;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35538){
var G__35539 = cljs.core.first(seq35538);
var seq35538__$1 = cljs.core.next(seq35538);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35539,seq35538__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35558 = arguments.length;
switch (G__35558) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__32317__auto___36280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_35610){
var state_val_35611 = (state_35610[(1)]);
if((state_val_35611 === (1))){
var state_35610__$1 = state_35610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35610__$1,(2),once_or_cleanup);
} else {
if((state_val_35611 === (2))){
var inst_35605 = (state_35610[(2)]);
var inst_35606 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35610__$1 = (function (){var statearr_35623 = state_35610;
(statearr_35623[(7)] = inst_35605);

return statearr_35623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35610__$1,inst_35606);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32205__auto__ = null;
var shadow$dom$state_machine__32205__auto____0 = (function (){
var statearr_35629 = [null,null,null,null,null,null,null,null];
(statearr_35629[(0)] = shadow$dom$state_machine__32205__auto__);

(statearr_35629[(1)] = (1));

return statearr_35629;
});
var shadow$dom$state_machine__32205__auto____1 = (function (state_35610){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_35610);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e35641){var ex__32208__auto__ = e35641;
var statearr_35642_36281 = state_35610;
(statearr_35642_36281[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_35610[(4)]))){
var statearr_35652_36282 = state_35610;
(statearr_35652_36282[(1)] = cljs.core.first((state_35610[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36286 = state_35610;
state_35610 = G__36286;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
shadow$dom$state_machine__32205__auto__ = function(state_35610){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32205__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32205__auto____1.call(this,state_35610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32205__auto____0;
shadow$dom$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32205__auto____1;
return shadow$dom$state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_35660 = f__32318__auto__();
(statearr_35660[(6)] = c__32317__auto___36280);

return statearr_35660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
