goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32414 = arguments.length;
switch (G__32414) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32418 = (function (f,blockable,meta32419){
this.f = f;
this.blockable = blockable;
this.meta32419 = meta32419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32420,meta32419__$1){
var self__ = this;
var _32420__$1 = this;
return (new cljs.core.async.t_cljs$core$async32418(self__.f,self__.blockable,meta32419__$1));
}));

(cljs.core.async.t_cljs$core$async32418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32420){
var self__ = this;
var _32420__$1 = this;
return self__.meta32419;
}));

(cljs.core.async.t_cljs$core$async32418.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32418.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32418.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32418.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32419","meta32419",-1868550293,null)], null);
}));

(cljs.core.async.t_cljs$core$async32418.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32418");

(cljs.core.async.t_cljs$core$async32418.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32418");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32418.
 */
cljs.core.async.__GT_t_cljs$core$async32418 = (function cljs$core$async$__GT_t_cljs$core$async32418(f__$1,blockable__$1,meta32419){
return (new cljs.core.async.t_cljs$core$async32418(f__$1,blockable__$1,meta32419));
});

}

return (new cljs.core.async.t_cljs$core$async32418(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32429 = arguments.length;
switch (G__32429) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32444 = arguments.length;
switch (G__32444) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32464 = arguments.length;
switch (G__32464) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34565 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34565) : fn1.call(null,val_34565));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34565) : fn1.call(null,val_34565));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32476 = arguments.length;
switch (G__32476) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___34567 = n;
var x_34568 = (0);
while(true){
if((x_34568 < n__4741__auto___34567)){
(a[x_34568] = x_34568);

var G__34569 = (x_34568 + (1));
x_34568 = G__34569;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32498 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32498 = (function (flag,meta32499){
this.flag = flag;
this.meta32499 = meta32499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32500,meta32499__$1){
var self__ = this;
var _32500__$1 = this;
return (new cljs.core.async.t_cljs$core$async32498(self__.flag,meta32499__$1));
}));

(cljs.core.async.t_cljs$core$async32498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32500){
var self__ = this;
var _32500__$1 = this;
return self__.meta32499;
}));

(cljs.core.async.t_cljs$core$async32498.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32498.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32499","meta32499",-326100837,null)], null);
}));

(cljs.core.async.t_cljs$core$async32498.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32498");

(cljs.core.async.t_cljs$core$async32498.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32498");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32498.
 */
cljs.core.async.__GT_t_cljs$core$async32498 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32498(flag__$1,meta32499){
return (new cljs.core.async.t_cljs$core$async32498(flag__$1,meta32499));
});

}

return (new cljs.core.async.t_cljs$core$async32498(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32508 = (function (flag,cb,meta32509){
this.flag = flag;
this.cb = cb;
this.meta32509 = meta32509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32510,meta32509__$1){
var self__ = this;
var _32510__$1 = this;
return (new cljs.core.async.t_cljs$core$async32508(self__.flag,self__.cb,meta32509__$1));
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32510){
var self__ = this;
var _32510__$1 = this;
return self__.meta32509;
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32509","meta32509",-973935690,null)], null);
}));

(cljs.core.async.t_cljs$core$async32508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32508");

(cljs.core.async.t_cljs$core$async32508.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32508.
 */
cljs.core.async.__GT_t_cljs$core$async32508 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32508(flag__$1,cb__$1,meta32509){
return (new cljs.core.async.t_cljs$core$async32508(flag__$1,cb__$1,meta32509));
});

}

return (new cljs.core.async.t_cljs$core$async32508(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32517_SHARP_){
var G__32522 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32517_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32522) : fret.call(null,G__32522));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32518_SHARP_){
var G__32524 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32518_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32524) : fret.call(null,G__32524));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34575 = (i + (1));
i = G__34575;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34576 = arguments.length;
var i__4865__auto___34577 = (0);
while(true){
if((i__4865__auto___34577 < len__4864__auto___34576)){
args__4870__auto__.push((arguments[i__4865__auto___34577]));

var G__34579 = (i__4865__auto___34577 + (1));
i__4865__auto___34577 = G__34579;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32527){
var map__32528 = p__32527;
var map__32528__$1 = cljs.core.__destructure_map(map__32528);
var opts = map__32528__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32525){
var G__32526 = cljs.core.first(seq32525);
var seq32525__$1 = cljs.core.next(seq32525);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32526,seq32525__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32530 = arguments.length;
switch (G__32530) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32317__auto___34586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_32554){
var state_val_32555 = (state_32554[(1)]);
if((state_val_32555 === (7))){
var inst_32550 = (state_32554[(2)]);
var state_32554__$1 = state_32554;
var statearr_32556_34589 = state_32554__$1;
(statearr_32556_34589[(2)] = inst_32550);

(statearr_32556_34589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (1))){
var state_32554__$1 = state_32554;
var statearr_32557_34590 = state_32554__$1;
(statearr_32557_34590[(2)] = null);

(statearr_32557_34590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (4))){
var inst_32533 = (state_32554[(7)]);
var inst_32533__$1 = (state_32554[(2)]);
var inst_32534 = (inst_32533__$1 == null);
var state_32554__$1 = (function (){var statearr_32558 = state_32554;
(statearr_32558[(7)] = inst_32533__$1);

return statearr_32558;
})();
if(cljs.core.truth_(inst_32534)){
var statearr_32559_34592 = state_32554__$1;
(statearr_32559_34592[(1)] = (5));

} else {
var statearr_32560_34594 = state_32554__$1;
(statearr_32560_34594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (13))){
var state_32554__$1 = state_32554;
var statearr_32561_34595 = state_32554__$1;
(statearr_32561_34595[(2)] = null);

(statearr_32561_34595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (6))){
var inst_32533 = (state_32554[(7)]);
var state_32554__$1 = state_32554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32554__$1,(11),to,inst_32533);
} else {
if((state_val_32555 === (3))){
var inst_32552 = (state_32554[(2)]);
var state_32554__$1 = state_32554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32554__$1,inst_32552);
} else {
if((state_val_32555 === (12))){
var state_32554__$1 = state_32554;
var statearr_32562_34596 = state_32554__$1;
(statearr_32562_34596[(2)] = null);

(statearr_32562_34596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (2))){
var state_32554__$1 = state_32554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32554__$1,(4),from);
} else {
if((state_val_32555 === (11))){
var inst_32543 = (state_32554[(2)]);
var state_32554__$1 = state_32554;
if(cljs.core.truth_(inst_32543)){
var statearr_32563_34597 = state_32554__$1;
(statearr_32563_34597[(1)] = (12));

} else {
var statearr_32564_34598 = state_32554__$1;
(statearr_32564_34598[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (9))){
var state_32554__$1 = state_32554;
var statearr_32565_34600 = state_32554__$1;
(statearr_32565_34600[(2)] = null);

(statearr_32565_34600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (5))){
var state_32554__$1 = state_32554;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32566_34602 = state_32554__$1;
(statearr_32566_34602[(1)] = (8));

} else {
var statearr_32567_34603 = state_32554__$1;
(statearr_32567_34603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (14))){
var inst_32548 = (state_32554[(2)]);
var state_32554__$1 = state_32554;
var statearr_32568_34604 = state_32554__$1;
(statearr_32568_34604[(2)] = inst_32548);

(statearr_32568_34604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (10))){
var inst_32540 = (state_32554[(2)]);
var state_32554__$1 = state_32554;
var statearr_32569_34605 = state_32554__$1;
(statearr_32569_34605[(2)] = inst_32540);

(statearr_32569_34605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (8))){
var inst_32537 = cljs.core.async.close_BANG_(to);
var state_32554__$1 = state_32554;
var statearr_32570_34606 = state_32554__$1;
(statearr_32570_34606[(2)] = inst_32537);

(statearr_32570_34606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32205__auto__ = null;
var cljs$core$async$state_machine__32205__auto____0 = (function (){
var statearr_32571 = [null,null,null,null,null,null,null,null];
(statearr_32571[(0)] = cljs$core$async$state_machine__32205__auto__);

(statearr_32571[(1)] = (1));

return statearr_32571;
});
var cljs$core$async$state_machine__32205__auto____1 = (function (state_32554){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_32554);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e32572){var ex__32208__auto__ = e32572;
var statearr_32573_34607 = state_32554;
(statearr_32573_34607[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_32554[(4)]))){
var statearr_32574_34608 = state_32554;
(statearr_32574_34608[(1)] = cljs.core.first((state_32554[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34610 = state_32554;
state_32554 = G__34610;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$state_machine__32205__auto__ = function(state_32554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32205__auto____1.call(this,state_32554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32205__auto____0;
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32205__auto____1;
return cljs$core$async$state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_32575 = f__32318__auto__();
(statearr_32575[(6)] = c__32317__auto___34586);

return statearr_32575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32576){
var vec__32577 = p__32576;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32577,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32577,(1),null);
var job = vec__32577;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32317__auto___34615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_32584){
var state_val_32585 = (state_32584[(1)]);
if((state_val_32585 === (1))){
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32584__$1,(2),res,v);
} else {
if((state_val_32585 === (2))){
var inst_32581 = (state_32584[(2)]);
var inst_32582 = cljs.core.async.close_BANG_(res);
var state_32584__$1 = (function (){var statearr_32586 = state_32584;
(statearr_32586[(7)] = inst_32581);

return statearr_32586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32584__$1,inst_32582);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____0 = (function (){
var statearr_32587 = [null,null,null,null,null,null,null,null];
(statearr_32587[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__);

(statearr_32587[(1)] = (1));

return statearr_32587;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____1 = (function (state_32584){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_32584);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e32588){var ex__32208__auto__ = e32588;
var statearr_32589_34617 = state_32584;
(statearr_32589_34617[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_32584[(4)]))){
var statearr_32590_34621 = state_32584;
(statearr_32590_34621[(1)] = cljs.core.first((state_32584[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34627 = state_32584;
state_32584 = G__34627;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__ = function(state_32584){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____1.call(this,state_32584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_32591 = f__32318__auto__();
(statearr_32591[(6)] = c__32317__auto___34615);

return statearr_32591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32592){
var vec__32593 = p__32592;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32593,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32593,(1),null);
var job = vec__32593;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___34634 = n;
var __34635 = (0);
while(true){
if((__34635 < n__4741__auto___34634)){
var G__32596_34636 = type;
var G__32596_34637__$1 = (((G__32596_34636 instanceof cljs.core.Keyword))?G__32596_34636.fqn:null);
switch (G__32596_34637__$1) {
case "compute":
var c__32317__auto___34639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34635,c__32317__auto___34639,G__32596_34636,G__32596_34637__$1,n__4741__auto___34634,jobs,results,process,async){
return (function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = ((function (__34635,c__32317__auto___34639,G__32596_34636,G__32596_34637__$1,n__4741__auto___34634,jobs,results,process,async){
return (function (state_32609){
var state_val_32610 = (state_32609[(1)]);
if((state_val_32610 === (1))){
var state_32609__$1 = state_32609;
var statearr_32611_34640 = state_32609__$1;
(statearr_32611_34640[(2)] = null);

(statearr_32611_34640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (2))){
var state_32609__$1 = state_32609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32609__$1,(4),jobs);
} else {
if((state_val_32610 === (3))){
var inst_32607 = (state_32609[(2)]);
var state_32609__$1 = state_32609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32609__$1,inst_32607);
} else {
if((state_val_32610 === (4))){
var inst_32599 = (state_32609[(2)]);
var inst_32600 = process(inst_32599);
var state_32609__$1 = state_32609;
if(cljs.core.truth_(inst_32600)){
var statearr_32612_34649 = state_32609__$1;
(statearr_32612_34649[(1)] = (5));

} else {
var statearr_32615_34650 = state_32609__$1;
(statearr_32615_34650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (5))){
var state_32609__$1 = state_32609;
var statearr_32617_34654 = state_32609__$1;
(statearr_32617_34654[(2)] = null);

(statearr_32617_34654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (6))){
var state_32609__$1 = state_32609;
var statearr_32618_34655 = state_32609__$1;
(statearr_32618_34655[(2)] = null);

(statearr_32618_34655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (7))){
var inst_32605 = (state_32609[(2)]);
var state_32609__$1 = state_32609;
var statearr_32619_34656 = state_32609__$1;
(statearr_32619_34656[(2)] = inst_32605);

(statearr_32619_34656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34635,c__32317__auto___34639,G__32596_34636,G__32596_34637__$1,n__4741__auto___34634,jobs,results,process,async))
;
return ((function (__34635,switch__32204__auto__,c__32317__auto___34639,G__32596_34636,G__32596_34637__$1,n__4741__auto___34634,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____0 = (function (){
var statearr_32621 = [null,null,null,null,null,null,null];
(statearr_32621[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__);

(statearr_32621[(1)] = (1));

return statearr_32621;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____1 = (function (state_32609){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_32609);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e32623){var ex__32208__auto__ = e32623;
var statearr_32624_34660 = state_32609;
(statearr_32624_34660[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_32609[(4)]))){
var statearr_32625_34661 = state_32609;
(statearr_32625_34661[(1)] = cljs.core.first((state_32609[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34666 = state_32609;
state_32609 = G__34666;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__ = function(state_32609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____1.call(this,state_32609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__;
})()
;})(__34635,switch__32204__auto__,c__32317__auto___34639,G__32596_34636,G__32596_34637__$1,n__4741__auto___34634,jobs,results,process,async))
})();
var state__32319__auto__ = (function (){var statearr_32627 = f__32318__auto__();
(statearr_32627[(6)] = c__32317__auto___34639);

return statearr_32627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
});})(__34635,c__32317__auto___34639,G__32596_34636,G__32596_34637__$1,n__4741__auto___34634,jobs,results,process,async))
);


break;
case "async":
var c__32317__auto___34674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34635,c__32317__auto___34674,G__32596_34636,G__32596_34637__$1,n__4741__auto___34634,jobs,results,process,async){
return (function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = ((function (__34635,c__32317__auto___34674,G__32596_34636,G__32596_34637__$1,n__4741__auto___34634,jobs,results,process,async){
return (function (state_32641){
var state_val_32642 = (state_32641[(1)]);
if((state_val_32642 === (1))){
var state_32641__$1 = state_32641;
var statearr_32644_34678 = state_32641__$1;
(statearr_32644_34678[(2)] = null);

(statearr_32644_34678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32642 === (2))){
var state_32641__$1 = state_32641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32641__$1,(4),jobs);
} else {
if((state_val_32642 === (3))){
var inst_32639 = (state_32641[(2)]);
var state_32641__$1 = state_32641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32641__$1,inst_32639);
} else {
if((state_val_32642 === (4))){
var inst_32631 = (state_32641[(2)]);
var inst_32632 = async(inst_32631);
var state_32641__$1 = state_32641;
if(cljs.core.truth_(inst_32632)){
var statearr_32646_34683 = state_32641__$1;
(statearr_32646_34683[(1)] = (5));

} else {
var statearr_32648_34684 = state_32641__$1;
(statearr_32648_34684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32642 === (5))){
var state_32641__$1 = state_32641;
var statearr_32649_34685 = state_32641__$1;
(statearr_32649_34685[(2)] = null);

(statearr_32649_34685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32642 === (6))){
var state_32641__$1 = state_32641;
var statearr_32650_34686 = state_32641__$1;
(statearr_32650_34686[(2)] = null);

(statearr_32650_34686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32642 === (7))){
var inst_32637 = (state_32641[(2)]);
var state_32641__$1 = state_32641;
var statearr_32652_34687 = state_32641__$1;
(statearr_32652_34687[(2)] = inst_32637);

(statearr_32652_34687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34635,c__32317__auto___34674,G__32596_34636,G__32596_34637__$1,n__4741__auto___34634,jobs,results,process,async))
;
return ((function (__34635,switch__32204__auto__,c__32317__auto___34674,G__32596_34636,G__32596_34637__$1,n__4741__auto___34634,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____0 = (function (){
var statearr_32653 = [null,null,null,null,null,null,null];
(statearr_32653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__);

(statearr_32653[(1)] = (1));

return statearr_32653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____1 = (function (state_32641){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_32641);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e32654){var ex__32208__auto__ = e32654;
var statearr_32655_34690 = state_32641;
(statearr_32655_34690[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_32641[(4)]))){
var statearr_32656_34691 = state_32641;
(statearr_32656_34691[(1)] = cljs.core.first((state_32641[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34692 = state_32641;
state_32641 = G__34692;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__ = function(state_32641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____1.call(this,state_32641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__;
})()
;})(__34635,switch__32204__auto__,c__32317__auto___34674,G__32596_34636,G__32596_34637__$1,n__4741__auto___34634,jobs,results,process,async))
})();
var state__32319__auto__ = (function (){var statearr_32657 = f__32318__auto__();
(statearr_32657[(6)] = c__32317__auto___34674);

return statearr_32657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
});})(__34635,c__32317__auto___34674,G__32596_34636,G__32596_34637__$1,n__4741__auto___34634,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32596_34637__$1)].join('')));

}

var G__34693 = (__34635 + (1));
__34635 = G__34693;
continue;
} else {
}
break;
}

var c__32317__auto___34694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_32679){
var state_val_32680 = (state_32679[(1)]);
if((state_val_32680 === (7))){
var inst_32675 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32681_34695 = state_32679__$1;
(statearr_32681_34695[(2)] = inst_32675);

(statearr_32681_34695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (1))){
var state_32679__$1 = state_32679;
var statearr_32682_34696 = state_32679__$1;
(statearr_32682_34696[(2)] = null);

(statearr_32682_34696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (4))){
var inst_32660 = (state_32679[(7)]);
var inst_32660__$1 = (state_32679[(2)]);
var inst_32661 = (inst_32660__$1 == null);
var state_32679__$1 = (function (){var statearr_32683 = state_32679;
(statearr_32683[(7)] = inst_32660__$1);

return statearr_32683;
})();
if(cljs.core.truth_(inst_32661)){
var statearr_32684_34697 = state_32679__$1;
(statearr_32684_34697[(1)] = (5));

} else {
var statearr_32685_34698 = state_32679__$1;
(statearr_32685_34698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (6))){
var inst_32665 = (state_32679[(8)]);
var inst_32660 = (state_32679[(7)]);
var inst_32665__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32666 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32667 = [inst_32660,inst_32665__$1];
var inst_32668 = (new cljs.core.PersistentVector(null,2,(5),inst_32666,inst_32667,null));
var state_32679__$1 = (function (){var statearr_32686 = state_32679;
(statearr_32686[(8)] = inst_32665__$1);

return statearr_32686;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32679__$1,(8),jobs,inst_32668);
} else {
if((state_val_32680 === (3))){
var inst_32677 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32679__$1,inst_32677);
} else {
if((state_val_32680 === (2))){
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32679__$1,(4),from);
} else {
if((state_val_32680 === (9))){
var inst_32672 = (state_32679[(2)]);
var state_32679__$1 = (function (){var statearr_32687 = state_32679;
(statearr_32687[(9)] = inst_32672);

return statearr_32687;
})();
var statearr_32688_34701 = state_32679__$1;
(statearr_32688_34701[(2)] = null);

(statearr_32688_34701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (5))){
var inst_32663 = cljs.core.async.close_BANG_(jobs);
var state_32679__$1 = state_32679;
var statearr_32689_34702 = state_32679__$1;
(statearr_32689_34702[(2)] = inst_32663);

(statearr_32689_34702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (8))){
var inst_32665 = (state_32679[(8)]);
var inst_32670 = (state_32679[(2)]);
var state_32679__$1 = (function (){var statearr_32690 = state_32679;
(statearr_32690[(10)] = inst_32670);

return statearr_32690;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32679__$1,(9),results,inst_32665);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____0 = (function (){
var statearr_32691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32691[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__);

(statearr_32691[(1)] = (1));

return statearr_32691;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____1 = (function (state_32679){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_32679);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e32692){var ex__32208__auto__ = e32692;
var statearr_32693_34703 = state_32679;
(statearr_32693_34703[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_32679[(4)]))){
var statearr_32694_34704 = state_32679;
(statearr_32694_34704[(1)] = cljs.core.first((state_32679[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34705 = state_32679;
state_32679 = G__34705;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__ = function(state_32679){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____1.call(this,state_32679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_32695 = f__32318__auto__();
(statearr_32695[(6)] = c__32317__auto___34694);

return statearr_32695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));


var c__32317__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_32733){
var state_val_32734 = (state_32733[(1)]);
if((state_val_32734 === (7))){
var inst_32729 = (state_32733[(2)]);
var state_32733__$1 = state_32733;
var statearr_32735_34706 = state_32733__$1;
(statearr_32735_34706[(2)] = inst_32729);

(statearr_32735_34706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (20))){
var state_32733__$1 = state_32733;
var statearr_32737_34707 = state_32733__$1;
(statearr_32737_34707[(2)] = null);

(statearr_32737_34707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (1))){
var state_32733__$1 = state_32733;
var statearr_32738_34708 = state_32733__$1;
(statearr_32738_34708[(2)] = null);

(statearr_32738_34708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (4))){
var inst_32698 = (state_32733[(7)]);
var inst_32698__$1 = (state_32733[(2)]);
var inst_32699 = (inst_32698__$1 == null);
var state_32733__$1 = (function (){var statearr_32739 = state_32733;
(statearr_32739[(7)] = inst_32698__$1);

return statearr_32739;
})();
if(cljs.core.truth_(inst_32699)){
var statearr_32740_34709 = state_32733__$1;
(statearr_32740_34709[(1)] = (5));

} else {
var statearr_32741_34710 = state_32733__$1;
(statearr_32741_34710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (15))){
var inst_32711 = (state_32733[(8)]);
var state_32733__$1 = state_32733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32733__$1,(18),to,inst_32711);
} else {
if((state_val_32734 === (21))){
var inst_32724 = (state_32733[(2)]);
var state_32733__$1 = state_32733;
var statearr_32742_34711 = state_32733__$1;
(statearr_32742_34711[(2)] = inst_32724);

(statearr_32742_34711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (13))){
var inst_32726 = (state_32733[(2)]);
var state_32733__$1 = (function (){var statearr_32743 = state_32733;
(statearr_32743[(9)] = inst_32726);

return statearr_32743;
})();
var statearr_32744_34712 = state_32733__$1;
(statearr_32744_34712[(2)] = null);

(statearr_32744_34712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (6))){
var inst_32698 = (state_32733[(7)]);
var state_32733__$1 = state_32733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32733__$1,(11),inst_32698);
} else {
if((state_val_32734 === (17))){
var inst_32719 = (state_32733[(2)]);
var state_32733__$1 = state_32733;
if(cljs.core.truth_(inst_32719)){
var statearr_32745_34717 = state_32733__$1;
(statearr_32745_34717[(1)] = (19));

} else {
var statearr_32746_34718 = state_32733__$1;
(statearr_32746_34718[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (3))){
var inst_32731 = (state_32733[(2)]);
var state_32733__$1 = state_32733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32733__$1,inst_32731);
} else {
if((state_val_32734 === (12))){
var inst_32708 = (state_32733[(10)]);
var state_32733__$1 = state_32733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32733__$1,(14),inst_32708);
} else {
if((state_val_32734 === (2))){
var state_32733__$1 = state_32733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32733__$1,(4),results);
} else {
if((state_val_32734 === (19))){
var state_32733__$1 = state_32733;
var statearr_32747_34722 = state_32733__$1;
(statearr_32747_34722[(2)] = null);

(statearr_32747_34722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (11))){
var inst_32708 = (state_32733[(2)]);
var state_32733__$1 = (function (){var statearr_32748 = state_32733;
(statearr_32748[(10)] = inst_32708);

return statearr_32748;
})();
var statearr_32749_34723 = state_32733__$1;
(statearr_32749_34723[(2)] = null);

(statearr_32749_34723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (9))){
var state_32733__$1 = state_32733;
var statearr_32750_34724 = state_32733__$1;
(statearr_32750_34724[(2)] = null);

(statearr_32750_34724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (5))){
var state_32733__$1 = state_32733;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32751_34725 = state_32733__$1;
(statearr_32751_34725[(1)] = (8));

} else {
var statearr_32752_34726 = state_32733__$1;
(statearr_32752_34726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (14))){
var inst_32713 = (state_32733[(11)]);
var inst_32711 = (state_32733[(8)]);
var inst_32711__$1 = (state_32733[(2)]);
var inst_32712 = (inst_32711__$1 == null);
var inst_32713__$1 = cljs.core.not(inst_32712);
var state_32733__$1 = (function (){var statearr_32755 = state_32733;
(statearr_32755[(11)] = inst_32713__$1);

(statearr_32755[(8)] = inst_32711__$1);

return statearr_32755;
})();
if(inst_32713__$1){
var statearr_32756_34727 = state_32733__$1;
(statearr_32756_34727[(1)] = (15));

} else {
var statearr_32757_34731 = state_32733__$1;
(statearr_32757_34731[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (16))){
var inst_32713 = (state_32733[(11)]);
var state_32733__$1 = state_32733;
var statearr_32759_34732 = state_32733__$1;
(statearr_32759_34732[(2)] = inst_32713);

(statearr_32759_34732[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (10))){
var inst_32705 = (state_32733[(2)]);
var state_32733__$1 = state_32733;
var statearr_32760_34733 = state_32733__$1;
(statearr_32760_34733[(2)] = inst_32705);

(statearr_32760_34733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (18))){
var inst_32716 = (state_32733[(2)]);
var state_32733__$1 = state_32733;
var statearr_32761_34734 = state_32733__$1;
(statearr_32761_34734[(2)] = inst_32716);

(statearr_32761_34734[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (8))){
var inst_32702 = cljs.core.async.close_BANG_(to);
var state_32733__$1 = state_32733;
var statearr_32762_34738 = state_32733__$1;
(statearr_32762_34738[(2)] = inst_32702);

(statearr_32762_34738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____0 = (function (){
var statearr_32765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32765[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__);

(statearr_32765[(1)] = (1));

return statearr_32765;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____1 = (function (state_32733){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_32733);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e32766){var ex__32208__auto__ = e32766;
var statearr_32767_34739 = state_32733;
(statearr_32767_34739[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_32733[(4)]))){
var statearr_32768_34740 = state_32733;
(statearr_32768_34740[(1)] = cljs.core.first((state_32733[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34744 = state_32733;
state_32733 = G__34744;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__ = function(state_32733){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____1.call(this,state_32733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32205__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_32769 = f__32318__auto__();
(statearr_32769[(6)] = c__32317__auto__);

return statearr_32769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));

return c__32317__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32773 = arguments.length;
switch (G__32773) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32789 = arguments.length;
switch (G__32789) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32791 = arguments.length;
switch (G__32791) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32317__auto___34761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_32822){
var state_val_32823 = (state_32822[(1)]);
if((state_val_32823 === (7))){
var inst_32817 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32825_34762 = state_32822__$1;
(statearr_32825_34762[(2)] = inst_32817);

(statearr_32825_34762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (1))){
var state_32822__$1 = state_32822;
var statearr_32826_34776 = state_32822__$1;
(statearr_32826_34776[(2)] = null);

(statearr_32826_34776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (4))){
var inst_32794 = (state_32822[(7)]);
var inst_32794__$1 = (state_32822[(2)]);
var inst_32795 = (inst_32794__$1 == null);
var state_32822__$1 = (function (){var statearr_32828 = state_32822;
(statearr_32828[(7)] = inst_32794__$1);

return statearr_32828;
})();
if(cljs.core.truth_(inst_32795)){
var statearr_32830_34777 = state_32822__$1;
(statearr_32830_34777[(1)] = (5));

} else {
var statearr_32831_34778 = state_32822__$1;
(statearr_32831_34778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (13))){
var state_32822__$1 = state_32822;
var statearr_32832_34779 = state_32822__$1;
(statearr_32832_34779[(2)] = null);

(statearr_32832_34779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (6))){
var inst_32794 = (state_32822[(7)]);
var inst_32802 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32794) : p.call(null,inst_32794));
var state_32822__$1 = state_32822;
if(cljs.core.truth_(inst_32802)){
var statearr_32835_34780 = state_32822__$1;
(statearr_32835_34780[(1)] = (9));

} else {
var statearr_32837_34781 = state_32822__$1;
(statearr_32837_34781[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (3))){
var inst_32819 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32822__$1,inst_32819);
} else {
if((state_val_32823 === (12))){
var state_32822__$1 = state_32822;
var statearr_32838_34785 = state_32822__$1;
(statearr_32838_34785[(2)] = null);

(statearr_32838_34785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (2))){
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32822__$1,(4),ch);
} else {
if((state_val_32823 === (11))){
var inst_32794 = (state_32822[(7)]);
var inst_32806 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32822__$1,(8),inst_32806,inst_32794);
} else {
if((state_val_32823 === (9))){
var state_32822__$1 = state_32822;
var statearr_32839_34787 = state_32822__$1;
(statearr_32839_34787[(2)] = tc);

(statearr_32839_34787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (5))){
var inst_32797 = cljs.core.async.close_BANG_(tc);
var inst_32798 = cljs.core.async.close_BANG_(fc);
var state_32822__$1 = (function (){var statearr_32840 = state_32822;
(statearr_32840[(8)] = inst_32797);

return statearr_32840;
})();
var statearr_32841_34789 = state_32822__$1;
(statearr_32841_34789[(2)] = inst_32798);

(statearr_32841_34789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (14))){
var inst_32815 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32842_34790 = state_32822__$1;
(statearr_32842_34790[(2)] = inst_32815);

(statearr_32842_34790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (10))){
var state_32822__$1 = state_32822;
var statearr_32846_34792 = state_32822__$1;
(statearr_32846_34792[(2)] = fc);

(statearr_32846_34792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (8))){
var inst_32808 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
if(cljs.core.truth_(inst_32808)){
var statearr_32848_34793 = state_32822__$1;
(statearr_32848_34793[(1)] = (12));

} else {
var statearr_32849_34794 = state_32822__$1;
(statearr_32849_34794[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32205__auto__ = null;
var cljs$core$async$state_machine__32205__auto____0 = (function (){
var statearr_32851 = [null,null,null,null,null,null,null,null,null];
(statearr_32851[(0)] = cljs$core$async$state_machine__32205__auto__);

(statearr_32851[(1)] = (1));

return statearr_32851;
});
var cljs$core$async$state_machine__32205__auto____1 = (function (state_32822){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_32822);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e32852){var ex__32208__auto__ = e32852;
var statearr_32854_34795 = state_32822;
(statearr_32854_34795[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_32822[(4)]))){
var statearr_32855_34796 = state_32822;
(statearr_32855_34796[(1)] = cljs.core.first((state_32822[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34797 = state_32822;
state_32822 = G__34797;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$state_machine__32205__auto__ = function(state_32822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32205__auto____1.call(this,state_32822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32205__auto____0;
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32205__auto____1;
return cljs$core$async$state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_32859 = f__32318__auto__();
(statearr_32859[(6)] = c__32317__auto___34761);

return statearr_32859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32317__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_32888){
var state_val_32889 = (state_32888[(1)]);
if((state_val_32889 === (7))){
var inst_32884 = (state_32888[(2)]);
var state_32888__$1 = state_32888;
var statearr_32892_34798 = state_32888__$1;
(statearr_32892_34798[(2)] = inst_32884);

(statearr_32892_34798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (1))){
var inst_32866 = init;
var inst_32867 = inst_32866;
var state_32888__$1 = (function (){var statearr_32893 = state_32888;
(statearr_32893[(7)] = inst_32867);

return statearr_32893;
})();
var statearr_32894_34799 = state_32888__$1;
(statearr_32894_34799[(2)] = null);

(statearr_32894_34799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (4))){
var inst_32870 = (state_32888[(8)]);
var inst_32870__$1 = (state_32888[(2)]);
var inst_32871 = (inst_32870__$1 == null);
var state_32888__$1 = (function (){var statearr_32896 = state_32888;
(statearr_32896[(8)] = inst_32870__$1);

return statearr_32896;
})();
if(cljs.core.truth_(inst_32871)){
var statearr_32898_34800 = state_32888__$1;
(statearr_32898_34800[(1)] = (5));

} else {
var statearr_32900_34801 = state_32888__$1;
(statearr_32900_34801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (6))){
var inst_32867 = (state_32888[(7)]);
var inst_32870 = (state_32888[(8)]);
var inst_32874 = (state_32888[(9)]);
var inst_32874__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32867,inst_32870) : f.call(null,inst_32867,inst_32870));
var inst_32875 = cljs.core.reduced_QMARK_(inst_32874__$1);
var state_32888__$1 = (function (){var statearr_32901 = state_32888;
(statearr_32901[(9)] = inst_32874__$1);

return statearr_32901;
})();
if(inst_32875){
var statearr_32902_34802 = state_32888__$1;
(statearr_32902_34802[(1)] = (8));

} else {
var statearr_32903_34803 = state_32888__$1;
(statearr_32903_34803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (3))){
var inst_32886 = (state_32888[(2)]);
var state_32888__$1 = state_32888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32888__$1,inst_32886);
} else {
if((state_val_32889 === (2))){
var state_32888__$1 = state_32888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32888__$1,(4),ch);
} else {
if((state_val_32889 === (9))){
var inst_32874 = (state_32888[(9)]);
var inst_32867 = inst_32874;
var state_32888__$1 = (function (){var statearr_32908 = state_32888;
(statearr_32908[(7)] = inst_32867);

return statearr_32908;
})();
var statearr_32909_34804 = state_32888__$1;
(statearr_32909_34804[(2)] = null);

(statearr_32909_34804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (5))){
var inst_32867 = (state_32888[(7)]);
var state_32888__$1 = state_32888;
var statearr_32910_34805 = state_32888__$1;
(statearr_32910_34805[(2)] = inst_32867);

(statearr_32910_34805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (10))){
var inst_32882 = (state_32888[(2)]);
var state_32888__$1 = state_32888;
var statearr_32912_34807 = state_32888__$1;
(statearr_32912_34807[(2)] = inst_32882);

(statearr_32912_34807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (8))){
var inst_32874 = (state_32888[(9)]);
var inst_32878 = cljs.core.deref(inst_32874);
var state_32888__$1 = state_32888;
var statearr_32913_34814 = state_32888__$1;
(statearr_32913_34814[(2)] = inst_32878);

(statearr_32913_34814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32205__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32205__auto____0 = (function (){
var statearr_32921 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32921[(0)] = cljs$core$async$reduce_$_state_machine__32205__auto__);

(statearr_32921[(1)] = (1));

return statearr_32921;
});
var cljs$core$async$reduce_$_state_machine__32205__auto____1 = (function (state_32888){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_32888);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e32922){var ex__32208__auto__ = e32922;
var statearr_32923_34818 = state_32888;
(statearr_32923_34818[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_32888[(4)]))){
var statearr_32924_34820 = state_32888;
(statearr_32924_34820[(1)] = cljs.core.first((state_32888[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34821 = state_32888;
state_32888 = G__34821;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32205__auto__ = function(state_32888){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32205__auto____1.call(this,state_32888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32205__auto____0;
cljs$core$async$reduce_$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32205__auto____1;
return cljs$core$async$reduce_$_state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_32928 = f__32318__auto__();
(statearr_32928[(6)] = c__32317__auto__);

return statearr_32928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));

return c__32317__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32317__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_32935){
var state_val_32936 = (state_32935[(1)]);
if((state_val_32936 === (1))){
var inst_32930 = cljs.core.async.reduce(f__$1,init,ch);
var state_32935__$1 = state_32935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32935__$1,(2),inst_32930);
} else {
if((state_val_32936 === (2))){
var inst_32932 = (state_32935[(2)]);
var inst_32933 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32932) : f__$1.call(null,inst_32932));
var state_32935__$1 = state_32935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32935__$1,inst_32933);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32205__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32205__auto____0 = (function (){
var statearr_32939 = [null,null,null,null,null,null,null];
(statearr_32939[(0)] = cljs$core$async$transduce_$_state_machine__32205__auto__);

(statearr_32939[(1)] = (1));

return statearr_32939;
});
var cljs$core$async$transduce_$_state_machine__32205__auto____1 = (function (state_32935){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_32935);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e32940){var ex__32208__auto__ = e32940;
var statearr_32942_34831 = state_32935;
(statearr_32942_34831[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_32935[(4)]))){
var statearr_32945_34832 = state_32935;
(statearr_32945_34832[(1)] = cljs.core.first((state_32935[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34833 = state_32935;
state_32935 = G__34833;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32205__auto__ = function(state_32935){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32205__auto____1.call(this,state_32935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32205__auto____0;
cljs$core$async$transduce_$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32205__auto____1;
return cljs$core$async$transduce_$_state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_32958 = f__32318__auto__();
(statearr_32958[(6)] = c__32317__auto__);

return statearr_32958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));

return c__32317__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32969 = arguments.length;
switch (G__32969) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32317__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_32994){
var state_val_32995 = (state_32994[(1)]);
if((state_val_32995 === (7))){
var inst_32976 = (state_32994[(2)]);
var state_32994__$1 = state_32994;
var statearr_32997_34840 = state_32994__$1;
(statearr_32997_34840[(2)] = inst_32976);

(statearr_32997_34840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (1))){
var inst_32970 = cljs.core.seq(coll);
var inst_32971 = inst_32970;
var state_32994__$1 = (function (){var statearr_32998 = state_32994;
(statearr_32998[(7)] = inst_32971);

return statearr_32998;
})();
var statearr_32999_34843 = state_32994__$1;
(statearr_32999_34843[(2)] = null);

(statearr_32999_34843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (4))){
var inst_32971 = (state_32994[(7)]);
var inst_32974 = cljs.core.first(inst_32971);
var state_32994__$1 = state_32994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32994__$1,(7),ch,inst_32974);
} else {
if((state_val_32995 === (13))){
var inst_32988 = (state_32994[(2)]);
var state_32994__$1 = state_32994;
var statearr_33001_34846 = state_32994__$1;
(statearr_33001_34846[(2)] = inst_32988);

(statearr_33001_34846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (6))){
var inst_32979 = (state_32994[(2)]);
var state_32994__$1 = state_32994;
if(cljs.core.truth_(inst_32979)){
var statearr_33002_34847 = state_32994__$1;
(statearr_33002_34847[(1)] = (8));

} else {
var statearr_33003_34848 = state_32994__$1;
(statearr_33003_34848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (3))){
var inst_32992 = (state_32994[(2)]);
var state_32994__$1 = state_32994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32994__$1,inst_32992);
} else {
if((state_val_32995 === (12))){
var state_32994__$1 = state_32994;
var statearr_33004_34852 = state_32994__$1;
(statearr_33004_34852[(2)] = null);

(statearr_33004_34852[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (2))){
var inst_32971 = (state_32994[(7)]);
var state_32994__$1 = state_32994;
if(cljs.core.truth_(inst_32971)){
var statearr_33005_34853 = state_32994__$1;
(statearr_33005_34853[(1)] = (4));

} else {
var statearr_33007_34858 = state_32994__$1;
(statearr_33007_34858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (11))){
var inst_32985 = cljs.core.async.close_BANG_(ch);
var state_32994__$1 = state_32994;
var statearr_33008_34859 = state_32994__$1;
(statearr_33008_34859[(2)] = inst_32985);

(statearr_33008_34859[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (9))){
var state_32994__$1 = state_32994;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33009_34860 = state_32994__$1;
(statearr_33009_34860[(1)] = (11));

} else {
var statearr_33010_34867 = state_32994__$1;
(statearr_33010_34867[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (5))){
var inst_32971 = (state_32994[(7)]);
var state_32994__$1 = state_32994;
var statearr_33019_34868 = state_32994__$1;
(statearr_33019_34868[(2)] = inst_32971);

(statearr_33019_34868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (10))){
var inst_32990 = (state_32994[(2)]);
var state_32994__$1 = state_32994;
var statearr_33025_34869 = state_32994__$1;
(statearr_33025_34869[(2)] = inst_32990);

(statearr_33025_34869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (8))){
var inst_32971 = (state_32994[(7)]);
var inst_32981 = cljs.core.next(inst_32971);
var inst_32971__$1 = inst_32981;
var state_32994__$1 = (function (){var statearr_33034 = state_32994;
(statearr_33034[(7)] = inst_32971__$1);

return statearr_33034;
})();
var statearr_33035_34870 = state_32994__$1;
(statearr_33035_34870[(2)] = null);

(statearr_33035_34870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32205__auto__ = null;
var cljs$core$async$state_machine__32205__auto____0 = (function (){
var statearr_33036 = [null,null,null,null,null,null,null,null];
(statearr_33036[(0)] = cljs$core$async$state_machine__32205__auto__);

(statearr_33036[(1)] = (1));

return statearr_33036;
});
var cljs$core$async$state_machine__32205__auto____1 = (function (state_32994){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_32994);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e33037){var ex__32208__auto__ = e33037;
var statearr_33038_34871 = state_32994;
(statearr_33038_34871[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_32994[(4)]))){
var statearr_33039_34872 = state_32994;
(statearr_33039_34872[(1)] = cljs.core.first((state_32994[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34873 = state_32994;
state_32994 = G__34873;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$state_machine__32205__auto__ = function(state_32994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32205__auto____1.call(this,state_32994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32205__auto____0;
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32205__auto____1;
return cljs$core$async$state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_33041 = f__32318__auto__();
(statearr_33041[(6)] = c__32317__auto__);

return statearr_33041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));

return c__32317__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33043 = arguments.length;
switch (G__33043) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34877 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34877(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34878 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34878(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34881 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34881(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34882 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34882(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33048 = (function (ch,cs,meta33049){
this.ch = ch;
this.cs = cs;
this.meta33049 = meta33049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33050,meta33049__$1){
var self__ = this;
var _33050__$1 = this;
return (new cljs.core.async.t_cljs$core$async33048(self__.ch,self__.cs,meta33049__$1));
}));

(cljs.core.async.t_cljs$core$async33048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33050){
var self__ = this;
var _33050__$1 = this;
return self__.meta33049;
}));

(cljs.core.async.t_cljs$core$async33048.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33048.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33048.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33048.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33048.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33048.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33049","meta33049",1378390778,null)], null);
}));

(cljs.core.async.t_cljs$core$async33048.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33048");

(cljs.core.async.t_cljs$core$async33048.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33048");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33048.
 */
cljs.core.async.__GT_t_cljs$core$async33048 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33048(ch__$1,cs__$1,meta33049){
return (new cljs.core.async.t_cljs$core$async33048(ch__$1,cs__$1,meta33049));
});

}

return (new cljs.core.async.t_cljs$core$async33048(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32317__auto___34897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_33187){
var state_val_33188 = (state_33187[(1)]);
if((state_val_33188 === (7))){
var inst_33182 = (state_33187[(2)]);
var state_33187__$1 = state_33187;
var statearr_33189_34898 = state_33187__$1;
(statearr_33189_34898[(2)] = inst_33182);

(statearr_33189_34898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (20))){
var inst_33086 = (state_33187[(7)]);
var inst_33098 = cljs.core.first(inst_33086);
var inst_33099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33098,(0),null);
var inst_33100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33098,(1),null);
var state_33187__$1 = (function (){var statearr_33190 = state_33187;
(statearr_33190[(8)] = inst_33099);

return statearr_33190;
})();
if(cljs.core.truth_(inst_33100)){
var statearr_33191_34899 = state_33187__$1;
(statearr_33191_34899[(1)] = (22));

} else {
var statearr_33192_34900 = state_33187__$1;
(statearr_33192_34900[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (27))){
var inst_33136 = (state_33187[(9)]);
var inst_33055 = (state_33187[(10)]);
var inst_33131 = (state_33187[(11)]);
var inst_33129 = (state_33187[(12)]);
var inst_33136__$1 = cljs.core._nth(inst_33129,inst_33131);
var inst_33137 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33136__$1,inst_33055,done);
var state_33187__$1 = (function (){var statearr_33194 = state_33187;
(statearr_33194[(9)] = inst_33136__$1);

return statearr_33194;
})();
if(cljs.core.truth_(inst_33137)){
var statearr_33195_34910 = state_33187__$1;
(statearr_33195_34910[(1)] = (30));

} else {
var statearr_33196_34911 = state_33187__$1;
(statearr_33196_34911[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (1))){
var state_33187__$1 = state_33187;
var statearr_33197_34912 = state_33187__$1;
(statearr_33197_34912[(2)] = null);

(statearr_33197_34912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (24))){
var inst_33086 = (state_33187[(7)]);
var inst_33105 = (state_33187[(2)]);
var inst_33107 = cljs.core.next(inst_33086);
var inst_33064 = inst_33107;
var inst_33065 = null;
var inst_33066 = (0);
var inst_33067 = (0);
var state_33187__$1 = (function (){var statearr_33198 = state_33187;
(statearr_33198[(13)] = inst_33065);

(statearr_33198[(14)] = inst_33067);

(statearr_33198[(15)] = inst_33064);

(statearr_33198[(16)] = inst_33066);

(statearr_33198[(17)] = inst_33105);

return statearr_33198;
})();
var statearr_33199_34913 = state_33187__$1;
(statearr_33199_34913[(2)] = null);

(statearr_33199_34913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (39))){
var state_33187__$1 = state_33187;
var statearr_33203_34914 = state_33187__$1;
(statearr_33203_34914[(2)] = null);

(statearr_33203_34914[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (4))){
var inst_33055 = (state_33187[(10)]);
var inst_33055__$1 = (state_33187[(2)]);
var inst_33056 = (inst_33055__$1 == null);
var state_33187__$1 = (function (){var statearr_33205 = state_33187;
(statearr_33205[(10)] = inst_33055__$1);

return statearr_33205;
})();
if(cljs.core.truth_(inst_33056)){
var statearr_33206_34919 = state_33187__$1;
(statearr_33206_34919[(1)] = (5));

} else {
var statearr_33207_34920 = state_33187__$1;
(statearr_33207_34920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (15))){
var inst_33065 = (state_33187[(13)]);
var inst_33067 = (state_33187[(14)]);
var inst_33064 = (state_33187[(15)]);
var inst_33066 = (state_33187[(16)]);
var inst_33082 = (state_33187[(2)]);
var inst_33083 = (inst_33067 + (1));
var tmp33200 = inst_33065;
var tmp33201 = inst_33064;
var tmp33202 = inst_33066;
var inst_33064__$1 = tmp33201;
var inst_33065__$1 = tmp33200;
var inst_33066__$1 = tmp33202;
var inst_33067__$1 = inst_33083;
var state_33187__$1 = (function (){var statearr_33208 = state_33187;
(statearr_33208[(13)] = inst_33065__$1);

(statearr_33208[(14)] = inst_33067__$1);

(statearr_33208[(18)] = inst_33082);

(statearr_33208[(15)] = inst_33064__$1);

(statearr_33208[(16)] = inst_33066__$1);

return statearr_33208;
})();
var statearr_33209_34921 = state_33187__$1;
(statearr_33209_34921[(2)] = null);

(statearr_33209_34921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (21))){
var inst_33110 = (state_33187[(2)]);
var state_33187__$1 = state_33187;
var statearr_33213_34928 = state_33187__$1;
(statearr_33213_34928[(2)] = inst_33110);

(statearr_33213_34928[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (31))){
var inst_33136 = (state_33187[(9)]);
var inst_33140 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33136);
var state_33187__$1 = state_33187;
var statearr_33215_34936 = state_33187__$1;
(statearr_33215_34936[(2)] = inst_33140);

(statearr_33215_34936[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (32))){
var inst_33128 = (state_33187[(19)]);
var inst_33131 = (state_33187[(11)]);
var inst_33130 = (state_33187[(20)]);
var inst_33129 = (state_33187[(12)]);
var inst_33142 = (state_33187[(2)]);
var inst_33143 = (inst_33131 + (1));
var tmp33210 = inst_33128;
var tmp33211 = inst_33130;
var tmp33212 = inst_33129;
var inst_33128__$1 = tmp33210;
var inst_33129__$1 = tmp33212;
var inst_33130__$1 = tmp33211;
var inst_33131__$1 = inst_33143;
var state_33187__$1 = (function (){var statearr_33216 = state_33187;
(statearr_33216[(19)] = inst_33128__$1);

(statearr_33216[(11)] = inst_33131__$1);

(statearr_33216[(21)] = inst_33142);

(statearr_33216[(20)] = inst_33130__$1);

(statearr_33216[(12)] = inst_33129__$1);

return statearr_33216;
})();
var statearr_33217_34937 = state_33187__$1;
(statearr_33217_34937[(2)] = null);

(statearr_33217_34937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (40))){
var inst_33155 = (state_33187[(22)]);
var inst_33159 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33155);
var state_33187__$1 = state_33187;
var statearr_33218_34938 = state_33187__$1;
(statearr_33218_34938[(2)] = inst_33159);

(statearr_33218_34938[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (33))){
var inst_33146 = (state_33187[(23)]);
var inst_33148 = cljs.core.chunked_seq_QMARK_(inst_33146);
var state_33187__$1 = state_33187;
if(inst_33148){
var statearr_33219_34939 = state_33187__$1;
(statearr_33219_34939[(1)] = (36));

} else {
var statearr_33221_34940 = state_33187__$1;
(statearr_33221_34940[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (13))){
var inst_33076 = (state_33187[(24)]);
var inst_33079 = cljs.core.async.close_BANG_(inst_33076);
var state_33187__$1 = state_33187;
var statearr_33222_34942 = state_33187__$1;
(statearr_33222_34942[(2)] = inst_33079);

(statearr_33222_34942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (22))){
var inst_33099 = (state_33187[(8)]);
var inst_33102 = cljs.core.async.close_BANG_(inst_33099);
var state_33187__$1 = state_33187;
var statearr_33223_34943 = state_33187__$1;
(statearr_33223_34943[(2)] = inst_33102);

(statearr_33223_34943[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (36))){
var inst_33146 = (state_33187[(23)]);
var inst_33150 = cljs.core.chunk_first(inst_33146);
var inst_33151 = cljs.core.chunk_rest(inst_33146);
var inst_33152 = cljs.core.count(inst_33150);
var inst_33128 = inst_33151;
var inst_33129 = inst_33150;
var inst_33130 = inst_33152;
var inst_33131 = (0);
var state_33187__$1 = (function (){var statearr_33224 = state_33187;
(statearr_33224[(19)] = inst_33128);

(statearr_33224[(11)] = inst_33131);

(statearr_33224[(20)] = inst_33130);

(statearr_33224[(12)] = inst_33129);

return statearr_33224;
})();
var statearr_33225_34944 = state_33187__$1;
(statearr_33225_34944[(2)] = null);

(statearr_33225_34944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (41))){
var inst_33146 = (state_33187[(23)]);
var inst_33161 = (state_33187[(2)]);
var inst_33162 = cljs.core.next(inst_33146);
var inst_33128 = inst_33162;
var inst_33129 = null;
var inst_33130 = (0);
var inst_33131 = (0);
var state_33187__$1 = (function (){var statearr_33226 = state_33187;
(statearr_33226[(19)] = inst_33128);

(statearr_33226[(11)] = inst_33131);

(statearr_33226[(20)] = inst_33130);

(statearr_33226[(12)] = inst_33129);

(statearr_33226[(25)] = inst_33161);

return statearr_33226;
})();
var statearr_33227_34945 = state_33187__$1;
(statearr_33227_34945[(2)] = null);

(statearr_33227_34945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (43))){
var state_33187__$1 = state_33187;
var statearr_33229_34946 = state_33187__$1;
(statearr_33229_34946[(2)] = null);

(statearr_33229_34946[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (29))){
var inst_33170 = (state_33187[(2)]);
var state_33187__$1 = state_33187;
var statearr_33230_34947 = state_33187__$1;
(statearr_33230_34947[(2)] = inst_33170);

(statearr_33230_34947[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (44))){
var inst_33179 = (state_33187[(2)]);
var state_33187__$1 = (function (){var statearr_33231 = state_33187;
(statearr_33231[(26)] = inst_33179);

return statearr_33231;
})();
var statearr_33232_34950 = state_33187__$1;
(statearr_33232_34950[(2)] = null);

(statearr_33232_34950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (6))){
var inst_33120 = (state_33187[(27)]);
var inst_33119 = cljs.core.deref(cs);
var inst_33120__$1 = cljs.core.keys(inst_33119);
var inst_33121 = cljs.core.count(inst_33120__$1);
var inst_33122 = cljs.core.reset_BANG_(dctr,inst_33121);
var inst_33127 = cljs.core.seq(inst_33120__$1);
var inst_33128 = inst_33127;
var inst_33129 = null;
var inst_33130 = (0);
var inst_33131 = (0);
var state_33187__$1 = (function (){var statearr_33233 = state_33187;
(statearr_33233[(19)] = inst_33128);

(statearr_33233[(11)] = inst_33131);

(statearr_33233[(27)] = inst_33120__$1);

(statearr_33233[(20)] = inst_33130);

(statearr_33233[(12)] = inst_33129);

(statearr_33233[(28)] = inst_33122);

return statearr_33233;
})();
var statearr_33234_34951 = state_33187__$1;
(statearr_33234_34951[(2)] = null);

(statearr_33234_34951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (28))){
var inst_33146 = (state_33187[(23)]);
var inst_33128 = (state_33187[(19)]);
var inst_33146__$1 = cljs.core.seq(inst_33128);
var state_33187__$1 = (function (){var statearr_33236 = state_33187;
(statearr_33236[(23)] = inst_33146__$1);

return statearr_33236;
})();
if(inst_33146__$1){
var statearr_33237_34955 = state_33187__$1;
(statearr_33237_34955[(1)] = (33));

} else {
var statearr_33238_34958 = state_33187__$1;
(statearr_33238_34958[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (25))){
var inst_33131 = (state_33187[(11)]);
var inst_33130 = (state_33187[(20)]);
var inst_33133 = (inst_33131 < inst_33130);
var inst_33134 = inst_33133;
var state_33187__$1 = state_33187;
if(cljs.core.truth_(inst_33134)){
var statearr_33239_34965 = state_33187__$1;
(statearr_33239_34965[(1)] = (27));

} else {
var statearr_33240_34966 = state_33187__$1;
(statearr_33240_34966[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (34))){
var state_33187__$1 = state_33187;
var statearr_33241_34967 = state_33187__$1;
(statearr_33241_34967[(2)] = null);

(statearr_33241_34967[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (17))){
var state_33187__$1 = state_33187;
var statearr_33242_34968 = state_33187__$1;
(statearr_33242_34968[(2)] = null);

(statearr_33242_34968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (3))){
var inst_33184 = (state_33187[(2)]);
var state_33187__$1 = state_33187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33187__$1,inst_33184);
} else {
if((state_val_33188 === (12))){
var inst_33115 = (state_33187[(2)]);
var state_33187__$1 = state_33187;
var statearr_33243_34969 = state_33187__$1;
(statearr_33243_34969[(2)] = inst_33115);

(statearr_33243_34969[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (2))){
var state_33187__$1 = state_33187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33187__$1,(4),ch);
} else {
if((state_val_33188 === (23))){
var state_33187__$1 = state_33187;
var statearr_33245_34970 = state_33187__$1;
(statearr_33245_34970[(2)] = null);

(statearr_33245_34970[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (35))){
var inst_33168 = (state_33187[(2)]);
var state_33187__$1 = state_33187;
var statearr_33246_34971 = state_33187__$1;
(statearr_33246_34971[(2)] = inst_33168);

(statearr_33246_34971[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (19))){
var inst_33086 = (state_33187[(7)]);
var inst_33090 = cljs.core.chunk_first(inst_33086);
var inst_33091 = cljs.core.chunk_rest(inst_33086);
var inst_33092 = cljs.core.count(inst_33090);
var inst_33064 = inst_33091;
var inst_33065 = inst_33090;
var inst_33066 = inst_33092;
var inst_33067 = (0);
var state_33187__$1 = (function (){var statearr_33247 = state_33187;
(statearr_33247[(13)] = inst_33065);

(statearr_33247[(14)] = inst_33067);

(statearr_33247[(15)] = inst_33064);

(statearr_33247[(16)] = inst_33066);

return statearr_33247;
})();
var statearr_33248_34973 = state_33187__$1;
(statearr_33248_34973[(2)] = null);

(statearr_33248_34973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (11))){
var inst_33086 = (state_33187[(7)]);
var inst_33064 = (state_33187[(15)]);
var inst_33086__$1 = cljs.core.seq(inst_33064);
var state_33187__$1 = (function (){var statearr_33249 = state_33187;
(statearr_33249[(7)] = inst_33086__$1);

return statearr_33249;
})();
if(inst_33086__$1){
var statearr_33251_34974 = state_33187__$1;
(statearr_33251_34974[(1)] = (16));

} else {
var statearr_33252_34975 = state_33187__$1;
(statearr_33252_34975[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (9))){
var inst_33117 = (state_33187[(2)]);
var state_33187__$1 = state_33187;
var statearr_33253_34976 = state_33187__$1;
(statearr_33253_34976[(2)] = inst_33117);

(statearr_33253_34976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (5))){
var inst_33062 = cljs.core.deref(cs);
var inst_33063 = cljs.core.seq(inst_33062);
var inst_33064 = inst_33063;
var inst_33065 = null;
var inst_33066 = (0);
var inst_33067 = (0);
var state_33187__$1 = (function (){var statearr_33254 = state_33187;
(statearr_33254[(13)] = inst_33065);

(statearr_33254[(14)] = inst_33067);

(statearr_33254[(15)] = inst_33064);

(statearr_33254[(16)] = inst_33066);

return statearr_33254;
})();
var statearr_33255_34980 = state_33187__$1;
(statearr_33255_34980[(2)] = null);

(statearr_33255_34980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (14))){
var state_33187__$1 = state_33187;
var statearr_33256_34981 = state_33187__$1;
(statearr_33256_34981[(2)] = null);

(statearr_33256_34981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (45))){
var inst_33176 = (state_33187[(2)]);
var state_33187__$1 = state_33187;
var statearr_33257_34982 = state_33187__$1;
(statearr_33257_34982[(2)] = inst_33176);

(statearr_33257_34982[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (26))){
var inst_33120 = (state_33187[(27)]);
var inst_33172 = (state_33187[(2)]);
var inst_33173 = cljs.core.seq(inst_33120);
var state_33187__$1 = (function (){var statearr_33259 = state_33187;
(statearr_33259[(29)] = inst_33172);

return statearr_33259;
})();
if(inst_33173){
var statearr_33260_34984 = state_33187__$1;
(statearr_33260_34984[(1)] = (42));

} else {
var statearr_33261_34985 = state_33187__$1;
(statearr_33261_34985[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (16))){
var inst_33086 = (state_33187[(7)]);
var inst_33088 = cljs.core.chunked_seq_QMARK_(inst_33086);
var state_33187__$1 = state_33187;
if(inst_33088){
var statearr_33262_34986 = state_33187__$1;
(statearr_33262_34986[(1)] = (19));

} else {
var statearr_33263_34987 = state_33187__$1;
(statearr_33263_34987[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (38))){
var inst_33165 = (state_33187[(2)]);
var state_33187__$1 = state_33187;
var statearr_33264_34988 = state_33187__$1;
(statearr_33264_34988[(2)] = inst_33165);

(statearr_33264_34988[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (30))){
var state_33187__$1 = state_33187;
var statearr_33265_34989 = state_33187__$1;
(statearr_33265_34989[(2)] = null);

(statearr_33265_34989[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (10))){
var inst_33065 = (state_33187[(13)]);
var inst_33067 = (state_33187[(14)]);
var inst_33075 = cljs.core._nth(inst_33065,inst_33067);
var inst_33076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33075,(0),null);
var inst_33077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33075,(1),null);
var state_33187__$1 = (function (){var statearr_33266 = state_33187;
(statearr_33266[(24)] = inst_33076);

return statearr_33266;
})();
if(cljs.core.truth_(inst_33077)){
var statearr_33268_34990 = state_33187__$1;
(statearr_33268_34990[(1)] = (13));

} else {
var statearr_33269_34991 = state_33187__$1;
(statearr_33269_34991[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (18))){
var inst_33113 = (state_33187[(2)]);
var state_33187__$1 = state_33187;
var statearr_33270_34992 = state_33187__$1;
(statearr_33270_34992[(2)] = inst_33113);

(statearr_33270_34992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (42))){
var state_33187__$1 = state_33187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33187__$1,(45),dchan);
} else {
if((state_val_33188 === (37))){
var inst_33055 = (state_33187[(10)]);
var inst_33146 = (state_33187[(23)]);
var inst_33155 = (state_33187[(22)]);
var inst_33155__$1 = cljs.core.first(inst_33146);
var inst_33156 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33155__$1,inst_33055,done);
var state_33187__$1 = (function (){var statearr_33271 = state_33187;
(statearr_33271[(22)] = inst_33155__$1);

return statearr_33271;
})();
if(cljs.core.truth_(inst_33156)){
var statearr_33272_34993 = state_33187__$1;
(statearr_33272_34993[(1)] = (39));

} else {
var statearr_33273_34994 = state_33187__$1;
(statearr_33273_34994[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (8))){
var inst_33067 = (state_33187[(14)]);
var inst_33066 = (state_33187[(16)]);
var inst_33069 = (inst_33067 < inst_33066);
var inst_33070 = inst_33069;
var state_33187__$1 = state_33187;
if(cljs.core.truth_(inst_33070)){
var statearr_33274_34995 = state_33187__$1;
(statearr_33274_34995[(1)] = (10));

} else {
var statearr_33275_34997 = state_33187__$1;
(statearr_33275_34997[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32205__auto__ = null;
var cljs$core$async$mult_$_state_machine__32205__auto____0 = (function (){
var statearr_33277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33277[(0)] = cljs$core$async$mult_$_state_machine__32205__auto__);

(statearr_33277[(1)] = (1));

return statearr_33277;
});
var cljs$core$async$mult_$_state_machine__32205__auto____1 = (function (state_33187){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_33187);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e33278){var ex__32208__auto__ = e33278;
var statearr_33279_34998 = state_33187;
(statearr_33279_34998[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_33187[(4)]))){
var statearr_33280_35003 = state_33187;
(statearr_33280_35003[(1)] = cljs.core.first((state_33187[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35007 = state_33187;
state_33187 = G__35007;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32205__auto__ = function(state_33187){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32205__auto____1.call(this,state_33187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32205__auto____0;
cljs$core$async$mult_$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32205__auto____1;
return cljs$core$async$mult_$_state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_33281 = f__32318__auto__();
(statearr_33281[(6)] = c__32317__auto___34897);

return statearr_33281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33284 = arguments.length;
switch (G__33284) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35011 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35011(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35016 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35016(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35019 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35019(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35022 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35022(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35023 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35023(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35025 = arguments.length;
var i__4865__auto___35026 = (0);
while(true){
if((i__4865__auto___35026 < len__4864__auto___35025)){
args__4870__auto__.push((arguments[i__4865__auto___35026]));

var G__35027 = (i__4865__auto___35026 + (1));
i__4865__auto___35026 = G__35027;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33294){
var map__33295 = p__33294;
var map__33295__$1 = cljs.core.__destructure_map(map__33295);
var opts = map__33295__$1;
var statearr_33296_35031 = state;
(statearr_33296_35031[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33297_35032 = state;
(statearr_33297_35032[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_33298_35033 = state;
(statearr_33298_35033[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33289){
var G__33290 = cljs.core.first(seq33289);
var seq33289__$1 = cljs.core.next(seq33289);
var G__33291 = cljs.core.first(seq33289__$1);
var seq33289__$2 = cljs.core.next(seq33289__$1);
var G__33292 = cljs.core.first(seq33289__$2);
var seq33289__$3 = cljs.core.next(seq33289__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33290,G__33291,G__33292,seq33289__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33301 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33302){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33302 = meta33302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33303,meta33302__$1){
var self__ = this;
var _33303__$1 = this;
return (new cljs.core.async.t_cljs$core$async33301(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33302__$1));
}));

(cljs.core.async.t_cljs$core$async33301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33303){
var self__ = this;
var _33303__$1 = this;
return self__.meta33302;
}));

(cljs.core.async.t_cljs$core$async33301.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33301.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33301.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33301.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33301.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33301.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33301.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33302","meta33302",1375159619,null)], null);
}));

(cljs.core.async.t_cljs$core$async33301.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33301");

(cljs.core.async.t_cljs$core$async33301.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33301");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33301.
 */
cljs.core.async.__GT_t_cljs$core$async33301 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33301(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33302){
return (new cljs.core.async.t_cljs$core$async33301(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33302));
});

}

return (new cljs.core.async.t_cljs$core$async33301(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32317__auto___35043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_33376){
var state_val_33377 = (state_33376[(1)]);
if((state_val_33377 === (7))){
var inst_33334 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
if(cljs.core.truth_(inst_33334)){
var statearr_33378_35044 = state_33376__$1;
(statearr_33378_35044[(1)] = (8));

} else {
var statearr_33379_35045 = state_33376__$1;
(statearr_33379_35045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (20))){
var inst_33327 = (state_33376[(7)]);
var state_33376__$1 = state_33376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33376__$1,(23),out,inst_33327);
} else {
if((state_val_33377 === (1))){
var inst_33310 = calc_state();
var inst_33311 = cljs.core.__destructure_map(inst_33310);
var inst_33312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33311,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33311,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33311,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33315 = inst_33310;
var state_33376__$1 = (function (){var statearr_33381 = state_33376;
(statearr_33381[(8)] = inst_33313);

(statearr_33381[(9)] = inst_33312);

(statearr_33381[(10)] = inst_33315);

(statearr_33381[(11)] = inst_33314);

return statearr_33381;
})();
var statearr_33383_35052 = state_33376__$1;
(statearr_33383_35052[(2)] = null);

(statearr_33383_35052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (24))){
var inst_33318 = (state_33376[(12)]);
var inst_33315 = inst_33318;
var state_33376__$1 = (function (){var statearr_33384 = state_33376;
(statearr_33384[(10)] = inst_33315);

return statearr_33384;
})();
var statearr_33385_35056 = state_33376__$1;
(statearr_33385_35056[(2)] = null);

(statearr_33385_35056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (4))){
var inst_33327 = (state_33376[(7)]);
var inst_33329 = (state_33376[(13)]);
var inst_33326 = (state_33376[(2)]);
var inst_33327__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33326,(0),null);
var inst_33328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33326,(1),null);
var inst_33329__$1 = (inst_33327__$1 == null);
var state_33376__$1 = (function (){var statearr_33386 = state_33376;
(statearr_33386[(14)] = inst_33328);

(statearr_33386[(7)] = inst_33327__$1);

(statearr_33386[(13)] = inst_33329__$1);

return statearr_33386;
})();
if(cljs.core.truth_(inst_33329__$1)){
var statearr_33387_35057 = state_33376__$1;
(statearr_33387_35057[(1)] = (5));

} else {
var statearr_33388_35058 = state_33376__$1;
(statearr_33388_35058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (15))){
var inst_33350 = (state_33376[(15)]);
var inst_33319 = (state_33376[(16)]);
var inst_33350__$1 = cljs.core.empty_QMARK_(inst_33319);
var state_33376__$1 = (function (){var statearr_33389 = state_33376;
(statearr_33389[(15)] = inst_33350__$1);

return statearr_33389;
})();
if(inst_33350__$1){
var statearr_33390_35059 = state_33376__$1;
(statearr_33390_35059[(1)] = (17));

} else {
var statearr_33391_35061 = state_33376__$1;
(statearr_33391_35061[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (21))){
var inst_33318 = (state_33376[(12)]);
var inst_33315 = inst_33318;
var state_33376__$1 = (function (){var statearr_33392 = state_33376;
(statearr_33392[(10)] = inst_33315);

return statearr_33392;
})();
var statearr_33393_35065 = state_33376__$1;
(statearr_33393_35065[(2)] = null);

(statearr_33393_35065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (13))){
var inst_33342 = (state_33376[(2)]);
var inst_33343 = calc_state();
var inst_33315 = inst_33343;
var state_33376__$1 = (function (){var statearr_33394 = state_33376;
(statearr_33394[(17)] = inst_33342);

(statearr_33394[(10)] = inst_33315);

return statearr_33394;
})();
var statearr_33395_35066 = state_33376__$1;
(statearr_33395_35066[(2)] = null);

(statearr_33395_35066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (22))){
var inst_33370 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
var statearr_33396_35067 = state_33376__$1;
(statearr_33396_35067[(2)] = inst_33370);

(statearr_33396_35067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (6))){
var inst_33328 = (state_33376[(14)]);
var inst_33332 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33328,change);
var state_33376__$1 = state_33376;
var statearr_33397_35068 = state_33376__$1;
(statearr_33397_35068[(2)] = inst_33332);

(statearr_33397_35068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (25))){
var state_33376__$1 = state_33376;
var statearr_33398_35069 = state_33376__$1;
(statearr_33398_35069[(2)] = null);

(statearr_33398_35069[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (17))){
var inst_33328 = (state_33376[(14)]);
var inst_33320 = (state_33376[(18)]);
var inst_33352 = (inst_33320.cljs$core$IFn$_invoke$arity$1 ? inst_33320.cljs$core$IFn$_invoke$arity$1(inst_33328) : inst_33320.call(null,inst_33328));
var inst_33353 = cljs.core.not(inst_33352);
var state_33376__$1 = state_33376;
var statearr_33399_35071 = state_33376__$1;
(statearr_33399_35071[(2)] = inst_33353);

(statearr_33399_35071[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (3))){
var inst_33374 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33376__$1,inst_33374);
} else {
if((state_val_33377 === (12))){
var state_33376__$1 = state_33376;
var statearr_33402_35072 = state_33376__$1;
(statearr_33402_35072[(2)] = null);

(statearr_33402_35072[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (2))){
var inst_33318 = (state_33376[(12)]);
var inst_33315 = (state_33376[(10)]);
var inst_33318__$1 = cljs.core.__destructure_map(inst_33315);
var inst_33319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33318__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33318__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33318__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33376__$1 = (function (){var statearr_33403 = state_33376;
(statearr_33403[(12)] = inst_33318__$1);

(statearr_33403[(16)] = inst_33319);

(statearr_33403[(18)] = inst_33320);

return statearr_33403;
})();
return cljs.core.async.ioc_alts_BANG_(state_33376__$1,(4),inst_33321);
} else {
if((state_val_33377 === (23))){
var inst_33361 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
if(cljs.core.truth_(inst_33361)){
var statearr_33404_35073 = state_33376__$1;
(statearr_33404_35073[(1)] = (24));

} else {
var statearr_33405_35074 = state_33376__$1;
(statearr_33405_35074[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (19))){
var inst_33356 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
var statearr_33406_35085 = state_33376__$1;
(statearr_33406_35085[(2)] = inst_33356);

(statearr_33406_35085[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (11))){
var inst_33328 = (state_33376[(14)]);
var inst_33338 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33328);
var state_33376__$1 = state_33376;
var statearr_33407_35086 = state_33376__$1;
(statearr_33407_35086[(2)] = inst_33338);

(statearr_33407_35086[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (9))){
var inst_33328 = (state_33376[(14)]);
var inst_33346 = (state_33376[(19)]);
var inst_33319 = (state_33376[(16)]);
var inst_33346__$1 = (inst_33319.cljs$core$IFn$_invoke$arity$1 ? inst_33319.cljs$core$IFn$_invoke$arity$1(inst_33328) : inst_33319.call(null,inst_33328));
var state_33376__$1 = (function (){var statearr_33408 = state_33376;
(statearr_33408[(19)] = inst_33346__$1);

return statearr_33408;
})();
if(cljs.core.truth_(inst_33346__$1)){
var statearr_33409_35087 = state_33376__$1;
(statearr_33409_35087[(1)] = (14));

} else {
var statearr_33410_35088 = state_33376__$1;
(statearr_33410_35088[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (5))){
var inst_33329 = (state_33376[(13)]);
var state_33376__$1 = state_33376;
var statearr_33414_35089 = state_33376__$1;
(statearr_33414_35089[(2)] = inst_33329);

(statearr_33414_35089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (14))){
var inst_33346 = (state_33376[(19)]);
var state_33376__$1 = state_33376;
var statearr_33415_35090 = state_33376__$1;
(statearr_33415_35090[(2)] = inst_33346);

(statearr_33415_35090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (26))){
var inst_33366 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
var statearr_33419_35091 = state_33376__$1;
(statearr_33419_35091[(2)] = inst_33366);

(statearr_33419_35091[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (16))){
var inst_33358 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
if(cljs.core.truth_(inst_33358)){
var statearr_33423_35092 = state_33376__$1;
(statearr_33423_35092[(1)] = (20));

} else {
var statearr_33424_35093 = state_33376__$1;
(statearr_33424_35093[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (10))){
var inst_33372 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
var statearr_33425_35094 = state_33376__$1;
(statearr_33425_35094[(2)] = inst_33372);

(statearr_33425_35094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (18))){
var inst_33350 = (state_33376[(15)]);
var state_33376__$1 = state_33376;
var statearr_33426_35101 = state_33376__$1;
(statearr_33426_35101[(2)] = inst_33350);

(statearr_33426_35101[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (8))){
var inst_33327 = (state_33376[(7)]);
var inst_33336 = (inst_33327 == null);
var state_33376__$1 = state_33376;
if(cljs.core.truth_(inst_33336)){
var statearr_33428_35102 = state_33376__$1;
(statearr_33428_35102[(1)] = (11));

} else {
var statearr_33429_35103 = state_33376__$1;
(statearr_33429_35103[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32205__auto__ = null;
var cljs$core$async$mix_$_state_machine__32205__auto____0 = (function (){
var statearr_33434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33434[(0)] = cljs$core$async$mix_$_state_machine__32205__auto__);

(statearr_33434[(1)] = (1));

return statearr_33434;
});
var cljs$core$async$mix_$_state_machine__32205__auto____1 = (function (state_33376){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_33376);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e33436){var ex__32208__auto__ = e33436;
var statearr_33438_35104 = state_33376;
(statearr_33438_35104[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_33376[(4)]))){
var statearr_33440_35105 = state_33376;
(statearr_33440_35105[(1)] = cljs.core.first((state_33376[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35106 = state_33376;
state_33376 = G__35106;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32205__auto__ = function(state_33376){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32205__auto____1.call(this,state_33376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32205__auto____0;
cljs$core$async$mix_$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32205__auto____1;
return cljs$core$async$mix_$_state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_33444 = f__32318__auto__();
(statearr_33444[(6)] = c__32317__auto___35043);

return statearr_33444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35107 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35107(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35109 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35109(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35118 = (function() {
var G__35119 = null;
var G__35119__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35119__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35119 = function(p,v){
switch(arguments.length){
case 1:
return G__35119__1.call(this,p);
case 2:
return G__35119__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35119.cljs$core$IFn$_invoke$arity$1 = G__35119__1;
G__35119.cljs$core$IFn$_invoke$arity$2 = G__35119__2;
return G__35119;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33484 = arguments.length;
switch (G__33484) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35118(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35118(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33500 = arguments.length;
switch (G__33500) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33494_SHARP_){
if(cljs.core.truth_((p1__33494_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33494_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33494_SHARP_.call(null,topic)))){
return p1__33494_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33494_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33510 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33510 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33511){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33511 = meta33511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33512,meta33511__$1){
var self__ = this;
var _33512__$1 = this;
return (new cljs.core.async.t_cljs$core$async33510(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33511__$1));
}));

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33512){
var self__ = this;
var _33512__$1 = this;
return self__.meta33511;
}));

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33510.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33511","meta33511",196252925,null)], null);
}));

(cljs.core.async.t_cljs$core$async33510.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33510");

(cljs.core.async.t_cljs$core$async33510.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33510");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33510.
 */
cljs.core.async.__GT_t_cljs$core$async33510 = (function cljs$core$async$__GT_t_cljs$core$async33510(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33511){
return (new cljs.core.async.t_cljs$core$async33510(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33511));
});

}

return (new cljs.core.async.t_cljs$core$async33510(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32317__auto___35145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_33609){
var state_val_33610 = (state_33609[(1)]);
if((state_val_33610 === (7))){
var inst_33604 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33614_35146 = state_33609__$1;
(statearr_33614_35146[(2)] = inst_33604);

(statearr_33614_35146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (20))){
var state_33609__$1 = state_33609;
var statearr_33616_35147 = state_33609__$1;
(statearr_33616_35147[(2)] = null);

(statearr_33616_35147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (1))){
var state_33609__$1 = state_33609;
var statearr_33620_35148 = state_33609__$1;
(statearr_33620_35148[(2)] = null);

(statearr_33620_35148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (24))){
var inst_33587 = (state_33609[(7)]);
var inst_33596 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33587);
var state_33609__$1 = state_33609;
var statearr_33622_35150 = state_33609__$1;
(statearr_33622_35150[(2)] = inst_33596);

(statearr_33622_35150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (4))){
var inst_33532 = (state_33609[(8)]);
var inst_33532__$1 = (state_33609[(2)]);
var inst_33533 = (inst_33532__$1 == null);
var state_33609__$1 = (function (){var statearr_33625 = state_33609;
(statearr_33625[(8)] = inst_33532__$1);

return statearr_33625;
})();
if(cljs.core.truth_(inst_33533)){
var statearr_33628_35151 = state_33609__$1;
(statearr_33628_35151[(1)] = (5));

} else {
var statearr_33629_35152 = state_33609__$1;
(statearr_33629_35152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (15))){
var inst_33581 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33632_35154 = state_33609__$1;
(statearr_33632_35154[(2)] = inst_33581);

(statearr_33632_35154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (21))){
var inst_33601 = (state_33609[(2)]);
var state_33609__$1 = (function (){var statearr_33635 = state_33609;
(statearr_33635[(9)] = inst_33601);

return statearr_33635;
})();
var statearr_33637_35156 = state_33609__$1;
(statearr_33637_35156[(2)] = null);

(statearr_33637_35156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (13))){
var inst_33560 = (state_33609[(10)]);
var inst_33562 = cljs.core.chunked_seq_QMARK_(inst_33560);
var state_33609__$1 = state_33609;
if(inst_33562){
var statearr_33639_35157 = state_33609__$1;
(statearr_33639_35157[(1)] = (16));

} else {
var statearr_33640_35158 = state_33609__$1;
(statearr_33640_35158[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (22))){
var inst_33593 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
if(cljs.core.truth_(inst_33593)){
var statearr_33644_35160 = state_33609__$1;
(statearr_33644_35160[(1)] = (23));

} else {
var statearr_33645_35161 = state_33609__$1;
(statearr_33645_35161[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (6))){
var inst_33589 = (state_33609[(11)]);
var inst_33587 = (state_33609[(7)]);
var inst_33532 = (state_33609[(8)]);
var inst_33587__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33532) : topic_fn.call(null,inst_33532));
var inst_33588 = cljs.core.deref(mults);
var inst_33589__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33588,inst_33587__$1);
var state_33609__$1 = (function (){var statearr_33650 = state_33609;
(statearr_33650[(11)] = inst_33589__$1);

(statearr_33650[(7)] = inst_33587__$1);

return statearr_33650;
})();
if(cljs.core.truth_(inst_33589__$1)){
var statearr_33651_35167 = state_33609__$1;
(statearr_33651_35167[(1)] = (19));

} else {
var statearr_33652_35168 = state_33609__$1;
(statearr_33652_35168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (25))){
var inst_33598 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33654_35169 = state_33609__$1;
(statearr_33654_35169[(2)] = inst_33598);

(statearr_33654_35169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (17))){
var inst_33560 = (state_33609[(10)]);
var inst_33572 = cljs.core.first(inst_33560);
var inst_33573 = cljs.core.async.muxch_STAR_(inst_33572);
var inst_33574 = cljs.core.async.close_BANG_(inst_33573);
var inst_33575 = cljs.core.next(inst_33560);
var inst_33542 = inst_33575;
var inst_33543 = null;
var inst_33544 = (0);
var inst_33545 = (0);
var state_33609__$1 = (function (){var statearr_33658 = state_33609;
(statearr_33658[(12)] = inst_33545);

(statearr_33658[(13)] = inst_33543);

(statearr_33658[(14)] = inst_33574);

(statearr_33658[(15)] = inst_33544);

(statearr_33658[(16)] = inst_33542);

return statearr_33658;
})();
var statearr_33660_35170 = state_33609__$1;
(statearr_33660_35170[(2)] = null);

(statearr_33660_35170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (3))){
var inst_33606 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33609__$1,inst_33606);
} else {
if((state_val_33610 === (12))){
var inst_33583 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33665_35171 = state_33609__$1;
(statearr_33665_35171[(2)] = inst_33583);

(statearr_33665_35171[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (2))){
var state_33609__$1 = state_33609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33609__$1,(4),ch);
} else {
if((state_val_33610 === (23))){
var state_33609__$1 = state_33609;
var statearr_33669_35172 = state_33609__$1;
(statearr_33669_35172[(2)] = null);

(statearr_33669_35172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (19))){
var inst_33589 = (state_33609[(11)]);
var inst_33532 = (state_33609[(8)]);
var inst_33591 = cljs.core.async.muxch_STAR_(inst_33589);
var state_33609__$1 = state_33609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33609__$1,(22),inst_33591,inst_33532);
} else {
if((state_val_33610 === (11))){
var inst_33560 = (state_33609[(10)]);
var inst_33542 = (state_33609[(16)]);
var inst_33560__$1 = cljs.core.seq(inst_33542);
var state_33609__$1 = (function (){var statearr_33674 = state_33609;
(statearr_33674[(10)] = inst_33560__$1);

return statearr_33674;
})();
if(inst_33560__$1){
var statearr_33675_35173 = state_33609__$1;
(statearr_33675_35173[(1)] = (13));

} else {
var statearr_33677_35175 = state_33609__$1;
(statearr_33677_35175[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (9))){
var inst_33585 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33678_35179 = state_33609__$1;
(statearr_33678_35179[(2)] = inst_33585);

(statearr_33678_35179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (5))){
var inst_33539 = cljs.core.deref(mults);
var inst_33540 = cljs.core.vals(inst_33539);
var inst_33541 = cljs.core.seq(inst_33540);
var inst_33542 = inst_33541;
var inst_33543 = null;
var inst_33544 = (0);
var inst_33545 = (0);
var state_33609__$1 = (function (){var statearr_33682 = state_33609;
(statearr_33682[(12)] = inst_33545);

(statearr_33682[(13)] = inst_33543);

(statearr_33682[(15)] = inst_33544);

(statearr_33682[(16)] = inst_33542);

return statearr_33682;
})();
var statearr_33684_35180 = state_33609__$1;
(statearr_33684_35180[(2)] = null);

(statearr_33684_35180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (14))){
var state_33609__$1 = state_33609;
var statearr_33691_35181 = state_33609__$1;
(statearr_33691_35181[(2)] = null);

(statearr_33691_35181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (16))){
var inst_33560 = (state_33609[(10)]);
var inst_33565 = cljs.core.chunk_first(inst_33560);
var inst_33567 = cljs.core.chunk_rest(inst_33560);
var inst_33568 = cljs.core.count(inst_33565);
var inst_33542 = inst_33567;
var inst_33543 = inst_33565;
var inst_33544 = inst_33568;
var inst_33545 = (0);
var state_33609__$1 = (function (){var statearr_33695 = state_33609;
(statearr_33695[(12)] = inst_33545);

(statearr_33695[(13)] = inst_33543);

(statearr_33695[(15)] = inst_33544);

(statearr_33695[(16)] = inst_33542);

return statearr_33695;
})();
var statearr_33696_35182 = state_33609__$1;
(statearr_33696_35182[(2)] = null);

(statearr_33696_35182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (10))){
var inst_33545 = (state_33609[(12)]);
var inst_33543 = (state_33609[(13)]);
var inst_33544 = (state_33609[(15)]);
var inst_33542 = (state_33609[(16)]);
var inst_33551 = cljs.core._nth(inst_33543,inst_33545);
var inst_33555 = cljs.core.async.muxch_STAR_(inst_33551);
var inst_33556 = cljs.core.async.close_BANG_(inst_33555);
var inst_33557 = (inst_33545 + (1));
var tmp33685 = inst_33543;
var tmp33686 = inst_33544;
var tmp33687 = inst_33542;
var inst_33542__$1 = tmp33687;
var inst_33543__$1 = tmp33685;
var inst_33544__$1 = tmp33686;
var inst_33545__$1 = inst_33557;
var state_33609__$1 = (function (){var statearr_33701 = state_33609;
(statearr_33701[(12)] = inst_33545__$1);

(statearr_33701[(13)] = inst_33543__$1);

(statearr_33701[(15)] = inst_33544__$1);

(statearr_33701[(17)] = inst_33556);

(statearr_33701[(16)] = inst_33542__$1);

return statearr_33701;
})();
var statearr_33705_35191 = state_33609__$1;
(statearr_33705_35191[(2)] = null);

(statearr_33705_35191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (18))){
var inst_33578 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33707_35195 = state_33609__$1;
(statearr_33707_35195[(2)] = inst_33578);

(statearr_33707_35195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (8))){
var inst_33545 = (state_33609[(12)]);
var inst_33544 = (state_33609[(15)]);
var inst_33547 = (inst_33545 < inst_33544);
var inst_33548 = inst_33547;
var state_33609__$1 = state_33609;
if(cljs.core.truth_(inst_33548)){
var statearr_33710_35199 = state_33609__$1;
(statearr_33710_35199[(1)] = (10));

} else {
var statearr_33712_35200 = state_33609__$1;
(statearr_33712_35200[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32205__auto__ = null;
var cljs$core$async$state_machine__32205__auto____0 = (function (){
var statearr_33714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33714[(0)] = cljs$core$async$state_machine__32205__auto__);

(statearr_33714[(1)] = (1));

return statearr_33714;
});
var cljs$core$async$state_machine__32205__auto____1 = (function (state_33609){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_33609);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e33718){var ex__32208__auto__ = e33718;
var statearr_33719_35201 = state_33609;
(statearr_33719_35201[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_33609[(4)]))){
var statearr_33720_35202 = state_33609;
(statearr_33720_35202[(1)] = cljs.core.first((state_33609[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35203 = state_33609;
state_33609 = G__35203;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$state_machine__32205__auto__ = function(state_33609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32205__auto____1.call(this,state_33609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32205__auto____0;
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32205__auto____1;
return cljs$core$async$state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_33724 = f__32318__auto__();
(statearr_33724[(6)] = c__32317__auto___35145);

return statearr_33724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33728 = arguments.length;
switch (G__33728) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33740 = arguments.length;
switch (G__33740) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33752 = arguments.length;
switch (G__33752) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__32317__auto___35220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_33812){
var state_val_33813 = (state_33812[(1)]);
if((state_val_33813 === (7))){
var state_33812__$1 = state_33812;
var statearr_33818_35221 = state_33812__$1;
(statearr_33818_35221[(2)] = null);

(statearr_33818_35221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (1))){
var state_33812__$1 = state_33812;
var statearr_33819_35222 = state_33812__$1;
(statearr_33819_35222[(2)] = null);

(statearr_33819_35222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (4))){
var inst_33765 = (state_33812[(7)]);
var inst_33764 = (state_33812[(8)]);
var inst_33767 = (inst_33765 < inst_33764);
var state_33812__$1 = state_33812;
if(cljs.core.truth_(inst_33767)){
var statearr_33825_35223 = state_33812__$1;
(statearr_33825_35223[(1)] = (6));

} else {
var statearr_33826_35224 = state_33812__$1;
(statearr_33826_35224[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (15))){
var inst_33797 = (state_33812[(9)]);
var inst_33803 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33797);
var state_33812__$1 = state_33812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33812__$1,(17),out,inst_33803);
} else {
if((state_val_33813 === (13))){
var inst_33797 = (state_33812[(9)]);
var inst_33797__$1 = (state_33812[(2)]);
var inst_33798 = cljs.core.some(cljs.core.nil_QMARK_,inst_33797__$1);
var state_33812__$1 = (function (){var statearr_33831 = state_33812;
(statearr_33831[(9)] = inst_33797__$1);

return statearr_33831;
})();
if(cljs.core.truth_(inst_33798)){
var statearr_33832_35225 = state_33812__$1;
(statearr_33832_35225[(1)] = (14));

} else {
var statearr_33833_35226 = state_33812__$1;
(statearr_33833_35226[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (6))){
var state_33812__$1 = state_33812;
var statearr_33834_35227 = state_33812__$1;
(statearr_33834_35227[(2)] = null);

(statearr_33834_35227[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (17))){
var inst_33805 = (state_33812[(2)]);
var state_33812__$1 = (function (){var statearr_33840 = state_33812;
(statearr_33840[(10)] = inst_33805);

return statearr_33840;
})();
var statearr_33841_35228 = state_33812__$1;
(statearr_33841_35228[(2)] = null);

(statearr_33841_35228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (3))){
var inst_33810 = (state_33812[(2)]);
var state_33812__$1 = state_33812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33812__$1,inst_33810);
} else {
if((state_val_33813 === (12))){
var _ = (function (){var statearr_33846 = state_33812;
(statearr_33846[(4)] = cljs.core.rest((state_33812[(4)])));

return statearr_33846;
})();
var state_33812__$1 = state_33812;
var ex33839 = (state_33812__$1[(2)]);
var statearr_33847_35229 = state_33812__$1;
(statearr_33847_35229[(5)] = ex33839);


if((ex33839 instanceof Object)){
var statearr_33848_35230 = state_33812__$1;
(statearr_33848_35230[(1)] = (11));

(statearr_33848_35230[(5)] = null);

} else {
throw ex33839;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (2))){
var inst_33763 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33764 = cnt;
var inst_33765 = (0);
var state_33812__$1 = (function (){var statearr_33853 = state_33812;
(statearr_33853[(11)] = inst_33763);

(statearr_33853[(7)] = inst_33765);

(statearr_33853[(8)] = inst_33764);

return statearr_33853;
})();
var statearr_33854_35231 = state_33812__$1;
(statearr_33854_35231[(2)] = null);

(statearr_33854_35231[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (11))){
var inst_33773 = (state_33812[(2)]);
var inst_33774 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33812__$1 = (function (){var statearr_33856 = state_33812;
(statearr_33856[(12)] = inst_33773);

return statearr_33856;
})();
var statearr_33857_35232 = state_33812__$1;
(statearr_33857_35232[(2)] = inst_33774);

(statearr_33857_35232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (9))){
var inst_33765 = (state_33812[(7)]);
var _ = (function (){var statearr_33858 = state_33812;
(statearr_33858[(4)] = cljs.core.cons((12),(state_33812[(4)])));

return statearr_33858;
})();
var inst_33783 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33765) : chs__$1.call(null,inst_33765));
var inst_33784 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33765) : done.call(null,inst_33765));
var inst_33785 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33783,inst_33784);
var ___$1 = (function (){var statearr_33859 = state_33812;
(statearr_33859[(4)] = cljs.core.rest((state_33812[(4)])));

return statearr_33859;
})();
var state_33812__$1 = state_33812;
var statearr_33860_35233 = state_33812__$1;
(statearr_33860_35233[(2)] = inst_33785);

(statearr_33860_35233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (5))){
var inst_33795 = (state_33812[(2)]);
var state_33812__$1 = (function (){var statearr_33865 = state_33812;
(statearr_33865[(13)] = inst_33795);

return statearr_33865;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33812__$1,(13),dchan);
} else {
if((state_val_33813 === (14))){
var inst_33801 = cljs.core.async.close_BANG_(out);
var state_33812__$1 = state_33812;
var statearr_33869_35235 = state_33812__$1;
(statearr_33869_35235[(2)] = inst_33801);

(statearr_33869_35235[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (16))){
var inst_33808 = (state_33812[(2)]);
var state_33812__$1 = state_33812;
var statearr_33871_35239 = state_33812__$1;
(statearr_33871_35239[(2)] = inst_33808);

(statearr_33871_35239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (10))){
var inst_33765 = (state_33812[(7)]);
var inst_33788 = (state_33812[(2)]);
var inst_33789 = (inst_33765 + (1));
var inst_33765__$1 = inst_33789;
var state_33812__$1 = (function (){var statearr_33872 = state_33812;
(statearr_33872[(7)] = inst_33765__$1);

(statearr_33872[(14)] = inst_33788);

return statearr_33872;
})();
var statearr_33873_35240 = state_33812__$1;
(statearr_33873_35240[(2)] = null);

(statearr_33873_35240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (8))){
var inst_33793 = (state_33812[(2)]);
var state_33812__$1 = state_33812;
var statearr_33878_35241 = state_33812__$1;
(statearr_33878_35241[(2)] = inst_33793);

(statearr_33878_35241[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32205__auto__ = null;
var cljs$core$async$state_machine__32205__auto____0 = (function (){
var statearr_33882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33882[(0)] = cljs$core$async$state_machine__32205__auto__);

(statearr_33882[(1)] = (1));

return statearr_33882;
});
var cljs$core$async$state_machine__32205__auto____1 = (function (state_33812){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_33812);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e33884){var ex__32208__auto__ = e33884;
var statearr_33885_35243 = state_33812;
(statearr_33885_35243[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_33812[(4)]))){
var statearr_33886_35244 = state_33812;
(statearr_33886_35244[(1)] = cljs.core.first((state_33812[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35245 = state_33812;
state_33812 = G__35245;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$state_machine__32205__auto__ = function(state_33812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32205__auto____1.call(this,state_33812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32205__auto____0;
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32205__auto____1;
return cljs$core$async$state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_33890 = f__32318__auto__();
(statearr_33890[(6)] = c__32317__auto___35220);

return statearr_33890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33894 = arguments.length;
switch (G__33894) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32317__auto___35251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_33935){
var state_val_33936 = (state_33935[(1)]);
if((state_val_33936 === (7))){
var inst_33907 = (state_33935[(7)]);
var inst_33906 = (state_33935[(8)]);
var inst_33906__$1 = (state_33935[(2)]);
var inst_33907__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33906__$1,(0),null);
var inst_33908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33906__$1,(1),null);
var inst_33913 = (inst_33907__$1 == null);
var state_33935__$1 = (function (){var statearr_33941 = state_33935;
(statearr_33941[(7)] = inst_33907__$1);

(statearr_33941[(9)] = inst_33908);

(statearr_33941[(8)] = inst_33906__$1);

return statearr_33941;
})();
if(cljs.core.truth_(inst_33913)){
var statearr_33942_35252 = state_33935__$1;
(statearr_33942_35252[(1)] = (8));

} else {
var statearr_33946_35253 = state_33935__$1;
(statearr_33946_35253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (1))){
var inst_33896 = cljs.core.vec(chs);
var inst_33897 = inst_33896;
var state_33935__$1 = (function (){var statearr_33951 = state_33935;
(statearr_33951[(10)] = inst_33897);

return statearr_33951;
})();
var statearr_33953_35257 = state_33935__$1;
(statearr_33953_35257[(2)] = null);

(statearr_33953_35257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (4))){
var inst_33897 = (state_33935[(10)]);
var state_33935__$1 = state_33935;
return cljs.core.async.ioc_alts_BANG_(state_33935__$1,(7),inst_33897);
} else {
if((state_val_33936 === (6))){
var inst_33931 = (state_33935[(2)]);
var state_33935__$1 = state_33935;
var statearr_33954_35258 = state_33935__$1;
(statearr_33954_35258[(2)] = inst_33931);

(statearr_33954_35258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (3))){
var inst_33933 = (state_33935[(2)]);
var state_33935__$1 = state_33935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33935__$1,inst_33933);
} else {
if((state_val_33936 === (2))){
var inst_33897 = (state_33935[(10)]);
var inst_33899 = cljs.core.count(inst_33897);
var inst_33900 = (inst_33899 > (0));
var state_33935__$1 = state_33935;
if(cljs.core.truth_(inst_33900)){
var statearr_33956_35259 = state_33935__$1;
(statearr_33956_35259[(1)] = (4));

} else {
var statearr_33957_35260 = state_33935__$1;
(statearr_33957_35260[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (11))){
var inst_33897 = (state_33935[(10)]);
var inst_33924 = (state_33935[(2)]);
var tmp33955 = inst_33897;
var inst_33897__$1 = tmp33955;
var state_33935__$1 = (function (){var statearr_33958 = state_33935;
(statearr_33958[(11)] = inst_33924);

(statearr_33958[(10)] = inst_33897__$1);

return statearr_33958;
})();
var statearr_33959_35261 = state_33935__$1;
(statearr_33959_35261[(2)] = null);

(statearr_33959_35261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (9))){
var inst_33907 = (state_33935[(7)]);
var state_33935__$1 = state_33935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33935__$1,(11),out,inst_33907);
} else {
if((state_val_33936 === (5))){
var inst_33929 = cljs.core.async.close_BANG_(out);
var state_33935__$1 = state_33935;
var statearr_33964_35262 = state_33935__$1;
(statearr_33964_35262[(2)] = inst_33929);

(statearr_33964_35262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (10))){
var inst_33927 = (state_33935[(2)]);
var state_33935__$1 = state_33935;
var statearr_33966_35263 = state_33935__$1;
(statearr_33966_35263[(2)] = inst_33927);

(statearr_33966_35263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (8))){
var inst_33897 = (state_33935[(10)]);
var inst_33907 = (state_33935[(7)]);
var inst_33908 = (state_33935[(9)]);
var inst_33906 = (state_33935[(8)]);
var inst_33918 = (function (){var cs = inst_33897;
var vec__33902 = inst_33906;
var v = inst_33907;
var c = inst_33908;
return (function (p1__33892_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33892_SHARP_);
});
})();
var inst_33920 = cljs.core.filterv(inst_33918,inst_33897);
var inst_33897__$1 = inst_33920;
var state_33935__$1 = (function (){var statearr_33967 = state_33935;
(statearr_33967[(10)] = inst_33897__$1);

return statearr_33967;
})();
var statearr_33968_35268 = state_33935__$1;
(statearr_33968_35268[(2)] = null);

(statearr_33968_35268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32205__auto__ = null;
var cljs$core$async$state_machine__32205__auto____0 = (function (){
var statearr_33969 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33969[(0)] = cljs$core$async$state_machine__32205__auto__);

(statearr_33969[(1)] = (1));

return statearr_33969;
});
var cljs$core$async$state_machine__32205__auto____1 = (function (state_33935){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_33935);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e33970){var ex__32208__auto__ = e33970;
var statearr_33971_35270 = state_33935;
(statearr_33971_35270[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_33935[(4)]))){
var statearr_33972_35271 = state_33935;
(statearr_33972_35271[(1)] = cljs.core.first((state_33935[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35272 = state_33935;
state_33935 = G__35272;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$state_machine__32205__auto__ = function(state_33935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32205__auto____1.call(this,state_33935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32205__auto____0;
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32205__auto____1;
return cljs$core$async$state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_33973 = f__32318__auto__();
(statearr_33973[(6)] = c__32317__auto___35251);

return statearr_33973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33977 = arguments.length;
switch (G__33977) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32317__auto___35275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_34001){
var state_val_34002 = (state_34001[(1)]);
if((state_val_34002 === (7))){
var inst_33983 = (state_34001[(7)]);
var inst_33983__$1 = (state_34001[(2)]);
var inst_33984 = (inst_33983__$1 == null);
var inst_33985 = cljs.core.not(inst_33984);
var state_34001__$1 = (function (){var statearr_34003 = state_34001;
(statearr_34003[(7)] = inst_33983__$1);

return statearr_34003;
})();
if(inst_33985){
var statearr_34004_35276 = state_34001__$1;
(statearr_34004_35276[(1)] = (8));

} else {
var statearr_34005_35277 = state_34001__$1;
(statearr_34005_35277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (1))){
var inst_33978 = (0);
var state_34001__$1 = (function (){var statearr_34006 = state_34001;
(statearr_34006[(8)] = inst_33978);

return statearr_34006;
})();
var statearr_34007_35279 = state_34001__$1;
(statearr_34007_35279[(2)] = null);

(statearr_34007_35279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (4))){
var state_34001__$1 = state_34001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34001__$1,(7),ch);
} else {
if((state_val_34002 === (6))){
var inst_33996 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34008_35280 = state_34001__$1;
(statearr_34008_35280[(2)] = inst_33996);

(statearr_34008_35280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (3))){
var inst_33998 = (state_34001[(2)]);
var inst_33999 = cljs.core.async.close_BANG_(out);
var state_34001__$1 = (function (){var statearr_34009 = state_34001;
(statearr_34009[(9)] = inst_33998);

return statearr_34009;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34001__$1,inst_33999);
} else {
if((state_val_34002 === (2))){
var inst_33978 = (state_34001[(8)]);
var inst_33980 = (inst_33978 < n);
var state_34001__$1 = state_34001;
if(cljs.core.truth_(inst_33980)){
var statearr_34010_35282 = state_34001__$1;
(statearr_34010_35282[(1)] = (4));

} else {
var statearr_34011_35286 = state_34001__$1;
(statearr_34011_35286[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (11))){
var inst_33978 = (state_34001[(8)]);
var inst_33988 = (state_34001[(2)]);
var inst_33989 = (inst_33978 + (1));
var inst_33978__$1 = inst_33989;
var state_34001__$1 = (function (){var statearr_34012 = state_34001;
(statearr_34012[(10)] = inst_33988);

(statearr_34012[(8)] = inst_33978__$1);

return statearr_34012;
})();
var statearr_34013_35287 = state_34001__$1;
(statearr_34013_35287[(2)] = null);

(statearr_34013_35287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (9))){
var state_34001__$1 = state_34001;
var statearr_34014_35292 = state_34001__$1;
(statearr_34014_35292[(2)] = null);

(statearr_34014_35292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (5))){
var state_34001__$1 = state_34001;
var statearr_34015_35293 = state_34001__$1;
(statearr_34015_35293[(2)] = null);

(statearr_34015_35293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (10))){
var inst_33993 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34016_35294 = state_34001__$1;
(statearr_34016_35294[(2)] = inst_33993);

(statearr_34016_35294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (8))){
var inst_33983 = (state_34001[(7)]);
var state_34001__$1 = state_34001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34001__$1,(11),out,inst_33983);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32205__auto__ = null;
var cljs$core$async$state_machine__32205__auto____0 = (function (){
var statearr_34017 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34017[(0)] = cljs$core$async$state_machine__32205__auto__);

(statearr_34017[(1)] = (1));

return statearr_34017;
});
var cljs$core$async$state_machine__32205__auto____1 = (function (state_34001){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_34001);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e34018){var ex__32208__auto__ = e34018;
var statearr_34019_35299 = state_34001;
(statearr_34019_35299[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_34001[(4)]))){
var statearr_34020_35300 = state_34001;
(statearr_34020_35300[(1)] = cljs.core.first((state_34001[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35301 = state_34001;
state_34001 = G__35301;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$state_machine__32205__auto__ = function(state_34001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32205__auto____1.call(this,state_34001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32205__auto____0;
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32205__auto____1;
return cljs$core$async$state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_34021 = f__32318__auto__();
(statearr_34021[(6)] = c__32317__auto___35275);

return statearr_34021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34023 = (function (f,ch,meta34024){
this.f = f;
this.ch = ch;
this.meta34024 = meta34024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34025,meta34024__$1){
var self__ = this;
var _34025__$1 = this;
return (new cljs.core.async.t_cljs$core$async34023(self__.f,self__.ch,meta34024__$1));
}));

(cljs.core.async.t_cljs$core$async34023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34025){
var self__ = this;
var _34025__$1 = this;
return self__.meta34024;
}));

(cljs.core.async.t_cljs$core$async34023.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34023.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34023.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34023.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34023.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34028 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34028 = (function (f,ch,meta34024,_,fn1,meta34029){
this.f = f;
this.ch = ch;
this.meta34024 = meta34024;
this._ = _;
this.fn1 = fn1;
this.meta34029 = meta34029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34030,meta34029__$1){
var self__ = this;
var _34030__$1 = this;
return (new cljs.core.async.t_cljs$core$async34028(self__.f,self__.ch,self__.meta34024,self__._,self__.fn1,meta34029__$1));
}));

(cljs.core.async.t_cljs$core$async34028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34030){
var self__ = this;
var _34030__$1 = this;
return self__.meta34029;
}));

(cljs.core.async.t_cljs$core$async34028.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34028.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34022_SHARP_){
var G__34033 = (((p1__34022_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34022_SHARP_) : self__.f.call(null,p1__34022_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34033) : f1.call(null,G__34033));
});
}));

(cljs.core.async.t_cljs$core$async34028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34024","meta34024",-388980461,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34023","cljs.core.async/t_cljs$core$async34023",956919424,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34029","meta34029",2076966059,null)], null);
}));

(cljs.core.async.t_cljs$core$async34028.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34028");

(cljs.core.async.t_cljs$core$async34028.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34028");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34028.
 */
cljs.core.async.__GT_t_cljs$core$async34028 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34028(f__$1,ch__$1,meta34024__$1,___$2,fn1__$1,meta34029){
return (new cljs.core.async.t_cljs$core$async34028(f__$1,ch__$1,meta34024__$1,___$2,fn1__$1,meta34029));
});

}

return (new cljs.core.async.t_cljs$core$async34028(self__.f,self__.ch,self__.meta34024,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34036 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34036) : self__.f.call(null,G__34036));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34023.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34023.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34024","meta34024",-388980461,null)], null);
}));

(cljs.core.async.t_cljs$core$async34023.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34023");

(cljs.core.async.t_cljs$core$async34023.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34023");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34023.
 */
cljs.core.async.__GT_t_cljs$core$async34023 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34023(f__$1,ch__$1,meta34024){
return (new cljs.core.async.t_cljs$core$async34023(f__$1,ch__$1,meta34024));
});

}

return (new cljs.core.async.t_cljs$core$async34023(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34037 = (function (f,ch,meta34038){
this.f = f;
this.ch = ch;
this.meta34038 = meta34038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34039,meta34038__$1){
var self__ = this;
var _34039__$1 = this;
return (new cljs.core.async.t_cljs$core$async34037(self__.f,self__.ch,meta34038__$1));
}));

(cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34039){
var self__ = this;
var _34039__$1 = this;
return self__.meta34038;
}));

(cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34038","meta34038",1755654017,null)], null);
}));

(cljs.core.async.t_cljs$core$async34037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34037");

(cljs.core.async.t_cljs$core$async34037.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34037.
 */
cljs.core.async.__GT_t_cljs$core$async34037 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34037(f__$1,ch__$1,meta34038){
return (new cljs.core.async.t_cljs$core$async34037(f__$1,ch__$1,meta34038));
});

}

return (new cljs.core.async.t_cljs$core$async34037(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34051 = (function (p,ch,meta34052){
this.p = p;
this.ch = ch;
this.meta34052 = meta34052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34053,meta34052__$1){
var self__ = this;
var _34053__$1 = this;
return (new cljs.core.async.t_cljs$core$async34051(self__.p,self__.ch,meta34052__$1));
}));

(cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34053){
var self__ = this;
var _34053__$1 = this;
return self__.meta34052;
}));

(cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34051.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34052","meta34052",1306445307,null)], null);
}));

(cljs.core.async.t_cljs$core$async34051.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34051");

(cljs.core.async.t_cljs$core$async34051.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34051");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34051.
 */
cljs.core.async.__GT_t_cljs$core$async34051 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34051(p__$1,ch__$1,meta34052){
return (new cljs.core.async.t_cljs$core$async34051(p__$1,ch__$1,meta34052));
});

}

return (new cljs.core.async.t_cljs$core$async34051(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34077 = arguments.length;
switch (G__34077) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32317__auto___35313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_34111){
var state_val_34112 = (state_34111[(1)]);
if((state_val_34112 === (7))){
var inst_34104 = (state_34111[(2)]);
var state_34111__$1 = state_34111;
var statearr_34113_35315 = state_34111__$1;
(statearr_34113_35315[(2)] = inst_34104);

(statearr_34113_35315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (1))){
var state_34111__$1 = state_34111;
var statearr_34114_35316 = state_34111__$1;
(statearr_34114_35316[(2)] = null);

(statearr_34114_35316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (4))){
var inst_34090 = (state_34111[(7)]);
var inst_34090__$1 = (state_34111[(2)]);
var inst_34091 = (inst_34090__$1 == null);
var state_34111__$1 = (function (){var statearr_34115 = state_34111;
(statearr_34115[(7)] = inst_34090__$1);

return statearr_34115;
})();
if(cljs.core.truth_(inst_34091)){
var statearr_34116_35320 = state_34111__$1;
(statearr_34116_35320[(1)] = (5));

} else {
var statearr_34117_35321 = state_34111__$1;
(statearr_34117_35321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (6))){
var inst_34090 = (state_34111[(7)]);
var inst_34095 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34090) : p.call(null,inst_34090));
var state_34111__$1 = state_34111;
if(cljs.core.truth_(inst_34095)){
var statearr_34118_35322 = state_34111__$1;
(statearr_34118_35322[(1)] = (8));

} else {
var statearr_34119_35323 = state_34111__$1;
(statearr_34119_35323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (3))){
var inst_34106 = (state_34111[(2)]);
var state_34111__$1 = state_34111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34111__$1,inst_34106);
} else {
if((state_val_34112 === (2))){
var state_34111__$1 = state_34111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34111__$1,(4),ch);
} else {
if((state_val_34112 === (11))){
var inst_34098 = (state_34111[(2)]);
var state_34111__$1 = state_34111;
var statearr_34124_35324 = state_34111__$1;
(statearr_34124_35324[(2)] = inst_34098);

(statearr_34124_35324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (9))){
var state_34111__$1 = state_34111;
var statearr_34125_35325 = state_34111__$1;
(statearr_34125_35325[(2)] = null);

(statearr_34125_35325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (5))){
var inst_34093 = cljs.core.async.close_BANG_(out);
var state_34111__$1 = state_34111;
var statearr_34126_35326 = state_34111__$1;
(statearr_34126_35326[(2)] = inst_34093);

(statearr_34126_35326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (10))){
var inst_34101 = (state_34111[(2)]);
var state_34111__$1 = (function (){var statearr_34127 = state_34111;
(statearr_34127[(8)] = inst_34101);

return statearr_34127;
})();
var statearr_34128_35327 = state_34111__$1;
(statearr_34128_35327[(2)] = null);

(statearr_34128_35327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (8))){
var inst_34090 = (state_34111[(7)]);
var state_34111__$1 = state_34111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34111__$1,(11),out,inst_34090);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32205__auto__ = null;
var cljs$core$async$state_machine__32205__auto____0 = (function (){
var statearr_34129 = [null,null,null,null,null,null,null,null,null];
(statearr_34129[(0)] = cljs$core$async$state_machine__32205__auto__);

(statearr_34129[(1)] = (1));

return statearr_34129;
});
var cljs$core$async$state_machine__32205__auto____1 = (function (state_34111){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_34111);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e34130){var ex__32208__auto__ = e34130;
var statearr_34131_35328 = state_34111;
(statearr_34131_35328[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_34111[(4)]))){
var statearr_34132_35329 = state_34111;
(statearr_34132_35329[(1)] = cljs.core.first((state_34111[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35330 = state_34111;
state_34111 = G__35330;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$state_machine__32205__auto__ = function(state_34111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32205__auto____1.call(this,state_34111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32205__auto____0;
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32205__auto____1;
return cljs$core$async$state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_34137 = f__32318__auto__();
(statearr_34137[(6)] = c__32317__auto___35313);

return statearr_34137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34141 = arguments.length;
switch (G__34141) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32317__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_34205){
var state_val_34206 = (state_34205[(1)]);
if((state_val_34206 === (7))){
var inst_34201 = (state_34205[(2)]);
var state_34205__$1 = state_34205;
var statearr_34209_35332 = state_34205__$1;
(statearr_34209_35332[(2)] = inst_34201);

(statearr_34209_35332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (20))){
var inst_34171 = (state_34205[(7)]);
var inst_34182 = (state_34205[(2)]);
var inst_34183 = cljs.core.next(inst_34171);
var inst_34157 = inst_34183;
var inst_34158 = null;
var inst_34159 = (0);
var inst_34160 = (0);
var state_34205__$1 = (function (){var statearr_34210 = state_34205;
(statearr_34210[(8)] = inst_34158);

(statearr_34210[(9)] = inst_34160);

(statearr_34210[(10)] = inst_34157);

(statearr_34210[(11)] = inst_34182);

(statearr_34210[(12)] = inst_34159);

return statearr_34210;
})();
var statearr_34211_35334 = state_34205__$1;
(statearr_34211_35334[(2)] = null);

(statearr_34211_35334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (1))){
var state_34205__$1 = state_34205;
var statearr_34213_35335 = state_34205__$1;
(statearr_34213_35335[(2)] = null);

(statearr_34213_35335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (4))){
var inst_34146 = (state_34205[(13)]);
var inst_34146__$1 = (state_34205[(2)]);
var inst_34147 = (inst_34146__$1 == null);
var state_34205__$1 = (function (){var statearr_34218 = state_34205;
(statearr_34218[(13)] = inst_34146__$1);

return statearr_34218;
})();
if(cljs.core.truth_(inst_34147)){
var statearr_34219_35336 = state_34205__$1;
(statearr_34219_35336[(1)] = (5));

} else {
var statearr_34220_35337 = state_34205__$1;
(statearr_34220_35337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (15))){
var state_34205__$1 = state_34205;
var statearr_34224_35338 = state_34205__$1;
(statearr_34224_35338[(2)] = null);

(statearr_34224_35338[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (21))){
var state_34205__$1 = state_34205;
var statearr_34225_35340 = state_34205__$1;
(statearr_34225_35340[(2)] = null);

(statearr_34225_35340[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (13))){
var inst_34158 = (state_34205[(8)]);
var inst_34160 = (state_34205[(9)]);
var inst_34157 = (state_34205[(10)]);
var inst_34159 = (state_34205[(12)]);
var inst_34167 = (state_34205[(2)]);
var inst_34168 = (inst_34160 + (1));
var tmp34221 = inst_34158;
var tmp34222 = inst_34157;
var tmp34223 = inst_34159;
var inst_34157__$1 = tmp34222;
var inst_34158__$1 = tmp34221;
var inst_34159__$1 = tmp34223;
var inst_34160__$1 = inst_34168;
var state_34205__$1 = (function (){var statearr_34226 = state_34205;
(statearr_34226[(8)] = inst_34158__$1);

(statearr_34226[(9)] = inst_34160__$1);

(statearr_34226[(14)] = inst_34167);

(statearr_34226[(10)] = inst_34157__$1);

(statearr_34226[(12)] = inst_34159__$1);

return statearr_34226;
})();
var statearr_34227_35344 = state_34205__$1;
(statearr_34227_35344[(2)] = null);

(statearr_34227_35344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (22))){
var state_34205__$1 = state_34205;
var statearr_34228_35345 = state_34205__$1;
(statearr_34228_35345[(2)] = null);

(statearr_34228_35345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (6))){
var inst_34146 = (state_34205[(13)]);
var inst_34155 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34146) : f.call(null,inst_34146));
var inst_34156 = cljs.core.seq(inst_34155);
var inst_34157 = inst_34156;
var inst_34158 = null;
var inst_34159 = (0);
var inst_34160 = (0);
var state_34205__$1 = (function (){var statearr_34229 = state_34205;
(statearr_34229[(8)] = inst_34158);

(statearr_34229[(9)] = inst_34160);

(statearr_34229[(10)] = inst_34157);

(statearr_34229[(12)] = inst_34159);

return statearr_34229;
})();
var statearr_34230_35350 = state_34205__$1;
(statearr_34230_35350[(2)] = null);

(statearr_34230_35350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (17))){
var inst_34171 = (state_34205[(7)]);
var inst_34175 = cljs.core.chunk_first(inst_34171);
var inst_34176 = cljs.core.chunk_rest(inst_34171);
var inst_34177 = cljs.core.count(inst_34175);
var inst_34157 = inst_34176;
var inst_34158 = inst_34175;
var inst_34159 = inst_34177;
var inst_34160 = (0);
var state_34205__$1 = (function (){var statearr_34231 = state_34205;
(statearr_34231[(8)] = inst_34158);

(statearr_34231[(9)] = inst_34160);

(statearr_34231[(10)] = inst_34157);

(statearr_34231[(12)] = inst_34159);

return statearr_34231;
})();
var statearr_34232_35351 = state_34205__$1;
(statearr_34232_35351[(2)] = null);

(statearr_34232_35351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (3))){
var inst_34203 = (state_34205[(2)]);
var state_34205__$1 = state_34205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34205__$1,inst_34203);
} else {
if((state_val_34206 === (12))){
var inst_34191 = (state_34205[(2)]);
var state_34205__$1 = state_34205;
var statearr_34233_35354 = state_34205__$1;
(statearr_34233_35354[(2)] = inst_34191);

(statearr_34233_35354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (2))){
var state_34205__$1 = state_34205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34205__$1,(4),in$);
} else {
if((state_val_34206 === (23))){
var inst_34199 = (state_34205[(2)]);
var state_34205__$1 = state_34205;
var statearr_34234_35358 = state_34205__$1;
(statearr_34234_35358[(2)] = inst_34199);

(statearr_34234_35358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (19))){
var inst_34186 = (state_34205[(2)]);
var state_34205__$1 = state_34205;
var statearr_34235_35359 = state_34205__$1;
(statearr_34235_35359[(2)] = inst_34186);

(statearr_34235_35359[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (11))){
var inst_34171 = (state_34205[(7)]);
var inst_34157 = (state_34205[(10)]);
var inst_34171__$1 = cljs.core.seq(inst_34157);
var state_34205__$1 = (function (){var statearr_34236 = state_34205;
(statearr_34236[(7)] = inst_34171__$1);

return statearr_34236;
})();
if(inst_34171__$1){
var statearr_34237_35360 = state_34205__$1;
(statearr_34237_35360[(1)] = (14));

} else {
var statearr_34238_35361 = state_34205__$1;
(statearr_34238_35361[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (9))){
var inst_34193 = (state_34205[(2)]);
var inst_34194 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34205__$1 = (function (){var statearr_34239 = state_34205;
(statearr_34239[(15)] = inst_34193);

return statearr_34239;
})();
if(cljs.core.truth_(inst_34194)){
var statearr_34240_35362 = state_34205__$1;
(statearr_34240_35362[(1)] = (21));

} else {
var statearr_34242_35363 = state_34205__$1;
(statearr_34242_35363[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (5))){
var inst_34149 = cljs.core.async.close_BANG_(out);
var state_34205__$1 = state_34205;
var statearr_34246_35364 = state_34205__$1;
(statearr_34246_35364[(2)] = inst_34149);

(statearr_34246_35364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (14))){
var inst_34171 = (state_34205[(7)]);
var inst_34173 = cljs.core.chunked_seq_QMARK_(inst_34171);
var state_34205__$1 = state_34205;
if(inst_34173){
var statearr_34248_35365 = state_34205__$1;
(statearr_34248_35365[(1)] = (17));

} else {
var statearr_34249_35366 = state_34205__$1;
(statearr_34249_35366[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (16))){
var inst_34189 = (state_34205[(2)]);
var state_34205__$1 = state_34205;
var statearr_34251_35367 = state_34205__$1;
(statearr_34251_35367[(2)] = inst_34189);

(statearr_34251_35367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (10))){
var inst_34158 = (state_34205[(8)]);
var inst_34160 = (state_34205[(9)]);
var inst_34165 = cljs.core._nth(inst_34158,inst_34160);
var state_34205__$1 = state_34205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34205__$1,(13),out,inst_34165);
} else {
if((state_val_34206 === (18))){
var inst_34171 = (state_34205[(7)]);
var inst_34180 = cljs.core.first(inst_34171);
var state_34205__$1 = state_34205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34205__$1,(20),out,inst_34180);
} else {
if((state_val_34206 === (8))){
var inst_34160 = (state_34205[(9)]);
var inst_34159 = (state_34205[(12)]);
var inst_34162 = (inst_34160 < inst_34159);
var inst_34163 = inst_34162;
var state_34205__$1 = state_34205;
if(cljs.core.truth_(inst_34163)){
var statearr_34253_35368 = state_34205__$1;
(statearr_34253_35368[(1)] = (10));

} else {
var statearr_34254_35369 = state_34205__$1;
(statearr_34254_35369[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32205__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32205__auto____0 = (function (){
var statearr_34255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34255[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32205__auto__);

(statearr_34255[(1)] = (1));

return statearr_34255;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32205__auto____1 = (function (state_34205){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_34205);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e34257){var ex__32208__auto__ = e34257;
var statearr_34258_35370 = state_34205;
(statearr_34258_35370[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_34205[(4)]))){
var statearr_34260_35371 = state_34205;
(statearr_34260_35371[(1)] = cljs.core.first((state_34205[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35372 = state_34205;
state_34205 = G__35372;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32205__auto__ = function(state_34205){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32205__auto____1.call(this,state_34205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32205__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32205__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_34264 = f__32318__auto__();
(statearr_34264[(6)] = c__32317__auto__);

return statearr_34264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));

return c__32317__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34266 = arguments.length;
switch (G__34266) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34268 = arguments.length;
switch (G__34268) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34274 = arguments.length;
switch (G__34274) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32317__auto___35376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_34302){
var state_val_34303 = (state_34302[(1)]);
if((state_val_34303 === (7))){
var inst_34297 = (state_34302[(2)]);
var state_34302__$1 = state_34302;
var statearr_34304_35377 = state_34302__$1;
(statearr_34304_35377[(2)] = inst_34297);

(statearr_34304_35377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34303 === (1))){
var inst_34279 = null;
var state_34302__$1 = (function (){var statearr_34305 = state_34302;
(statearr_34305[(7)] = inst_34279);

return statearr_34305;
})();
var statearr_34306_35378 = state_34302__$1;
(statearr_34306_35378[(2)] = null);

(statearr_34306_35378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34303 === (4))){
var inst_34282 = (state_34302[(8)]);
var inst_34282__$1 = (state_34302[(2)]);
var inst_34283 = (inst_34282__$1 == null);
var inst_34284 = cljs.core.not(inst_34283);
var state_34302__$1 = (function (){var statearr_34307 = state_34302;
(statearr_34307[(8)] = inst_34282__$1);

return statearr_34307;
})();
if(inst_34284){
var statearr_34308_35379 = state_34302__$1;
(statearr_34308_35379[(1)] = (5));

} else {
var statearr_34309_35380 = state_34302__$1;
(statearr_34309_35380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34303 === (6))){
var state_34302__$1 = state_34302;
var statearr_34310_35382 = state_34302__$1;
(statearr_34310_35382[(2)] = null);

(statearr_34310_35382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34303 === (3))){
var inst_34299 = (state_34302[(2)]);
var inst_34300 = cljs.core.async.close_BANG_(out);
var state_34302__$1 = (function (){var statearr_34311 = state_34302;
(statearr_34311[(9)] = inst_34299);

return statearr_34311;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34302__$1,inst_34300);
} else {
if((state_val_34303 === (2))){
var state_34302__$1 = state_34302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34302__$1,(4),ch);
} else {
if((state_val_34303 === (11))){
var inst_34282 = (state_34302[(8)]);
var inst_34291 = (state_34302[(2)]);
var inst_34279 = inst_34282;
var state_34302__$1 = (function (){var statearr_34314 = state_34302;
(statearr_34314[(10)] = inst_34291);

(statearr_34314[(7)] = inst_34279);

return statearr_34314;
})();
var statearr_34315_35385 = state_34302__$1;
(statearr_34315_35385[(2)] = null);

(statearr_34315_35385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34303 === (9))){
var inst_34282 = (state_34302[(8)]);
var state_34302__$1 = state_34302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34302__$1,(11),out,inst_34282);
} else {
if((state_val_34303 === (5))){
var inst_34282 = (state_34302[(8)]);
var inst_34279 = (state_34302[(7)]);
var inst_34286 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34282,inst_34279);
var state_34302__$1 = state_34302;
if(inst_34286){
var statearr_34317_35386 = state_34302__$1;
(statearr_34317_35386[(1)] = (8));

} else {
var statearr_34321_35387 = state_34302__$1;
(statearr_34321_35387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34303 === (10))){
var inst_34294 = (state_34302[(2)]);
var state_34302__$1 = state_34302;
var statearr_34322_35391 = state_34302__$1;
(statearr_34322_35391[(2)] = inst_34294);

(statearr_34322_35391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34303 === (8))){
var inst_34279 = (state_34302[(7)]);
var tmp34316 = inst_34279;
var inst_34279__$1 = tmp34316;
var state_34302__$1 = (function (){var statearr_34323 = state_34302;
(statearr_34323[(7)] = inst_34279__$1);

return statearr_34323;
})();
var statearr_34324_35392 = state_34302__$1;
(statearr_34324_35392[(2)] = null);

(statearr_34324_35392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32205__auto__ = null;
var cljs$core$async$state_machine__32205__auto____0 = (function (){
var statearr_34325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34325[(0)] = cljs$core$async$state_machine__32205__auto__);

(statearr_34325[(1)] = (1));

return statearr_34325;
});
var cljs$core$async$state_machine__32205__auto____1 = (function (state_34302){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_34302);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e34326){var ex__32208__auto__ = e34326;
var statearr_34327_35400 = state_34302;
(statearr_34327_35400[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_34302[(4)]))){
var statearr_34328_35401 = state_34302;
(statearr_34328_35401[(1)] = cljs.core.first((state_34302[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35402 = state_34302;
state_34302 = G__35402;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$state_machine__32205__auto__ = function(state_34302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32205__auto____1.call(this,state_34302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32205__auto____0;
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32205__auto____1;
return cljs$core$async$state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_34329 = f__32318__auto__();
(statearr_34329[(6)] = c__32317__auto___35376);

return statearr_34329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34331 = arguments.length;
switch (G__34331) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32317__auto___35404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_34369){
var state_val_34370 = (state_34369[(1)]);
if((state_val_34370 === (7))){
var inst_34365 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34371_35408 = state_34369__$1;
(statearr_34371_35408[(2)] = inst_34365);

(statearr_34371_35408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (1))){
var inst_34332 = (new Array(n));
var inst_34333 = inst_34332;
var inst_34334 = (0);
var state_34369__$1 = (function (){var statearr_34372 = state_34369;
(statearr_34372[(7)] = inst_34334);

(statearr_34372[(8)] = inst_34333);

return statearr_34372;
})();
var statearr_34373_35409 = state_34369__$1;
(statearr_34373_35409[(2)] = null);

(statearr_34373_35409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (4))){
var inst_34337 = (state_34369[(9)]);
var inst_34337__$1 = (state_34369[(2)]);
var inst_34338 = (inst_34337__$1 == null);
var inst_34339 = cljs.core.not(inst_34338);
var state_34369__$1 = (function (){var statearr_34374 = state_34369;
(statearr_34374[(9)] = inst_34337__$1);

return statearr_34374;
})();
if(inst_34339){
var statearr_34375_35413 = state_34369__$1;
(statearr_34375_35413[(1)] = (5));

} else {
var statearr_34376_35414 = state_34369__$1;
(statearr_34376_35414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (15))){
var inst_34359 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34377_35415 = state_34369__$1;
(statearr_34377_35415[(2)] = inst_34359);

(statearr_34377_35415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (13))){
var state_34369__$1 = state_34369;
var statearr_34378_35416 = state_34369__$1;
(statearr_34378_35416[(2)] = null);

(statearr_34378_35416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (6))){
var inst_34334 = (state_34369[(7)]);
var inst_34355 = (inst_34334 > (0));
var state_34369__$1 = state_34369;
if(cljs.core.truth_(inst_34355)){
var statearr_34379_35417 = state_34369__$1;
(statearr_34379_35417[(1)] = (12));

} else {
var statearr_34380_35418 = state_34369__$1;
(statearr_34380_35418[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (3))){
var inst_34367 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34369__$1,inst_34367);
} else {
if((state_val_34370 === (12))){
var inst_34333 = (state_34369[(8)]);
var inst_34357 = cljs.core.vec(inst_34333);
var state_34369__$1 = state_34369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34369__$1,(15),out,inst_34357);
} else {
if((state_val_34370 === (2))){
var state_34369__$1 = state_34369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34369__$1,(4),ch);
} else {
if((state_val_34370 === (11))){
var inst_34349 = (state_34369[(2)]);
var inst_34350 = (new Array(n));
var inst_34333 = inst_34350;
var inst_34334 = (0);
var state_34369__$1 = (function (){var statearr_34381 = state_34369;
(statearr_34381[(10)] = inst_34349);

(statearr_34381[(7)] = inst_34334);

(statearr_34381[(8)] = inst_34333);

return statearr_34381;
})();
var statearr_34382_35422 = state_34369__$1;
(statearr_34382_35422[(2)] = null);

(statearr_34382_35422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (9))){
var inst_34333 = (state_34369[(8)]);
var inst_34347 = cljs.core.vec(inst_34333);
var state_34369__$1 = state_34369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34369__$1,(11),out,inst_34347);
} else {
if((state_val_34370 === (5))){
var inst_34337 = (state_34369[(9)]);
var inst_34334 = (state_34369[(7)]);
var inst_34333 = (state_34369[(8)]);
var inst_34342 = (state_34369[(11)]);
var inst_34341 = (inst_34333[inst_34334] = inst_34337);
var inst_34342__$1 = (inst_34334 + (1));
var inst_34343 = (inst_34342__$1 < n);
var state_34369__$1 = (function (){var statearr_34383 = state_34369;
(statearr_34383[(12)] = inst_34341);

(statearr_34383[(11)] = inst_34342__$1);

return statearr_34383;
})();
if(cljs.core.truth_(inst_34343)){
var statearr_34384_35428 = state_34369__$1;
(statearr_34384_35428[(1)] = (8));

} else {
var statearr_34385_35429 = state_34369__$1;
(statearr_34385_35429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (14))){
var inst_34362 = (state_34369[(2)]);
var inst_34363 = cljs.core.async.close_BANG_(out);
var state_34369__$1 = (function (){var statearr_34387 = state_34369;
(statearr_34387[(13)] = inst_34362);

return statearr_34387;
})();
var statearr_34388_35430 = state_34369__$1;
(statearr_34388_35430[(2)] = inst_34363);

(statearr_34388_35430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (10))){
var inst_34353 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34390_35435 = state_34369__$1;
(statearr_34390_35435[(2)] = inst_34353);

(statearr_34390_35435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (8))){
var inst_34333 = (state_34369[(8)]);
var inst_34342 = (state_34369[(11)]);
var tmp34386 = inst_34333;
var inst_34333__$1 = tmp34386;
var inst_34334 = inst_34342;
var state_34369__$1 = (function (){var statearr_34391 = state_34369;
(statearr_34391[(7)] = inst_34334);

(statearr_34391[(8)] = inst_34333__$1);

return statearr_34391;
})();
var statearr_34392_35436 = state_34369__$1;
(statearr_34392_35436[(2)] = null);

(statearr_34392_35436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32205__auto__ = null;
var cljs$core$async$state_machine__32205__auto____0 = (function (){
var statearr_34393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34393[(0)] = cljs$core$async$state_machine__32205__auto__);

(statearr_34393[(1)] = (1));

return statearr_34393;
});
var cljs$core$async$state_machine__32205__auto____1 = (function (state_34369){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_34369);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e34394){var ex__32208__auto__ = e34394;
var statearr_34395_35441 = state_34369;
(statearr_34395_35441[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_34369[(4)]))){
var statearr_34396_35447 = state_34369;
(statearr_34396_35447[(1)] = cljs.core.first((state_34369[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35448 = state_34369;
state_34369 = G__35448;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$state_machine__32205__auto__ = function(state_34369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32205__auto____1.call(this,state_34369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32205__auto____0;
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32205__auto____1;
return cljs$core$async$state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_34400 = f__32318__auto__();
(statearr_34400[(6)] = c__32317__auto___35404);

return statearr_34400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34402 = arguments.length;
switch (G__34402) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32317__auto___35450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32318__auto__ = (function (){var switch__32204__auto__ = (function (state_34451){
var state_val_34452 = (state_34451[(1)]);
if((state_val_34452 === (7))){
var inst_34447 = (state_34451[(2)]);
var state_34451__$1 = state_34451;
var statearr_34453_35457 = state_34451__$1;
(statearr_34453_35457[(2)] = inst_34447);

(statearr_34453_35457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (1))){
var inst_34407 = [];
var inst_34408 = inst_34407;
var inst_34409 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34451__$1 = (function (){var statearr_34454 = state_34451;
(statearr_34454[(7)] = inst_34409);

(statearr_34454[(8)] = inst_34408);

return statearr_34454;
})();
var statearr_34455_35458 = state_34451__$1;
(statearr_34455_35458[(2)] = null);

(statearr_34455_35458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (4))){
var inst_34412 = (state_34451[(9)]);
var inst_34412__$1 = (state_34451[(2)]);
var inst_34413 = (inst_34412__$1 == null);
var inst_34414 = cljs.core.not(inst_34413);
var state_34451__$1 = (function (){var statearr_34456 = state_34451;
(statearr_34456[(9)] = inst_34412__$1);

return statearr_34456;
})();
if(inst_34414){
var statearr_34457_35459 = state_34451__$1;
(statearr_34457_35459[(1)] = (5));

} else {
var statearr_34458_35460 = state_34451__$1;
(statearr_34458_35460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (15))){
var inst_34408 = (state_34451[(8)]);
var inst_34439 = cljs.core.vec(inst_34408);
var state_34451__$1 = state_34451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34451__$1,(18),out,inst_34439);
} else {
if((state_val_34452 === (13))){
var inst_34434 = (state_34451[(2)]);
var state_34451__$1 = state_34451;
var statearr_34459_35461 = state_34451__$1;
(statearr_34459_35461[(2)] = inst_34434);

(statearr_34459_35461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (6))){
var inst_34408 = (state_34451[(8)]);
var inst_34436 = inst_34408.length;
var inst_34437 = (inst_34436 > (0));
var state_34451__$1 = state_34451;
if(cljs.core.truth_(inst_34437)){
var statearr_34460_35462 = state_34451__$1;
(statearr_34460_35462[(1)] = (15));

} else {
var statearr_34461_35463 = state_34451__$1;
(statearr_34461_35463[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (17))){
var inst_34444 = (state_34451[(2)]);
var inst_34445 = cljs.core.async.close_BANG_(out);
var state_34451__$1 = (function (){var statearr_34462 = state_34451;
(statearr_34462[(10)] = inst_34444);

return statearr_34462;
})();
var statearr_34463_35464 = state_34451__$1;
(statearr_34463_35464[(2)] = inst_34445);

(statearr_34463_35464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (3))){
var inst_34449 = (state_34451[(2)]);
var state_34451__$1 = state_34451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34451__$1,inst_34449);
} else {
if((state_val_34452 === (12))){
var inst_34408 = (state_34451[(8)]);
var inst_34427 = cljs.core.vec(inst_34408);
var state_34451__$1 = state_34451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34451__$1,(14),out,inst_34427);
} else {
if((state_val_34452 === (2))){
var state_34451__$1 = state_34451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34451__$1,(4),ch);
} else {
if((state_val_34452 === (11))){
var inst_34408 = (state_34451[(8)]);
var inst_34412 = (state_34451[(9)]);
var inst_34416 = (state_34451[(11)]);
var inst_34424 = inst_34408.push(inst_34412);
var tmp34478 = inst_34408;
var inst_34408__$1 = tmp34478;
var inst_34409 = inst_34416;
var state_34451__$1 = (function (){var statearr_34485 = state_34451;
(statearr_34485[(7)] = inst_34409);

(statearr_34485[(8)] = inst_34408__$1);

(statearr_34485[(12)] = inst_34424);

return statearr_34485;
})();
var statearr_34486_35465 = state_34451__$1;
(statearr_34486_35465[(2)] = null);

(statearr_34486_35465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (9))){
var inst_34409 = (state_34451[(7)]);
var inst_34420 = cljs.core.keyword_identical_QMARK_(inst_34409,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34451__$1 = state_34451;
var statearr_34487_35467 = state_34451__$1;
(statearr_34487_35467[(2)] = inst_34420);

(statearr_34487_35467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (5))){
var inst_34409 = (state_34451[(7)]);
var inst_34412 = (state_34451[(9)]);
var inst_34417 = (state_34451[(13)]);
var inst_34416 = (state_34451[(11)]);
var inst_34416__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34412) : f.call(null,inst_34412));
var inst_34417__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34416__$1,inst_34409);
var state_34451__$1 = (function (){var statearr_34502 = state_34451;
(statearr_34502[(13)] = inst_34417__$1);

(statearr_34502[(11)] = inst_34416__$1);

return statearr_34502;
})();
if(inst_34417__$1){
var statearr_34503_35469 = state_34451__$1;
(statearr_34503_35469[(1)] = (8));

} else {
var statearr_34504_35470 = state_34451__$1;
(statearr_34504_35470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (14))){
var inst_34412 = (state_34451[(9)]);
var inst_34416 = (state_34451[(11)]);
var inst_34429 = (state_34451[(2)]);
var inst_34430 = [];
var inst_34431 = inst_34430.push(inst_34412);
var inst_34408 = inst_34430;
var inst_34409 = inst_34416;
var state_34451__$1 = (function (){var statearr_34511 = state_34451;
(statearr_34511[(14)] = inst_34431);

(statearr_34511[(7)] = inst_34409);

(statearr_34511[(8)] = inst_34408);

(statearr_34511[(15)] = inst_34429);

return statearr_34511;
})();
var statearr_34512_35471 = state_34451__$1;
(statearr_34512_35471[(2)] = null);

(statearr_34512_35471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (16))){
var state_34451__$1 = state_34451;
var statearr_34513_35472 = state_34451__$1;
(statearr_34513_35472[(2)] = null);

(statearr_34513_35472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (10))){
var inst_34422 = (state_34451[(2)]);
var state_34451__$1 = state_34451;
if(cljs.core.truth_(inst_34422)){
var statearr_34516_35473 = state_34451__$1;
(statearr_34516_35473[(1)] = (11));

} else {
var statearr_34517_35474 = state_34451__$1;
(statearr_34517_35474[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (18))){
var inst_34441 = (state_34451[(2)]);
var state_34451__$1 = state_34451;
var statearr_34518_35475 = state_34451__$1;
(statearr_34518_35475[(2)] = inst_34441);

(statearr_34518_35475[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (8))){
var inst_34417 = (state_34451[(13)]);
var state_34451__$1 = state_34451;
var statearr_34519_35479 = state_34451__$1;
(statearr_34519_35479[(2)] = inst_34417);

(statearr_34519_35479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32205__auto__ = null;
var cljs$core$async$state_machine__32205__auto____0 = (function (){
var statearr_34521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34521[(0)] = cljs$core$async$state_machine__32205__auto__);

(statearr_34521[(1)] = (1));

return statearr_34521;
});
var cljs$core$async$state_machine__32205__auto____1 = (function (state_34451){
while(true){
var ret_value__32206__auto__ = (function (){try{while(true){
var result__32207__auto__ = switch__32204__auto__(state_34451);
if(cljs.core.keyword_identical_QMARK_(result__32207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32207__auto__;
}
break;
}
}catch (e34522){var ex__32208__auto__ = e34522;
var statearr_34523_35481 = state_34451;
(statearr_34523_35481[(2)] = ex__32208__auto__);


if(cljs.core.seq((state_34451[(4)]))){
var statearr_34524_35482 = state_34451;
(statearr_34524_35482[(1)] = cljs.core.first((state_34451[(4)])));

} else {
throw ex__32208__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35483 = state_34451;
state_34451 = G__35483;
continue;
} else {
return ret_value__32206__auto__;
}
break;
}
});
cljs$core$async$state_machine__32205__auto__ = function(state_34451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32205__auto____1.call(this,state_34451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32205__auto____0;
cljs$core$async$state_machine__32205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32205__auto____1;
return cljs$core$async$state_machine__32205__auto__;
})()
})();
var state__32319__auto__ = (function (){var statearr_34525 = f__32318__auto__();
(statearr_34525[(6)] = c__32317__auto___35450);

return statearr_34525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32319__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
