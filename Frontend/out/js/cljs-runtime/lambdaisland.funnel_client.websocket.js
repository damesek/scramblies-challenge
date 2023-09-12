goog.provide('lambdaisland.funnel_client.websocket');
goog.scope(function(){
  lambdaisland.funnel_client.websocket.goog$module$goog$object = goog.module.get('goog.object');
  lambdaisland.funnel_client.websocket.goog$module$goog$array = goog.module.get('goog.array');
});
lambdaisland.funnel_client.websocket.host_env = (((function (){var this$ = this;
return (this$ === (((typeof global !== 'undefined'))?global:null));
})())?new cljs.core.Keyword(null,"node","node",581201198):(((!((goog.global.document == null))))?new cljs.core.Keyword(null,"html","html",-998796897):(((((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.navigator !== 'undefined')) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.global.navigator.product,"ReactNative"))))?new cljs.core.Keyword(null,"react-native","react-native",-1543085138):(((((goog.global.document == null)) && ((((typeof self !== 'undefined')) && ((!((self.importScripts == null))))))))?new cljs.core.Keyword(null,"worker","worker",938239996):(function(){throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("lambdaisland.funnel-client.websocket","host-env","lambdaisland.funnel-client.websocket/host-env",525035411,null)),": Can't detect host env"].join('')))})()
))));
lambdaisland.funnel_client.websocket.event_types = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"open","open",-1763596448),goog.net.WebSocket.EventType.OPENED,new cljs.core.Keyword(null,"close","close",1835149582),goog.net.WebSocket.EventType.CLOSED,new cljs.core.Keyword(null,"error","error",-978969032),goog.net.WebSocket.EventType.ERROR,new cljs.core.Keyword(null,"message","message",-406056002),goog.net.WebSocket.EventType.MESSAGE], null);
lambdaisland.funnel_client.websocket.get_websocket_class = (function lambdaisland$funnel_client$websocket$get_websocket_class(){
var or__4253__auto__ = lambdaisland.funnel_client.websocket.goog$module$goog$object.get(goog.global,"WebSocket");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = lambdaisland.funnel_client.websocket.goog$module$goog$object.get(goog.global,"FIGWHEEL_WEBSOCKET_CLASS");
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lambdaisland.funnel_client.websocket.host_env,new cljs.core.Keyword(null,"node","node",581201198));
if(and__4251__auto__){
try{return require("ws");
}catch (e28906){if((e28906 instanceof Error)){
var e = e28906;
console.log("NODE_WS_NOT_FOUND");

return null;
} else {
throw e28906;

}
}} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lambdaisland.funnel_client.websocket.host_env,new cljs.core.Keyword(null,"worker","worker",938239996));
if(and__4251__auto__){
return lambdaisland.funnel_client.websocket.goog$module$goog$object.get(self,"WebSocket");
} else {
return and__4251__auto__;
}
}
}
}
});
lambdaisland.funnel_client.websocket.ensure_websocket = (function lambdaisland$funnel_client$websocket$ensure_websocket(thunk){
if(cljs.core.truth_(lambdaisland.funnel_client.websocket.goog$module$goog$object.get(goog.global,"WebSocket"))){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
var temp__5802__auto__ = lambdaisland.funnel_client.websocket.get_websocket_class();
if(cljs.core.truth_(temp__5802__auto__)){
var websocket_class = temp__5802__auto__;
lambdaisland.funnel_client.websocket.goog$module$goog$object.set(goog.global,"WebSocket",websocket_class);

var result = (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
lambdaisland.funnel_client.websocket.goog$module$goog$object.set(goog.global,"WebSocket",null);

return result;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("lambdaisland.funnel-client.websocket","ensure-websocket","lambdaisland.funnel-client.websocket/ensure-websocket",275165486,null)),": no websocket class found"].join('')));
}
}
});
lambdaisland.funnel_client.websocket.make_websocket = (function lambdaisland$funnel_client$websocket$make_websocket(var_args){
var G__28930 = arguments.length;
switch (G__28930) {
case 0:
return lambdaisland.funnel_client.websocket.make_websocket.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return lambdaisland.funnel_client.websocket.make_websocket.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.funnel_client.websocket.make_websocket.cljs$core$IFn$_invoke$arity$0 = (function (){
return lambdaisland.funnel_client.websocket.make_websocket.cljs$core$IFn$_invoke$arity$1(true);
}));

(lambdaisland.funnel_client.websocket.make_websocket.cljs$core$IFn$_invoke$arity$1 = (function (reconnect_QMARK_){
return lambdaisland.funnel_client.websocket.ensure_websocket((function (){
return (new goog.net.WebSocket(reconnect_QMARK_));
}));
}));

(lambdaisland.funnel_client.websocket.make_websocket.cljs$lang$maxFixedArity = 1);

lambdaisland.funnel_client.websocket.register_handlers_STAR_ = (function lambdaisland$funnel_client$websocket$register_handlers_STAR_(ws,handler_map){
var seq__28935 = cljs.core.seq(handler_map);
var chunk__28936 = null;
var count__28937 = (0);
var i__28938 = (0);
while(true){
if((i__28938 < count__28937)){
var vec__28955 = chunk__28936.cljs$core$IIndexed$_nth$arity$2(null,i__28938);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28955,(0),null);
var handler_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28955,(1),null);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.funnel_client.websocket.event_types,type))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"\n","(get event-types type)"].join('')));
}

ws.addEventListener(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.funnel_client.websocket.event_types,type),handler_fn);


var G__29029 = seq__28935;
var G__29030 = chunk__28936;
var G__29031 = count__28937;
var G__29032 = (i__28938 + (1));
seq__28935 = G__29029;
chunk__28936 = G__29030;
count__28937 = G__29031;
i__28938 = G__29032;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28935);
if(temp__5804__auto__){
var seq__28935__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28935__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28935__$1);
var G__29034 = cljs.core.chunk_rest(seq__28935__$1);
var G__29035 = c__4679__auto__;
var G__29036 = cljs.core.count(c__4679__auto__);
var G__29037 = (0);
seq__28935 = G__29034;
chunk__28936 = G__29035;
count__28937 = G__29036;
i__28938 = G__29037;
continue;
} else {
var vec__28961 = cljs.core.first(seq__28935__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28961,(0),null);
var handler_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28961,(1),null);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.funnel_client.websocket.event_types,type))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"\n","(get event-types type)"].join('')));
}

ws.addEventListener(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.funnel_client.websocket.event_types,type),handler_fn);


var G__29038 = cljs.core.next(seq__28935__$1);
var G__29039 = null;
var G__29040 = (0);
var G__29041 = (0);
seq__28935 = G__29038;
chunk__28936 = G__29039;
count__28937 = G__29040;
i__28938 = G__29041;
continue;
}
} else {
return null;
}
}
break;
}
});
lambdaisland.funnel_client.websocket.register_handlers = (function lambdaisland$funnel_client$websocket$register_handlers(ws,handler_map){
return lambdaisland.funnel_client.websocket.ensure_websocket((function (){
return lambdaisland.funnel_client.websocket.register_handlers_STAR_(ws,handler_map);
}));
});
lambdaisland.funnel_client.websocket.open_BANG__STAR_ = (function lambdaisland$funnel_client$websocket$open_BANG__STAR_(ws,url){
return ws.open(url);
});
lambdaisland.funnel_client.websocket.open_BANG_ = (function lambdaisland$funnel_client$websocket$open_BANG_(ws,url){
return lambdaisland.funnel_client.websocket.ensure_websocket((function (){
return lambdaisland.funnel_client.websocket.open_BANG__STAR_(ws,url);
}));
});
lambdaisland.funnel_client.websocket.connect_BANG_ = (function lambdaisland$funnel_client$websocket$connect_BANG_(var_args){
var G__28987 = arguments.length;
switch (G__28987) {
case 2:
return lambdaisland.funnel_client.websocket.connect_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lambdaisland.funnel_client.websocket.connect_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.funnel_client.websocket.connect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (url,handler_map){
return lambdaisland.funnel_client.websocket.connect_BANG_.cljs$core$IFn$_invoke$arity$3(url,handler_map,true);
}));

(lambdaisland.funnel_client.websocket.connect_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (url,handler_map,reconnect_QMARK_){
return lambdaisland.funnel_client.websocket.ensure_websocket((function (){
var ws = (new goog.net.WebSocket(reconnect_QMARK_));
lambdaisland.funnel_client.websocket.register_handlers_STAR_(ws,handler_map);

lambdaisland.funnel_client.websocket.open_BANG__STAR_(ws,url);

return ws;
}));
}));

(lambdaisland.funnel_client.websocket.connect_BANG_.cljs$lang$maxFixedArity = 3);

lambdaisland.funnel_client.websocket.send_BANG_ = (function lambdaisland$funnel_client$websocket$send_BANG_(ws,msg){
return lambdaisland.funnel_client.websocket.ensure_websocket((function (){
return ws.send(msg);
}));
});
lambdaisland.funnel_client.websocket.open_QMARK_ = (function lambdaisland$funnel_client$websocket$open_QMARK_(ws){
return lambdaisland.funnel_client.websocket.ensure_websocket((function (){
return ws.isOpen();
}));
});
lambdaisland.funnel_client.websocket.close_BANG_ = (function lambdaisland$funnel_client$websocket$close_BANG_(ws){
return ws.close();
});
lambdaisland.funnel_client.websocket.message_data = (function lambdaisland$funnel_client$websocket$message_data(event){
return lambdaisland.funnel_client.websocket.goog$module$goog$object.get(event,"message");
});

//# sourceMappingURL=lambdaisland.funnel_client.websocket.js.map
