goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_36595 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.object._id[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.object._id["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_36595(this$);
}
});

var shadow$object$IObject$_type$dyn_36598 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.object._type[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.object._type["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_36598(this$);
}
});

var shadow$object$IObject$_data$dyn_36601 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.object._data[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.object._data["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_36601(this$);
}
});

var shadow$object$IObject$_update$dyn_36605 = (function (this$,update_fn){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.object._update[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4551__auto__.call(null,this$,update_fn));
} else {
var m__4549__auto__ = (shadow.object._update["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4549__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_36605(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_36606 = (function (this$,cause){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4551__auto__.call(null,this$,cause));
} else {
var m__4549__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4549__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_36606(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__35784 = arguments.length;
switch (G__35784) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4253__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5804__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5804__auto__)){
var oid = temp__5804__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5804__auto__)){
var parent_id = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__36622 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__36622;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35894_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__35894_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__35933 = arguments.length;
switch (G__35933) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35954_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__35954_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__35964){
var map__35965 = p__35964;
var map__35965__$1 = cljs.core.__destructure_map(map__35965);
var oref = map__35965__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35965__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__35975 = arguments.length;
switch (G__35975) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35971_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__35971_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5802__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5802__auto__)){
var obj = temp__5802__auto__;
return obj;
} else {
var temp__5804__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var G__36643 = parent;
dom = G__36643;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36644 = arguments.length;
var i__4865__auto___36645 = (0);
while(true){
if((i__4865__auto___36645 < len__4864__auto___36644)){
args__4870__auto__.push((arguments[i__4865__auto___36645]));

var G__36646 = (i__4865__auto___36645 + (1));
i__4865__auto___36645 = G__36646;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5804__auto__)){
var reactions_to_trigger = temp__5804__auto__;
var seq__36047 = cljs.core.seq(reactions_to_trigger);
var chunk__36048 = null;
var count__36049 = (0);
var i__36050 = (0);
while(true){
if((i__36050 < count__36049)){
var rfn = chunk__36048.cljs$core$IIndexed$_nth$arity$2(null,i__36050);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__36653 = seq__36047;
var G__36654 = chunk__36048;
var G__36655 = count__36049;
var G__36656 = (i__36050 + (1));
seq__36047 = G__36653;
chunk__36048 = G__36654;
count__36049 = G__36655;
i__36050 = G__36656;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__36047);
if(temp__5804__auto____$1){
var seq__36047__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36047__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36047__$1);
var G__36657 = cljs.core.chunk_rest(seq__36047__$1);
var G__36658 = c__4679__auto__;
var G__36659 = cljs.core.count(c__4679__auto__);
var G__36660 = (0);
seq__36047 = G__36657;
chunk__36048 = G__36658;
count__36049 = G__36659;
i__36050 = G__36660;
continue;
} else {
var rfn = cljs.core.first(seq__36047__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__36661 = cljs.core.next(seq__36047__$1);
var G__36662 = null;
var G__36663 = (0);
var G__36664 = (0);
seq__36047 = G__36661;
chunk__36048 = G__36662;
count__36049 = G__36663;
i__36050 = G__36664;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq36010){
var G__36011 = cljs.core.first(seq36010);
var seq36010__$1 = cljs.core.next(seq36010);
var G__36012 = cljs.core.first(seq36010__$1);
var seq36010__$2 = cljs.core.next(seq36010__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36011,G__36012,seq36010__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__36071_36670 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__36072_36671 = null;
var count__36073_36672 = (0);
var i__36074_36674 = (0);
while(true){
if((i__36074_36674 < count__36073_36672)){
var child_36675 = chunk__36072_36671.cljs$core$IIndexed$_nth$arity$2(null,i__36074_36674);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_36675,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_36675,ev,notify_fn));


var G__36676 = seq__36071_36670;
var G__36677 = chunk__36072_36671;
var G__36678 = count__36073_36672;
var G__36679 = (i__36074_36674 + (1));
seq__36071_36670 = G__36676;
chunk__36072_36671 = G__36677;
count__36073_36672 = G__36678;
i__36074_36674 = G__36679;
continue;
} else {
var temp__5804__auto___36681 = cljs.core.seq(seq__36071_36670);
if(temp__5804__auto___36681){
var seq__36071_36682__$1 = temp__5804__auto___36681;
if(cljs.core.chunked_seq_QMARK_(seq__36071_36682__$1)){
var c__4679__auto___36683 = cljs.core.chunk_first(seq__36071_36682__$1);
var G__36684 = cljs.core.chunk_rest(seq__36071_36682__$1);
var G__36685 = c__4679__auto___36683;
var G__36686 = cljs.core.count(c__4679__auto___36683);
var G__36687 = (0);
seq__36071_36670 = G__36684;
chunk__36072_36671 = G__36685;
count__36073_36672 = G__36686;
i__36074_36674 = G__36687;
continue;
} else {
var child_36688 = cljs.core.first(seq__36071_36682__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_36688,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_36688,ev,notify_fn));


var G__36689 = cljs.core.next(seq__36071_36682__$1);
var G__36690 = null;
var G__36691 = (0);
var G__36692 = (0);
seq__36071_36670 = G__36689;
chunk__36072_36671 = G__36690;
count__36073_36672 = G__36691;
i__36074_36674 = G__36692;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36693 = arguments.length;
var i__4865__auto___36694 = (0);
while(true){
if((i__4865__auto___36694 < len__4864__auto___36693)){
args__4870__auto__.push((arguments[i__4865__auto___36694]));

var G__36695 = (i__4865__auto___36694 + (1));
i__4865__auto___36694 = G__36695;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq36078){
var G__36079 = cljs.core.first(seq36078);
var seq36078__$1 = cljs.core.next(seq36078);
var G__36080 = cljs.core.first(seq36078__$1);
var seq36078__$2 = cljs.core.next(seq36078__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36079,G__36080,seq36078__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36696 = arguments.length;
var i__4865__auto___36697 = (0);
while(true){
if((i__4865__auto___36697 < len__4864__auto___36696)){
args__4870__auto__.push((arguments[i__4865__auto___36697]));

var G__36698 = (i__4865__auto___36697 + (1));
i__4865__auto___36697 = G__36698;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__36700 = shadow.object.get_parent(current);
current = G__36700;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq36090){
var G__36091 = cljs.core.first(seq36090);
var seq36090__$1 = cljs.core.next(seq36090);
var G__36092 = cljs.core.first(seq36090__$1);
var seq36090__$2 = cljs.core.next(seq36090__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36091,G__36092,seq36090__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36702 = arguments.length;
var i__4865__auto___36703 = (0);
while(true){
if((i__4865__auto___36703 < len__4864__auto___36702)){
args__4870__auto__.push((arguments[i__4865__auto___36703]));

var G__36704 = (i__4865__auto___36703 + (1));
i__4865__auto___36703 = G__36704;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq36106){
var G__36107 = cljs.core.first(seq36106);
var seq36106__$1 = cljs.core.next(seq36106);
var G__36108 = cljs.core.first(seq36106__$1);
var seq36106__$2 = cljs.core.next(seq36106__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36107,G__36108,seq36106__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5802__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5802__auto__)){
var custom_remove = temp__5802__auto__;
var G__36123 = this$;
var G__36124 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__36123,G__36124) : custom_remove.call(null,G__36123,G__36124));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__36126 = arguments.length;
switch (G__36126) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__36162 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__36164 = null;
var count__36165 = (0);
var i__36166 = (0);
while(true){
if((i__36166 < count__36165)){
var vec__36271 = chunk__36164.cljs$core$IIndexed$_nth$arity$2(null,i__36166);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36271,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36271,(1),null);
var ev_def = vec__36271;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_36717__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__36162,chunk__36164,count__36165,i__36166,vec__36271,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__36162,chunk__36164,count__36165,i__36166,vec__36271,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__36162,chunk__36164,count__36165,i__36166,handler_36717__$1,vec__36271,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_36717__$1.cljs$core$IFn$_invoke$arity$3 ? handler_36717__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_36717__$1.call(null,oref,e,el));
});})(seq__36162,chunk__36164,count__36165,i__36166,handler_36717__$1,vec__36271,ev,handler,ev_def))
);


var G__36719 = seq__36162;
var G__36720 = chunk__36164;
var G__36721 = count__36165;
var G__36722 = (i__36166 + (1));
seq__36162 = G__36719;
chunk__36164 = G__36720;
count__36165 = G__36721;
i__36166 = G__36722;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36162);
if(temp__5804__auto__){
var seq__36162__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36162__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36162__$1);
var G__36723 = cljs.core.chunk_rest(seq__36162__$1);
var G__36724 = c__4679__auto__;
var G__36725 = cljs.core.count(c__4679__auto__);
var G__36726 = (0);
seq__36162 = G__36723;
chunk__36164 = G__36724;
count__36165 = G__36725;
i__36166 = G__36726;
continue;
} else {
var vec__36287 = cljs.core.first(seq__36162__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36287,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36287,(1),null);
var ev_def = vec__36287;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_36727__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__36162,chunk__36164,count__36165,i__36166,vec__36287,ev,handler,ev_def,seq__36162__$1,temp__5804__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__36162,chunk__36164,count__36165,i__36166,vec__36287,ev,handler,ev_def,seq__36162__$1,temp__5804__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__36162,chunk__36164,count__36165,i__36166,handler_36727__$1,vec__36287,ev,handler,ev_def,seq__36162__$1,temp__5804__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_36727__$1.cljs$core$IFn$_invoke$arity$3 ? handler_36727__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_36727__$1.call(null,oref,e,el));
});})(seq__36162,chunk__36164,count__36165,i__36166,handler_36727__$1,vec__36287,ev,handler,ev_def,seq__36162__$1,temp__5804__auto__))
);


var G__36730 = cljs.core.next(seq__36162__$1);
var G__36731 = null;
var G__36732 = (0);
var G__36733 = (0);
seq__36162 = G__36730;
chunk__36164 = G__36731;
count__36165 = G__36732;
i__36166 = G__36733;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__36290){
var vec__36291 = p__36290;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36291,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36291,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = event;
if(cljs.core.truth_(and__4251__auto__)){
return handler;
} else {
return and__4251__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36745 = arguments.length;
var i__4865__auto___36746 = (0);
while(true){
if((i__4865__auto___36746 < len__4864__auto___36745)){
args__4870__auto__.push((arguments[i__4865__auto___36746]));

var G__36747 = (i__4865__auto___36746 + (1));
i__4865__auto___36746 = G__36747;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e36309){if((e36309 instanceof Object)){
var e = e36309;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e36309;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq36302){
var G__36303 = cljs.core.first(seq36302);
var seq36302__$1 = cljs.core.next(seq36302);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36303,seq36302__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__36319 = arguments.length;
switch (G__36319) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__36327 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__36327) : shadow.dom.build.call(null,G__36327));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k36329,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__36341 = k36329;
var G__36341__$1 = (((G__36341 instanceof cljs.core.Keyword))?G__36341.fqn:null);
switch (G__36341__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36329,else__4505__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__36342){
var vec__36344 = p__36342;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36344,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36344,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.object.Watch{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36328){
var self__ = this;
var G__36328__$1 = this;
return (new cljs.core.RecordIter((0),G__36328__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36330,other36331){
var self__ = this;
var this36330__$1 = this;
return (((!((other36331 == null)))) && ((((this36330__$1.constructor === other36331.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36330__$1.key,other36331.key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36330__$1.handler,other36331.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36330__$1.__extmap,other36331.__extmap)))))))));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k36329){
var self__ = this;
var this__4509__auto____$1 = this;
var G__36359 = k36329;
var G__36359__$1 = (((G__36359 instanceof cljs.core.Keyword))?G__36359.fqn:null);
switch (G__36359__$1) {
case "key":
case "handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36329);

}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__36328){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__36360 = cljs.core.keyword_identical_QMARK_;
var expr__36361 = k__4511__auto__;
if(cljs.core.truth_((pred__36360.cljs$core$IFn$_invoke$arity$2 ? pred__36360.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__36361) : pred__36360.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__36361)))){
return (new shadow.object.Watch(G__36328,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36360.cljs$core$IFn$_invoke$arity$2 ? pred__36360.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__36361) : pred__36360.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__36361)))){
return (new shadow.object.Watch(self__.key,G__36328,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__36328),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__36328){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__36328,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__36336){
var extmap__4542__auto__ = (function (){var G__36367 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36336,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__36336)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36367);
} else {
return G__36367;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__36336),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__36336),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36371_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__36371_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__36425 = cljs.core.seq(self__.watches);
var chunk__36426 = null;
var count__36427 = (0);
var i__36428 = (0);
while(true){
if((i__36428 < count__36427)){
var map__36434 = chunk__36426.cljs$core$IIndexed$_nth$arity$2(null,i__36428);
var map__36434__$1 = cljs.core.__destructure_map(map__36434);
var watch = map__36434__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36434__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36434__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__36779 = seq__36425;
var G__36780 = chunk__36426;
var G__36781 = count__36427;
var G__36782 = (i__36428 + (1));
seq__36425 = G__36779;
chunk__36426 = G__36780;
count__36427 = G__36781;
i__36428 = G__36782;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36425);
if(temp__5804__auto__){
var seq__36425__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36425__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36425__$1);
var G__36783 = cljs.core.chunk_rest(seq__36425__$1);
var G__36784 = c__4679__auto__;
var G__36785 = cljs.core.count(c__4679__auto__);
var G__36786 = (0);
seq__36425 = G__36783;
chunk__36426 = G__36784;
count__36427 = G__36785;
i__36428 = G__36786;
continue;
} else {
var map__36435 = cljs.core.first(seq__36425__$1);
var map__36435__$1 = cljs.core.__destructure_map(map__36435);
var watch = map__36435__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36435__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36435__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__36787 = cljs.core.next(seq__36425__$1);
var G__36788 = null;
var G__36789 = (0);
var G__36790 = (0);
seq__36425 = G__36787;
chunk__36426 = G__36788;
count__36427 = G__36789;
i__36428 = G__36790;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__36438_36792 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__36439_36793 = null;
var count__36440_36794 = (0);
var i__36441_36795 = (0);
while(true){
if((i__36441_36795 < count__36440_36794)){
var child_36796 = chunk__36439_36793.cljs$core$IIndexed$_nth$arity$2(null,i__36441_36795);
shadow.object._destroy_BANG_(child_36796,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__36797 = seq__36438_36792;
var G__36798 = chunk__36439_36793;
var G__36799 = count__36440_36794;
var G__36800 = (i__36441_36795 + (1));
seq__36438_36792 = G__36797;
chunk__36439_36793 = G__36798;
count__36440_36794 = G__36799;
i__36441_36795 = G__36800;
continue;
} else {
var temp__5804__auto___36801 = cljs.core.seq(seq__36438_36792);
if(temp__5804__auto___36801){
var seq__36438_36802__$1 = temp__5804__auto___36801;
if(cljs.core.chunked_seq_QMARK_(seq__36438_36802__$1)){
var c__4679__auto___36803 = cljs.core.chunk_first(seq__36438_36802__$1);
var G__36804 = cljs.core.chunk_rest(seq__36438_36802__$1);
var G__36805 = c__4679__auto___36803;
var G__36806 = cljs.core.count(c__4679__auto___36803);
var G__36807 = (0);
seq__36438_36792 = G__36804;
chunk__36439_36793 = G__36805;
count__36440_36794 = G__36806;
i__36441_36795 = G__36807;
continue;
} else {
var child_36808 = cljs.core.first(seq__36438_36802__$1);
shadow.object._destroy_BANG_(child_36808,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__36809 = cljs.core.next(seq__36438_36802__$1);
var G__36810 = null;
var G__36811 = (0);
var G__36812 = (0);
seq__36438_36792 = G__36809;
chunk__36439_36793 = G__36810;
count__36440_36794 = G__36811;
i__36441_36795 = G__36812;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_36818 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_36818 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_36818);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__36461 = arguments.length;
switch (G__36461) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__36463 = arguments.length;
switch (G__36463) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36838 = arguments.length;
var i__4865__auto___36839 = (0);
while(true){
if((i__4865__auto___36839 < len__4864__auto___36838)){
args__4870__auto__.push((arguments[i__4865__auto___36839]));

var G__36840 = (i__4865__auto___36839 + (1));
i__4865__auto___36839 = G__36840;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_36851 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5802__auto___36852 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5802__auto___36852)){
var dom_36853 = temp__5802__auto___36852;
shadow.dom.set_data(dom_36853,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_36853,dom_events_36851);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_36853], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_36853], 0));
} else {
var temp__5804__auto___36855 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5804__auto___36855)){
var dom_fn_36856 = temp__5804__auto___36855;
var dom_36857 = (function (){var G__36475 = (dom_fn_36856.cljs$core$IFn$_invoke$arity$2 ? dom_fn_36856.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_36856.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__36475) : shadow.dom.build.call(null,G__36475));
})();
shadow.dom.set_data(dom_36857,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_36857], 0));

shadow.object.bind_dom_events(oref,dom_36857,dom_events_36851);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_36857], 0));
} else {
}
}

var temp__5804__auto___36861 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5804__auto___36861)){
var watches_36862 = temp__5804__auto___36861;
var seq__36476_36863 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_36862));
var chunk__36477_36864 = null;
var count__36478_36865 = (0);
var i__36479_36866 = (0);
while(true){
if((i__36479_36866 < count__36478_36865)){
var vec__36486_36880 = chunk__36477_36864.cljs$core$IIndexed$_nth$arity$2(null,i__36479_36866);
var attr_36881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36486_36880,(0),null);
var handler_36882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36486_36880,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_36881,((function (seq__36476_36863,chunk__36477_36864,count__36478_36865,i__36479_36866,vec__36486_36880,attr_36881,handler_36882,watches_36862,temp__5804__auto___36861,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_36882.cljs$core$IFn$_invoke$arity$3 ? handler_36882.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_36882.call(null,oref,old,new$));
});})(seq__36476_36863,chunk__36477_36864,count__36478_36865,i__36479_36866,vec__36486_36880,attr_36881,handler_36882,watches_36862,temp__5804__auto___36861,oid,parent,result_chan,odef,obj,oref))
);


var G__36885 = seq__36476_36863;
var G__36886 = chunk__36477_36864;
var G__36887 = count__36478_36865;
var G__36888 = (i__36479_36866 + (1));
seq__36476_36863 = G__36885;
chunk__36477_36864 = G__36886;
count__36478_36865 = G__36887;
i__36479_36866 = G__36888;
continue;
} else {
var temp__5804__auto___36889__$1 = cljs.core.seq(seq__36476_36863);
if(temp__5804__auto___36889__$1){
var seq__36476_36890__$1 = temp__5804__auto___36889__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36476_36890__$1)){
var c__4679__auto___36891 = cljs.core.chunk_first(seq__36476_36890__$1);
var G__36892 = cljs.core.chunk_rest(seq__36476_36890__$1);
var G__36893 = c__4679__auto___36891;
var G__36894 = cljs.core.count(c__4679__auto___36891);
var G__36895 = (0);
seq__36476_36863 = G__36892;
chunk__36477_36864 = G__36893;
count__36478_36865 = G__36894;
i__36479_36866 = G__36895;
continue;
} else {
var vec__36489_36896 = cljs.core.first(seq__36476_36890__$1);
var attr_36897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36489_36896,(0),null);
var handler_36898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36489_36896,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_36897,((function (seq__36476_36863,chunk__36477_36864,count__36478_36865,i__36479_36866,vec__36489_36896,attr_36897,handler_36898,seq__36476_36890__$1,temp__5804__auto___36889__$1,watches_36862,temp__5804__auto___36861,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_36898.cljs$core$IFn$_invoke$arity$3 ? handler_36898.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_36898.call(null,oref,old,new$));
});})(seq__36476_36863,chunk__36477_36864,count__36478_36865,i__36479_36866,vec__36489_36896,attr_36897,handler_36898,seq__36476_36890__$1,temp__5804__auto___36889__$1,watches_36862,temp__5804__auto___36861,oid,parent,result_chan,odef,obj,oref))
);


var G__36902 = cljs.core.next(seq__36476_36890__$1);
var G__36903 = null;
var G__36904 = (0);
var G__36905 = (0);
seq__36476_36863 = G__36902;
chunk__36477_36864 = G__36903;
count__36478_36865 = G__36904;
i__36479_36866 = G__36905;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq36472){
var G__36473 = cljs.core.first(seq36472);
var seq36472__$1 = cljs.core.next(seq36472);
var G__36474 = cljs.core.first(seq36472__$1);
var seq36472__$2 = cljs.core.next(seq36472__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36473,G__36474,seq36472__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__36495 = arguments.length;
switch (G__36495) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__36493_SHARP_){
var G__36500 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__36493_SHARP_) : node_gen.call(null,p1__36493_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__36500) : shadow.dom.build.call(null,G__36500));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__36501_36914 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__36502_36915 = null;
var count__36503_36916 = (0);
var i__36504_36917 = (0);
while(true){
if((i__36504_36917 < count__36503_36916)){
var obj_36918 = chunk__36502_36915.cljs$core$IIndexed$_nth$arity$2(null,i__36504_36917);
var obj_36919__$1 = shadow.object.get_from_dom(obj_36918);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_36919__$1);


var G__36922 = seq__36501_36914;
var G__36923 = chunk__36502_36915;
var G__36924 = count__36503_36916;
var G__36925 = (i__36504_36917 + (1));
seq__36501_36914 = G__36922;
chunk__36502_36915 = G__36923;
count__36503_36916 = G__36924;
i__36504_36917 = G__36925;
continue;
} else {
var temp__5804__auto___36926 = cljs.core.seq(seq__36501_36914);
if(temp__5804__auto___36926){
var seq__36501_36927__$1 = temp__5804__auto___36926;
if(cljs.core.chunked_seq_QMARK_(seq__36501_36927__$1)){
var c__4679__auto___36928 = cljs.core.chunk_first(seq__36501_36927__$1);
var G__36929 = cljs.core.chunk_rest(seq__36501_36927__$1);
var G__36930 = c__4679__auto___36928;
var G__36931 = cljs.core.count(c__4679__auto___36928);
var G__36932 = (0);
seq__36501_36914 = G__36929;
chunk__36502_36915 = G__36930;
count__36503_36916 = G__36931;
i__36504_36917 = G__36932;
continue;
} else {
var obj_36933 = cljs.core.first(seq__36501_36927__$1);
var obj_36934__$1 = shadow.object.get_from_dom(obj_36933);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_36934__$1);


var G__36935 = cljs.core.next(seq__36501_36927__$1);
var G__36936 = null;
var G__36937 = (0);
var G__36938 = (0);
seq__36501_36914 = G__36935;
chunk__36502_36915 = G__36936;
count__36503_36916 = G__36937;
i__36504_36917 = G__36938;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__36509 = arguments.length;
switch (G__36509) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__36505_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__36505_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__36513){
var vec__36514 = p__36513;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36514,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36514,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__36518_36947 = cljs.core.seq((function (){var G__36523 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__36523) : coll_transform.call(null,G__36523));
})());
var chunk__36519_36948 = null;
var count__36520_36949 = (0);
var i__36521_36950 = (0);
while(true){
if((i__36521_36950 < count__36520_36949)){
var item_36952 = chunk__36519_36948.cljs$core$IIndexed$_nth$arity$2(null,i__36521_36950);
shadow.object.dom_enter(coll_dom,make_item_fn(item_36952));


var G__36953 = seq__36518_36947;
var G__36954 = chunk__36519_36948;
var G__36955 = count__36520_36949;
var G__36956 = (i__36521_36950 + (1));
seq__36518_36947 = G__36953;
chunk__36519_36948 = G__36954;
count__36520_36949 = G__36955;
i__36521_36950 = G__36956;
continue;
} else {
var temp__5804__auto___36957 = cljs.core.seq(seq__36518_36947);
if(temp__5804__auto___36957){
var seq__36518_36958__$1 = temp__5804__auto___36957;
if(cljs.core.chunked_seq_QMARK_(seq__36518_36958__$1)){
var c__4679__auto___36959 = cljs.core.chunk_first(seq__36518_36958__$1);
var G__36960 = cljs.core.chunk_rest(seq__36518_36958__$1);
var G__36961 = c__4679__auto___36959;
var G__36962 = cljs.core.count(c__4679__auto___36959);
var G__36963 = (0);
seq__36518_36947 = G__36960;
chunk__36519_36948 = G__36961;
count__36520_36949 = G__36962;
i__36521_36950 = G__36963;
continue;
} else {
var item_36964 = cljs.core.first(seq__36518_36958__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_36964));


var G__36965 = cljs.core.next(seq__36518_36958__$1);
var G__36966 = null;
var G__36967 = (0);
var G__36968 = (0);
seq__36518_36947 = G__36965;
chunk__36519_36948 = G__36966;
count__36520_36949 = G__36967;
i__36521_36950 = G__36968;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4339__auto__ = count_new;
var y__4340__auto__ = count_children;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var n__4741__auto___36969 = count_children__$1;
var idx_36970 = (0);
while(true){
if((idx_36970 < n__4741__auto___36969)){
var cn_36971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_36970);
var cc_36972 = shadow.object.get_from_dom(cn_36971);
var ckey_36973 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_36972);
var cval_36974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_36972,item_key);
var vec__36525_36975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_36970);
var nkey_36976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36525_36975,(0),null);
var nval_36977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36525_36975,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_36973,nkey_36976)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_36974,nval_36977)))){
} else {
var new_obj_36978 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_36976,nval_36977], null));
shadow.dom.replace_node(cn_36971,new_obj_36978);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_36972);

shadow.object.notify_tree_BANG_(new_obj_36978,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__36979 = (idx_36970 + (1));
idx_36970 = G__36979;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__36528_36980 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__36529_36981 = null;
var count__36530_36982 = (0);
var i__36531_36983 = (0);
while(true){
if((i__36531_36983 < count__36530_36982)){
var item_36984 = chunk__36529_36981.cljs$core$IIndexed$_nth$arity$2(null,i__36531_36983);
shadow.object.dom_enter(coll_dom,make_item_fn(item_36984));


var G__36985 = seq__36528_36980;
var G__36986 = chunk__36529_36981;
var G__36987 = count__36530_36982;
var G__36988 = (i__36531_36983 + (1));
seq__36528_36980 = G__36985;
chunk__36529_36981 = G__36986;
count__36530_36982 = G__36987;
i__36531_36983 = G__36988;
continue;
} else {
var temp__5804__auto___36989 = cljs.core.seq(seq__36528_36980);
if(temp__5804__auto___36989){
var seq__36528_36990__$1 = temp__5804__auto___36989;
if(cljs.core.chunked_seq_QMARK_(seq__36528_36990__$1)){
var c__4679__auto___36991 = cljs.core.chunk_first(seq__36528_36990__$1);
var G__36992 = cljs.core.chunk_rest(seq__36528_36990__$1);
var G__36993 = c__4679__auto___36991;
var G__36994 = cljs.core.count(c__4679__auto___36991);
var G__36995 = (0);
seq__36528_36980 = G__36992;
chunk__36529_36981 = G__36993;
count__36530_36982 = G__36994;
i__36531_36983 = G__36995;
continue;
} else {
var item_36996 = cljs.core.first(seq__36528_36990__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_36996));


var G__36997 = cljs.core.next(seq__36528_36990__$1);
var G__36998 = null;
var G__36999 = (0);
var G__37000 = (0);
seq__36528_36980 = G__36997;
chunk__36529_36981 = G__36998;
count__36530_36982 = G__36999;
i__36531_36983 = G__37000;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4251__auto__ = key;
if(cljs.core.truth_(and__4251__auto__)){
return path;
} else {
return and__4251__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__36536 = "inspect!";
var G__36537 = shadow.object._id(oref);
var G__36538 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__36539 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__36536,G__36537,G__36538,G__36539) : shadow.object.info.call(null,G__36536,G__36537,G__36538,G__36539));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__36545_37006 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__36546_37007 = null;
var count__36547_37008 = (0);
var i__36548_37009 = (0);
while(true){
if((i__36548_37009 < count__36547_37008)){
var vec__36568_37010 = chunk__36546_37007.cljs$core$IIndexed$_nth$arity$2(null,i__36548_37009);
var id_37011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36568_37010,(0),null);
var oref_37012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36568_37010,(1),null);
var G__36571_37013 = "dump";
var G__36572_37014 = id_37011;
var G__36573_37015 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_37012)], 0));
var G__36574_37016 = cljs.core.deref(shadow.object._data(oref_37012));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__36571_37013,G__36572_37014,G__36573_37015,G__36574_37016) : shadow.object.info.call(null,G__36571_37013,G__36572_37014,G__36573_37015,G__36574_37016));


var G__37017 = seq__36545_37006;
var G__37018 = chunk__36546_37007;
var G__37019 = count__36547_37008;
var G__37020 = (i__36548_37009 + (1));
seq__36545_37006 = G__37017;
chunk__36546_37007 = G__37018;
count__36547_37008 = G__37019;
i__36548_37009 = G__37020;
continue;
} else {
var temp__5804__auto___37021 = cljs.core.seq(seq__36545_37006);
if(temp__5804__auto___37021){
var seq__36545_37022__$1 = temp__5804__auto___37021;
if(cljs.core.chunked_seq_QMARK_(seq__36545_37022__$1)){
var c__4679__auto___37023 = cljs.core.chunk_first(seq__36545_37022__$1);
var G__37024 = cljs.core.chunk_rest(seq__36545_37022__$1);
var G__37025 = c__4679__auto___37023;
var G__37026 = cljs.core.count(c__4679__auto___37023);
var G__37027 = (0);
seq__36545_37006 = G__37024;
chunk__36546_37007 = G__37025;
count__36547_37008 = G__37026;
i__36548_37009 = G__37027;
continue;
} else {
var vec__36576_37028 = cljs.core.first(seq__36545_37022__$1);
var id_37029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36576_37028,(0),null);
var oref_37030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36576_37028,(1),null);
var G__36580_37031 = "dump";
var G__36581_37032 = id_37029;
var G__36582_37033 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_37030)], 0));
var G__36583_37034 = cljs.core.deref(shadow.object._data(oref_37030));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__36580_37031,G__36581_37032,G__36582_37033,G__36583_37034) : shadow.object.info.call(null,G__36580_37031,G__36581_37032,G__36582_37033,G__36583_37034));


var G__37035 = cljs.core.next(seq__36545_37022__$1);
var G__37036 = null;
var G__37037 = (0);
var G__37038 = (0);
seq__36545_37006 = G__37035;
chunk__36546_37007 = G__37036;
count__36547_37008 = G__37037;
i__36548_37009 = G__37038;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
