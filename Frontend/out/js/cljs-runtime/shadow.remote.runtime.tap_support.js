goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36369,p__36370){
var map__36372 = p__36369;
var map__36372__$1 = cljs.core.__destructure_map(map__36372);
var svc = map__36372__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36372__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36372__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36372__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36373 = p__36370;
var map__36373__$1 = cljs.core.__destructure_map(map__36373);
var msg = map__36373__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36373__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36373__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36373__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36373__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36378,p__36379){
var map__36381 = p__36378;
var map__36381__$1 = cljs.core.__destructure_map(map__36381);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36381__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36382 = p__36379;
var map__36382__$1 = cljs.core.__destructure_map(map__36382);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36382__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36386,p__36387){
var map__36389 = p__36386;
var map__36389__$1 = cljs.core.__destructure_map(map__36389);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36389__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36389__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36390 = p__36387;
var map__36390__$1 = cljs.core.__destructure_map(map__36390);
var msg = map__36390__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36390__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36393,tid){
var map__36394 = p__36393;
var map__36394__$1 = cljs.core.__destructure_map(map__36394);
var svc = map__36394__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36394__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36400 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36401 = null;
var count__36402 = (0);
var i__36403 = (0);
while(true){
if((i__36403 < count__36402)){
var vec__36417 = chunk__36401.cljs$core$IIndexed$_nth$arity$2(null,i__36403);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36417,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36417,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36442 = seq__36400;
var G__36443 = chunk__36401;
var G__36444 = count__36402;
var G__36445 = (i__36403 + (1));
seq__36400 = G__36442;
chunk__36401 = G__36443;
count__36402 = G__36444;
i__36403 = G__36445;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36400);
if(temp__5804__auto__){
var seq__36400__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36400__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36400__$1);
var G__36446 = cljs.core.chunk_rest(seq__36400__$1);
var G__36447 = c__4679__auto__;
var G__36448 = cljs.core.count(c__4679__auto__);
var G__36449 = (0);
seq__36400 = G__36446;
chunk__36401 = G__36447;
count__36402 = G__36448;
i__36403 = G__36449;
continue;
} else {
var vec__36422 = cljs.core.first(seq__36400__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36422,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36422,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36453 = cljs.core.next(seq__36400__$1);
var G__36454 = null;
var G__36455 = (0);
var G__36456 = (0);
seq__36400 = G__36453;
chunk__36401 = G__36454;
count__36402 = G__36455;
i__36403 = G__36456;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36396_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36396_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36397_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36397_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36398_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36398_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36399_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36399_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36431){
var map__36432 = p__36431;
var map__36432__$1 = cljs.core.__destructure_map(map__36432);
var svc = map__36432__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36432__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36432__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
