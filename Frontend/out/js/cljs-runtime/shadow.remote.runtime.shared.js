goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32753,res){
var map__32754 = p__32753;
var map__32754__$1 = cljs.core.__destructure_map(map__32754);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32754__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32754__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32758 = res;
var G__32758__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32758,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32758);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32758__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32758__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32764 = arguments.length;
switch (G__32764) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32770,msg,handlers,timeout_after_ms){
var map__32771 = p__32770;
var map__32771__$1 = cljs.core.__destructure_map(map__32771);
var runtime = map__32771__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32771__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32941 = arguments.length;
var i__4865__auto___32943 = (0);
while(true){
if((i__4865__auto___32943 < len__4864__auto___32941)){
args__4870__auto__.push((arguments[i__4865__auto___32943]));

var G__32944 = (i__4865__auto___32943 + (1));
i__4865__auto___32943 = G__32944;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32777,ev,args){
var map__32778 = p__32777;
var map__32778__$1 = cljs.core.__destructure_map(map__32778);
var runtime = map__32778__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32778__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32779 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32782 = null;
var count__32783 = (0);
var i__32784 = (0);
while(true){
if((i__32784 < count__32783)){
var ext = chunk__32782.cljs$core$IIndexed$_nth$arity$2(null,i__32784);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32946 = seq__32779;
var G__32947 = chunk__32782;
var G__32948 = count__32783;
var G__32949 = (i__32784 + (1));
seq__32779 = G__32946;
chunk__32782 = G__32947;
count__32783 = G__32948;
i__32784 = G__32949;
continue;
} else {
var G__32950 = seq__32779;
var G__32951 = chunk__32782;
var G__32952 = count__32783;
var G__32953 = (i__32784 + (1));
seq__32779 = G__32950;
chunk__32782 = G__32951;
count__32783 = G__32952;
i__32784 = G__32953;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32779);
if(temp__5804__auto__){
var seq__32779__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32779__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32779__$1);
var G__32954 = cljs.core.chunk_rest(seq__32779__$1);
var G__32955 = c__4679__auto__;
var G__32956 = cljs.core.count(c__4679__auto__);
var G__32957 = (0);
seq__32779 = G__32954;
chunk__32782 = G__32955;
count__32783 = G__32956;
i__32784 = G__32957;
continue;
} else {
var ext = cljs.core.first(seq__32779__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32959 = cljs.core.next(seq__32779__$1);
var G__32960 = null;
var G__32961 = (0);
var G__32962 = (0);
seq__32779 = G__32959;
chunk__32782 = G__32960;
count__32783 = G__32961;
i__32784 = G__32962;
continue;
} else {
var G__32963 = cljs.core.next(seq__32779__$1);
var G__32964 = null;
var G__32965 = (0);
var G__32966 = (0);
seq__32779 = G__32963;
chunk__32782 = G__32964;
count__32783 = G__32965;
i__32784 = G__32966;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32774){
var G__32775 = cljs.core.first(seq32774);
var seq32774__$1 = cljs.core.next(seq32774);
var G__32776 = cljs.core.first(seq32774__$1);
var seq32774__$2 = cljs.core.next(seq32774__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32775,G__32776,seq32774__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32800,p__32801){
var map__32810 = p__32800;
var map__32810__$1 = cljs.core.__destructure_map(map__32810);
var runtime = map__32810__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32810__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32813 = p__32801;
var map__32813__$1 = cljs.core.__destructure_map(map__32813);
var msg = map__32813__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32813__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__32824 = cljs.core.deref(state_ref);
var map__32824__$1 = cljs.core.__destructure_map(map__32824);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32824__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32824__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32827){
var map__32829 = p__32827;
var map__32829__$1 = cljs.core.__destructure_map(map__32829);
var runtime = map__32829__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__32834,msg){
var map__32836 = p__32834;
var map__32836__$1 = cljs.core.__destructure_map(map__32836);
var runtime = map__32836__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32836__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__32843,key,p__32844){
var map__32845 = p__32843;
var map__32845__$1 = cljs.core.__destructure_map(map__32845);
var state = map__32845__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32845__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__32847 = p__32844;
var map__32847__$1 = cljs.core.__destructure_map(map__32847);
var spec = map__32847__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32847__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32857,key,spec){
var map__32858 = p__32857;
var map__32858__$1 = cljs.core.__destructure_map(map__32858);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32858__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32860_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32860_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32861_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32861_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32862_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32862_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32863_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32863_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32864_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32864_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32890,key){
var map__32891 = p__32890;
var map__32891__$1 = cljs.core.__destructure_map(map__32891);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32891__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32895,msg){
var map__32897 = p__32895;
var map__32897__$1 = cljs.core.__destructure_map(map__32897);
var runtime = map__32897__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32897__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32904,p__32905){
var map__32906 = p__32904;
var map__32906__$1 = cljs.core.__destructure_map(map__32906);
var runtime = map__32906__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32906__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32907 = p__32905;
var map__32907__$1 = cljs.core.__destructure_map(map__32907);
var msg = map__32907__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32907__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32907__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__32914 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32916 = null;
var count__32917 = (0);
var i__32918 = (0);
while(true){
if((i__32918 < count__32917)){
var map__32926 = chunk__32916.cljs$core$IIndexed$_nth$arity$2(null,i__32918);
var map__32926__$1 = cljs.core.__destructure_map(map__32926);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32926__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33011 = seq__32914;
var G__33012 = chunk__32916;
var G__33013 = count__32917;
var G__33014 = (i__32918 + (1));
seq__32914 = G__33011;
chunk__32916 = G__33012;
count__32917 = G__33013;
i__32918 = G__33014;
continue;
} else {
var G__33015 = seq__32914;
var G__33016 = chunk__32916;
var G__33017 = count__32917;
var G__33018 = (i__32918 + (1));
seq__32914 = G__33015;
chunk__32916 = G__33016;
count__32917 = G__33017;
i__32918 = G__33018;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32914);
if(temp__5804__auto__){
var seq__32914__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32914__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32914__$1);
var G__33020 = cljs.core.chunk_rest(seq__32914__$1);
var G__33021 = c__4679__auto__;
var G__33022 = cljs.core.count(c__4679__auto__);
var G__33023 = (0);
seq__32914 = G__33020;
chunk__32916 = G__33021;
count__32917 = G__33022;
i__32918 = G__33023;
continue;
} else {
var map__32929 = cljs.core.first(seq__32914__$1);
var map__32929__$1 = cljs.core.__destructure_map(map__32929);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32929__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33026 = cljs.core.next(seq__32914__$1);
var G__33027 = null;
var G__33028 = (0);
var G__33029 = (0);
seq__32914 = G__33026;
chunk__32916 = G__33027;
count__32917 = G__33028;
i__32918 = G__33029;
continue;
} else {
var G__33030 = cljs.core.next(seq__32914__$1);
var G__33031 = null;
var G__33032 = (0);
var G__33033 = (0);
seq__32914 = G__33030;
chunk__32916 = G__33031;
count__32917 = G__33032;
i__32918 = G__33033;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
