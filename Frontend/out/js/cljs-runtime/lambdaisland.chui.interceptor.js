goog.provide('lambdaisland.chui.interceptor');
lambdaisland.chui.interceptor.throwable__GT_ex_info = (function lambdaisland$chui$interceptor$throwable__GT_ex_info(t,interceptor,stage){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("lambdaisland.chui.interceptor",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error-in-interceptor","error-in-interceptor",-324945852),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(interceptor,new cljs.core.Keyword(null,"stage","stage",1843544772),stage),new cljs.core.Keyword(null,"exception","exception",-335277064),t,new cljs.core.Keyword(null,"line","line",212345235),16], null)),t);

return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Exception in interceptor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(interceptor))," during the ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stage)," stage."].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stage","stage",1843544772),stage,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(interceptor),new cljs.core.Keyword(null,"exception-type","exception-type",-554585100),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(t)], 0))),new cljs.core.Keyword(null,"exception","exception",-335277064),t], null),cljs.core.ex_data(t)], 0)),t);
});
/**
 * Try running a specific stage of the given interceptor.
 * 
 *   Will catch exceptions and switch the context over to error handling by
 *   removing the `::queue` and adding an `::error` key.
 */
lambdaisland.chui.interceptor.try_stage = (function lambdaisland$chui$interceptor$try_stage(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27083 = arguments.length;
var i__4865__auto___27087 = (0);
while(true){
if((i__4865__auto___27087 < len__4864__auto___27083)){
args__4870__auto__.push((arguments[i__4865__auto___27087]));

var G__27088 = (i__4865__auto___27087 + (1));
i__4865__auto___27087 = G__27088;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return lambdaisland.chui.interceptor.try_stage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(lambdaisland.chui.interceptor.try_stage.cljs$core$IFn$_invoke$arity$variadic = (function (stage,interceptor,ctx,args){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("lambdaisland.chui.interceptor",new cljs.core.Keyword(null,"fine","fine",-873037193),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"try-stage","try-stage",-1440059791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stage","stage",1843544772),stage,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),interceptor], null),new cljs.core.Keyword(null,"line","line",212345235),34], null)),null);

var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(interceptor,stage);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
try{var obj = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ctx,args);
if(cljs.core.truth_(lambdaisland.chui.util.thenable_QMARK_(obj))){
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$3(obj,lambdaisland.chui.interceptor.execute_STAR_,(function (err){
var G__27036 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("lambdaisland.chui.interceptor","error","lambdaisland.chui.interceptor/error",-1531737674),lambdaisland.chui.interceptor.throwable__GT_ex_info(err,interceptor,stage));
return (lambdaisland.chui.interceptor.execute_STAR_.cljs$core$IFn$_invoke$arity$1 ? lambdaisland.chui.interceptor.execute_STAR_.cljs$core$IFn$_invoke$arity$1(G__27036) : lambdaisland.chui.interceptor.execute_STAR_.call(null,G__27036));
}));
} else {
return (lambdaisland.chui.interceptor.execute_STAR_.cljs$core$IFn$_invoke$arity$1 ? lambdaisland.chui.interceptor.execute_STAR_.cljs$core$IFn$_invoke$arity$1(obj) : lambdaisland.chui.interceptor.execute_STAR_.call(null,obj));
}
}catch (e27025){var t = e27025;
var G__27026 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("lambdaisland.chui.interceptor","error","lambdaisland.chui.interceptor/error",-1531737674),lambdaisland.chui.interceptor.throwable__GT_ex_info(t,interceptor,stage));
return (lambdaisland.chui.interceptor.execute_STAR_.cljs$core$IFn$_invoke$arity$1 ? lambdaisland.chui.interceptor.execute_STAR_.cljs$core$IFn$_invoke$arity$1(G__27026) : lambdaisland.chui.interceptor.execute_STAR_.call(null,G__27026));
}} else {
return (lambdaisland.chui.interceptor.execute_STAR_.cljs$core$IFn$_invoke$arity$1 ? lambdaisland.chui.interceptor.execute_STAR_.cljs$core$IFn$_invoke$arity$1(ctx) : lambdaisland.chui.interceptor.execute_STAR_.call(null,ctx));
}
}));

(lambdaisland.chui.interceptor.try_stage.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(lambdaisland.chui.interceptor.try_stage.cljs$lang$applyTo = (function (seq27005){
var G__27007 = cljs.core.first(seq27005);
var seq27005__$1 = cljs.core.next(seq27005);
var G__27008 = cljs.core.first(seq27005__$1);
var seq27005__$2 = cljs.core.next(seq27005__$1);
var G__27009 = cljs.core.first(seq27005__$2);
var seq27005__$3 = cljs.core.next(seq27005__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27007,G__27008,G__27009,seq27005__$3);
}));

/**
 * Add elements to a queue, setting up a new queue if no queue was provided.
 */
lambdaisland.chui.interceptor.into_queue = (function lambdaisland$chui$interceptor$into_queue(var_args){
var G__27043 = arguments.length;
switch (G__27043) {
case 1:
return lambdaisland.chui.interceptor.into_queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.chui.interceptor.into_queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.chui.interceptor.into_queue.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return lambdaisland.chui.interceptor.into_queue.cljs$core$IFn$_invoke$arity$2(null,xs);
}));

(lambdaisland.chui.interceptor.into_queue.cljs$core$IFn$_invoke$arity$2 = (function (q,xs){
return cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY))(q,xs);
}));

(lambdaisland.chui.interceptor.into_queue.cljs$lang$maxFixedArity = 2);

/**
 * Invoke the `:enter` stage of the next interceptor.
 * 
 *   Pop the next interceptor off the queue, push it onto the stack, and run its
 *   `:enter` stage if it has one. 
 */
lambdaisland.chui.interceptor.enter_1 = (function lambdaisland$chui$interceptor$enter_1(p__27050){
var map__27054 = p__27050;
var map__27054__$1 = cljs.core.__destructure_map(map__27054);
var ctx = map__27054__$1;
var queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27054__$1,new cljs.core.Keyword("lambdaisland.chui.interceptor","queue","lambdaisland.chui.interceptor/queue",2044261473));
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27054__$1,new cljs.core.Keyword("lambdaisland.chui.interceptor","stack","lambdaisland.chui.interceptor/stack",-1314623848));
var interceptor = cljs.core.peek(queue);
var new_queue = cljs.core.pop(queue);
var new_context = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("lambdaisland.chui.interceptor","queue","lambdaisland.chui.interceptor/queue",2044261473),new_queue);
return lambdaisland.chui.interceptor.try_stage(new cljs.core.Keyword(null,"enter","enter",1792452624),interceptor,new_context);
});
/**
 * Modified interceptor chain, only processes the enter chain. Takes a context map
 *   with a ::queue of interceptors to be executed. Other special values that can
 *   be passed in as part of the context:
 * 
 *   - `::on-context` a callback that gets called at every iteration with the new
 *  context map. Useful for keeping track of progress. Note that `::on-context`
 *  gets called on the *start* of every iteration. To get the final context see
 *  `::resolve`/`::reject`.
 *   - `::on-error` error handler, receives the context and the error, must return
 *  a context
 *   - `::terminate?` an atom which, when set to true, will short circuit the
 *  process at the next possible occasion
 *   - `::resolve` function that gets called with the final context map
 */
lambdaisland.chui.interceptor.execute_STAR_ = (function lambdaisland$chui$interceptor$execute_STAR_(p__27057){
while(true){
var map__27058 = p__27057;
var map__27058__$1 = cljs.core.__destructure_map(map__27058);
var ctx = map__27058__$1;
var queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27058__$1,new cljs.core.Keyword("lambdaisland.chui.interceptor","queue","lambdaisland.chui.interceptor/queue",2044261473));
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27058__$1,new cljs.core.Keyword("lambdaisland.chui.interceptor","stack","lambdaisland.chui.interceptor/stack",-1314623848));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27058__$1,new cljs.core.Keyword("lambdaisland.chui.interceptor","error","lambdaisland.chui.interceptor/error",-1531737674));
var on_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27058__$1,new cljs.core.Keyword("lambdaisland.chui.interceptor","on-context","lambdaisland.chui.interceptor/on-context",-546679795));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27058__$1,new cljs.core.Keyword("lambdaisland.chui.interceptor","on-error","lambdaisland.chui.interceptor/on-error",-2012168804));
var terminate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27058__$1,new cljs.core.Keyword("lambdaisland.chui.interceptor","terminate?","lambdaisland.chui.interceptor/terminate?",1318383940));
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27058__$1,new cljs.core.Keyword("lambdaisland.chui.interceptor","resolve","lambdaisland.chui.interceptor/resolve",-1065541544));
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("lambdaisland.chui.interceptor",new cljs.core.Keyword(null,"trace","trace",-1082747415),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"execute","execute",-129499188),ctx,new cljs.core.Keyword(null,"line","line",212345235),109], null)),null);

if(cljs.core.truth_(on_context)){
(on_context.cljs$core$IFn$_invoke$arity$1 ? on_context.cljs$core$IFn$_invoke$arity$1(ctx) : on_context.call(null,ctx));
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = terminate_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.deref(terminate_QMARK_);
} else {
return and__4251__auto__;
}
})())){
var G__27060 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("lambdaisland.chui.interceptor","terminated?","lambdaisland.chui.interceptor/terminated?",-309349377),true);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__27060) : resolve.call(null,G__27060));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = error;
if(cljs.core.truth_(and__4251__auto__)){
return on_error;
} else {
return and__4251__auto__;
}
})())){
var G__27106 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(ctx,error) : on_error.call(null,ctx,error)),new cljs.core.Keyword("lambdaisland.chui.interceptor","error","lambdaisland.chui.interceptor/error",-1531737674));
p__27057 = G__27106;
continue;
} else {
if(cljs.core.seq(queue)){
return lambdaisland.chui.interceptor.enter_1(ctx);
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(ctx) : resolve.call(null,ctx));

}
}
}
break;
}
});
lambdaisland.chui.interceptor.execute = (function lambdaisland$chui$interceptor$execute(ctx){
var p__26247__auto__ = kitchen_async.promise.promise_impl();
return (new p__26247__auto__((function (resolve,_){
return lambdaisland.chui.interceptor.execute_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("lambdaisland.chui.interceptor","resolve","lambdaisland.chui.interceptor/resolve",-1065541544),resolve));
})));
});
/**
 * Enqueue interceptors.
 * 
 *   Add interceptors to the context's FIFO queue.
 */
lambdaisland.chui.interceptor.enqueue = (function lambdaisland$chui$interceptor$enqueue(ctx,interceptors){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lambdaisland.chui.interceptor","queue","lambdaisland.chui.interceptor/queue",2044261473)], null),lambdaisland.chui.interceptor.into_queue,interceptors);
});
/**
 * Take a context map, but rewrite the queue, stack and error to be more concise
 *   for easy inspection.
 */
lambdaisland.chui.interceptor.ctx_summary = (function lambdaisland$chui$interceptor$ctx_summary(p__27074){
var map__27076 = p__27074;
var map__27076__$1 = cljs.core.__destructure_map(map__27076);
var ctx = map__27076__$1;
var queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27076__$1,new cljs.core.Keyword("lambdaisland.chui.interceptor","queue","lambdaisland.chui.interceptor/queue",2044261473));
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27076__$1,new cljs.core.Keyword("lambdaisland.chui.interceptor","stack","lambdaisland.chui.interceptor/stack",-1314623848));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27076__$1,new cljs.core.Keyword("lambdaisland.chui.interceptor","error","lambdaisland.chui.interceptor/error",-1531737674));
var G__27078 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword("lambdaisland.chui.interceptor","queue","lambdaisland.chui.interceptor/queue",2044261473),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lambdaisland.chui.interceptor","stack","lambdaisland.chui.interceptor/stack",-1314623848),new cljs.core.Keyword("lambdaisland.chui.interceptor","error","lambdaisland.chui.interceptor/error",-1531737674)], 0));
var G__27078__$1 = (((!((queue == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27078,new cljs.core.Keyword(null,"queue","queue",1455835879),lambdaisland.chui.interceptor.into_queue.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),queue))):G__27078);
var G__27078__$2 = (((!((stack == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27078__$1,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),stack)):G__27078__$1);
if((!((error == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27078__$2,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.ex_data(error),new cljs.core.Keyword(null,"exception","exception",-335277064)));
} else {
return G__27078__$2;
}
});

//# sourceMappingURL=lambdaisland.chui.interceptor.js.map
