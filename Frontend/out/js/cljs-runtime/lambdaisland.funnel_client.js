goog.provide('lambdaisland.funnel_client');
goog.scope(function(){
  lambdaisland.funnel_client.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$platform$platform=shadow.js.require("module$node_modules$platform$platform", {});

/**
 * @interface
 */
lambdaisland.funnel_client.Socket = function(){};

var lambdaisland$funnel_client$Socket$send$dyn_29152 = (function (socket,message){
var x__4550__auto__ = (((socket == null))?null:socket);
var m__4551__auto__ = (lambdaisland.funnel_client.send[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(socket,message) : m__4551__auto__.call(null,socket,message));
} else {
var m__4549__auto__ = (lambdaisland.funnel_client.send["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(socket,message) : m__4549__auto__.call(null,socket,message));
} else {
throw cljs.core.missing_protocol("Socket.send",socket);
}
}
});
lambdaisland.funnel_client.send = (function lambdaisland$funnel_client$send(socket,message){
if((((!((socket == null)))) && ((!((socket.lambdaisland$funnel_client$Socket$send$arity$2 == null)))))){
return socket.lambdaisland$funnel_client$Socket$send$arity$2(socket,message);
} else {
return lambdaisland$funnel_client$Socket$send$dyn_29152(socket,message);
}
});

/**
 * @define {string}
 */
lambdaisland.funnel_client.FUNNEL_URI = goog.define("lambdaisland.funnel_client.FUNNEL_URI","");
lambdaisland.funnel_client.platform_type = cljs.core.re_find(/\w+/,clojure.string.lower_case(module$node_modules$platform$platform.name));
lambdaisland.funnel_client.client_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.funnel_client.platform_type),"-",lambdaisland.funnel_client.random_id.rand_id()].join('');
lambdaisland.funnel_client.whoami = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),lambdaisland.funnel_client.client_id,new cljs.core.Keyword(null,"has-dom?","has-dom?",-2097461394),(typeof document !== 'undefined'),new cljs.core.Keyword(null,"platform-type","platform-type",2070613762),lambdaisland.funnel_client.platform_type,new cljs.core.Keyword(null,"platform","platform",-1086422114),module$node_modules$platform$platform.description,new cljs.core.Keyword(null,"working-directory","working-directory",-145423687),"/Users/sb/Desktop/test/sourcetree-projects/flexiana/Frontend"], null));
lambdaisland.funnel_client.transit_read_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
lambdaisland.funnel_client.transit_write_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
lambdaisland.funnel_client.funnel_uri = (function lambdaisland$funnel_client$funnel_uri(){
if(cljs.core.empty_QMARK_(lambdaisland.funnel_client.FUNNEL_URI)){
var protocol = (((typeof location !== 'undefined'))?location.protocol:"http");
var hostname = (((typeof location !== 'undefined'))?location.hostname:"localhost");
var https_QMARK_ = clojure.string.starts_with_QMARK_(protocol,"https");
return [((https_QMARK_)?"wss":"ws"),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hostname),":",((https_QMARK_)?"44221":"44220")].join('');
} else {
return lambdaisland.funnel_client.FUNNEL_URI;
}
});
lambdaisland.funnel_client.noop = (function lambdaisland$funnel_client$noop(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29162 = arguments.length;
var i__4865__auto___29163 = (0);
while(true){
if((i__4865__auto___29163 < len__4864__auto___29162)){
args__4870__auto__.push((arguments[i__4865__auto___29163]));

var G__29164 = (i__4865__auto___29163 + (1));
i__4865__auto___29163 = G__29164;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return lambdaisland.funnel_client.noop.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(lambdaisland.funnel_client.noop.cljs$core$IFn$_invoke$arity$variadic = (function (_){
return null;
}));

(lambdaisland.funnel_client.noop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(lambdaisland.funnel_client.noop.cljs$lang$applyTo = (function (seq29111){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29111));
}));

lambdaisland.funnel_client.atom_QMARK_ = (function lambdaisland$funnel_client$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IAtom$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
}
});
lambdaisland.funnel_client.connect = (function lambdaisland$funnel_client$connect(p__29124){
var map__29125 = p__29124;
var map__29125__$1 = cljs.core.__destructure_map(map__29125);
var opts = map__29125__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29125__$1,new cljs.core.Keyword(null,"uri","uri",-774711847),lambdaisland.funnel_client.funnel_uri());
var on_open = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29125__$1,new cljs.core.Keyword(null,"on-open","on-open",-1391088163),lambdaisland.funnel_client.noop);
var on_message = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29125__$1,new cljs.core.Keyword(null,"on-message","on-message",1662987808),lambdaisland.funnel_client.noop);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29125__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),lambdaisland.funnel_client.noop);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29125__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394),lambdaisland.funnel_client.noop);
var transit_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29125__$1,new cljs.core.Keyword(null,"transit-reader","transit-reader",1939512556),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.deref(lambdaisland.funnel_client.transit_read_handlers)], null)));
var transit_writer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29125__$1,new cljs.core.Keyword(null,"transit-writer","transit-writer",-765104984),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.deref(lambdaisland.funnel_client.transit_write_handlers)], null)));
var whoami = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29125__$1,new cljs.core.Keyword(null,"whoami","whoami",-650118981),lambdaisland.funnel_client.whoami);
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("lambdaisland.funnel-client",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"connecting","connecting",-1347943866),uri,new cljs.core.Keyword(null,"line","line",212345235),54], null)),null);

var ws = lambdaisland.funnel_client.websocket.ensure_websocket((function (){
return (new goog.net.WebSocket(true));
}));
var send_BANG_ = (function (p1__29122_SHARP_){
return lambdaisland.funnel_client.websocket.send_BANG_(ws,cognitect.transit.write(transit_writer,p1__29122_SHARP_));
});
if(cljs.core.truth_(ws)){
} else {
throw (new Error("Assert failed: ws"));
}

lambdaisland.funnel_client.websocket.register_handlers(ws,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"open","open",-1763596448),(function (e){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("lambdaisland.funnel-client",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("websocket","open","websocket/open",-2062333031),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,(function (p1__29123_SHARP_){
return lambdaisland.funnel_client.goog$module$goog$object.get(e,p1__29123_SHARP_);
}))),Object.keys(e)),new cljs.core.Keyword(null,"line","line",212345235),61], null)),null);

send_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("lambdaisland.funnel-client","connected","lambdaisland.funnel-client/connected",53037467),new cljs.core.Keyword("funnel","whoami","funnel/whoami",746365189),((cljs.core.map_QMARK_(whoami))?whoami:cljs.core.deref(whoami))], null));

if(lambdaisland.funnel_client.atom_QMARK_(whoami)){
cljs.core.add_watch(whoami,new cljs.core.Keyword("lambdaisland.funnel-client","resend-whoami","lambdaisland.funnel-client/resend-whoami",914805880),(function (_,___$1,___$2,new_whoami){
return send_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("lambdaisland.funnel-client","whoami-watch","lambdaisland.funnel-client/whoami-watch",78477786),new cljs.core.Keyword("funnel","whoami","funnel/whoami",746365189),new_whoami], null));
}));
} else {
}

return (on_open.cljs$core$IFn$_invoke$arity$2 ? on_open.cljs$core$IFn$_invoke$arity$2(ws,e) : on_open.call(null,ws,e));
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (e){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("lambdaisland.funnel-client",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("websocket","error","websocket/error",-948632993),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"onerror","onerror",781725030),new cljs.core.Keyword(null,"event","event",301435442),e], null),new cljs.core.Keyword(null,"line","line",212345235),74], null)),null);

return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(ws,e) : on_error.call(null,ws,e));
}),new cljs.core.Keyword(null,"message","message",-406056002),(function (e){
var msg = cognitect.transit.read(transit_reader,lambdaisland.funnel_client.websocket.message_data(e));
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("lambdaisland.funnel-client",new cljs.core.Keyword(null,"finest","finest",-1359568890),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("websocket","message","websocket/message",1570584757),msg,new cljs.core.Keyword(null,"line","line",212345235),80], null)),null);

return (on_message.cljs$core$IFn$_invoke$arity$2 ? on_message.cljs$core$IFn$_invoke$arity$2(ws,msg) : on_message.call(null,ws,msg));
}),new cljs.core.Keyword(null,"close","close",1835149582),(function (e){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("lambdaisland.funnel-client",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("websocket","close","websocket/close",1607681237),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"onclose","onclose",-1780819312),new cljs.core.Keyword(null,"event","event",301435442),e], null),new cljs.core.Keyword(null,"line","line",212345235),85], null)),null);

return (on_close.cljs$core$IFn$_invoke$arity$2 ? on_close.cljs$core$IFn$_invoke$arity$2(ws,e) : on_close.call(null,ws,e));
})], null));

var x29140_29186 = ws;
(x29140_29186.lambdaisland$funnel_client$Socket$ = cljs.core.PROTOCOL_SENTINEL);

(x29140_29186.lambdaisland$funnel_client$Socket$send$arity$2 = (function (socket,message){
var socket__$1 = this;
if(cljs.core.truth_(lambdaisland.funnel_client.websocket.open_QMARK_(socket__$1))){
} else {
throw (new Error("Assert failed: (websocket/open? socket)"));
}

lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("lambdaisland.funnel-client",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("websocket","send","websocket/send",-946873729),message,new cljs.core.Keyword(null,"line","line",212345235),91], null)),null);

return send_BANG_(message);
}));

(x29140_29186.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x29140_29186.cljs$core$IMeta$_meta$arity$1 = (function (_){
var ___$1 = this;
return opts;
}));


lambdaisland.funnel_client.websocket.open_BANG_(ws,uri);

return ws;
});
lambdaisland.funnel_client.disconnect_BANG_ = (function lambdaisland$funnel_client$disconnect_BANG_(socket){
if(cljs.core.truth_(socket)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("lambdaisland.funnel-client",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disconnecting","disconnecting",-1808914225),socket,new cljs.core.Keyword(null,"line","line",212345235),101], null)),null);

return lambdaisland.funnel_client.websocket.close_BANG_(socket);
} else {
return null;
}
});

//# sourceMappingURL=lambdaisland.funnel_client.js.map
