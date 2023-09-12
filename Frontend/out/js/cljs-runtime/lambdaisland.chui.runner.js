goog.provide('lambdaisland.chui.runner');
/**
 * @define {boolean}
 */
lambdaisland.chui.runner.PROMISE_ASYNC_TEST = goog.define("lambdaisland.chui.runner.PROMISE_ASYNC_TEST",false);
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.chui !== 'undefined') && (typeof lambdaisland.chui.runner !== 'undefined') && (typeof lambdaisland.chui.runner.state !== 'undefined')){
} else {
lambdaisland.chui.runner.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"runs","runs",-1553997798),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ctx-promise","ctx-promise",635324700),null,new cljs.core.Keyword(null,"selection","selection",975998651),null], null));
}
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.chui !== 'undefined') && (typeof lambdaisland.chui.runner !== 'undefined') && (typeof lambdaisland.chui.runner.t_report !== 'undefined')){
} else {
lambdaisland.chui.runner.t_report = cljs.test.report;
}
lambdaisland.chui.runner.current_run = (function lambdaisland$chui$runner$current_run(){
return cljs.core.last(new cljs.core.Keyword(null,"runs","runs",-1553997798).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lambdaisland.chui.runner.state)));
});
/**
 * While cljs.test provides a way of extending the report multimethod to capture
 *   specific messages, it does not provide an easy way to capture all messages,
 *   except for replacing t/report, so that's what we do. This calls whatever
 *   reporter in set in the current run, before also delegating to the original
 *   multimethod.
 * 
 *   Do this as late as possible, because otherwise any calls to (defmethod
 *   t/report ...) will fail.
 */
lambdaisland.chui.runner.install_custom_reporter = (function lambdaisland$chui$runner$install_custom_reporter(){
return (cljs.test.report = (function (m){
var temp__5804__auto__ = new cljs.core.Keyword(null,"report","report",1394055010).cljs$core$IFn$_invoke$arity$1(lambdaisland.chui.runner.current_run());
if(cljs.core.truth_(temp__5804__auto__)){
var report = temp__5804__auto__;
return (report.cljs$core$IFn$_invoke$arity$1 ? report.cljs$core$IFn$_invoke$arity$1(m) : report.call(null,m));
} else {
return null;
}
}));
});
lambdaisland.chui.runner.restore_original_reporter = (function lambdaisland$chui$runner$restore_original_reporter(){
return (cljs.test.report = lambdaisland.chui.runner.t_report);
});
lambdaisland.chui.runner.update_run = (function lambdaisland$chui$runner$update_run(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29721 = arguments.length;
var i__4865__auto___29722 = (0);
while(true){
if((i__4865__auto___29722 < len__4864__auto___29721)){
args__4870__auto__.push((arguments[i__4865__auto___29722]));

var G__29723 = (i__4865__auto___29722 + (1));
i__4865__auto___29722 = G__29723;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return lambdaisland.chui.runner.update_run.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(lambdaisland.chui.runner.update_run.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lambdaisland.chui.runner.state,cljs.core.update,new cljs.core.Keyword(null,"runs","runs",-1553997798),(function (runs){
if(cljs.core.seq(runs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,runs,(cljs.core.count(runs) - (1)),f,args);
} else {
return runs;
}
}));
}));

(lambdaisland.chui.runner.update_run.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.chui.runner.update_run.cljs$lang$applyTo = (function (seq29519){
var G__29520 = cljs.core.first(seq29519);
var seq29519__$1 = cljs.core.next(seq29519);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29520,seq29519__$1);
}));

lambdaisland.chui.runner.update_run_ns = (function lambdaisland$chui$runner$update_run_ns(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29725 = arguments.length;
var i__4865__auto___29726 = (0);
while(true){
if((i__4865__auto___29726 < len__4864__auto___29725)){
args__4870__auto__.push((arguments[i__4865__auto___29726]));

var G__29727 = (i__4865__auto___29726 + (1));
i__4865__auto___29726 = G__29727;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return lambdaisland.chui.runner.update_run_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(lambdaisland.chui.runner.update_run_ns.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return lambdaisland.chui.runner.update_run((function (run){
if(cljs.core.seq(new cljs.core.Keyword(null,"nss","nss",338450727).cljs$core$IFn$_invoke$arity$1(run))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,run,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nss","nss",338450727),(cljs.core.count(new cljs.core.Keyword(null,"nss","nss",338450727).cljs$core$IFn$_invoke$arity$1(run)) - (1))], null),f,args);
} else {
return run;
}
}));
}));

(lambdaisland.chui.runner.update_run_ns.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.chui.runner.update_run_ns.cljs$lang$applyTo = (function (seq29533){
var G__29534 = cljs.core.first(seq29533);
var seq29533__$1 = cljs.core.next(seq29533);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29534,seq29533__$1);
}));

lambdaisland.chui.runner.update_run_var = (function lambdaisland$chui$runner$update_run_var(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29736 = arguments.length;
var i__4865__auto___29737 = (0);
while(true){
if((i__4865__auto___29737 < len__4864__auto___29736)){
args__4870__auto__.push((arguments[i__4865__auto___29737]));

var G__29739 = (i__4865__auto___29737 + (1));
i__4865__auto___29737 = G__29739;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return lambdaisland.chui.runner.update_run_var.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(lambdaisland.chui.runner.update_run_var.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return lambdaisland.chui.runner.update_run_ns((function (ns){
if(cljs.core.seq(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),(cljs.core.count(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns)) - (1))], null),f,args);
} else {
return ns;
}
}));
}));

(lambdaisland.chui.runner.update_run_var.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.chui.runner.update_run_var.cljs$lang$applyTo = (function (seq29537){
var G__29538 = cljs.core.first(seq29537);
var seq29537__$1 = cljs.core.next(seq29537);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29538,seq29537__$1);
}));

lambdaisland.chui.runner.get_and_clear_report_counters = (function lambdaisland$chui$runner$get_and_clear_report_counters(){
var counters = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test._STAR_current_env_STAR_);
cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242)], null),cljs.core.constantly(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"test","test",577538877),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0)], null)));

return counters;
});
lambdaisland.chui.runner.add_test_run_BANG_ = (function lambdaisland$chui$runner$add_test_run_BANG_(m){
(cljs.core.count(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lambdaisland.chui.runner.state,cljs.core.update,new cljs.core.Keyword(null,"runs","runs",-1553997798),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0))) - (1));

return (cljs.test._STAR_current_env_STAR_ = cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
});
lambdaisland.chui.runner.running_QMARK_ = (function lambdaisland$chui$runner$running_QMARK_(){
var temp__5804__auto__ = lambdaisland.chui.runner.current_run();
if(cljs.core.truth_(temp__5804__auto__)){
var run = temp__5804__auto__;
return cljs.core.not(new cljs.core.Keyword(null,"done?","done?",-1847001718).cljs$core$IFn$_invoke$arity$1(run));
} else {
return null;
}
});
lambdaisland.chui.runner.file_and_line = (function lambdaisland$chui$runner$file_and_line(){
var frames = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__29539_SHARP_){
return (!(clojure.string.includes_QMARK_(p1__29539_SHARP_,"do_report")));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2((new Error()).stack,/\n/));
if(cljs.core.seq(frames)){
var temp__5804__auto__ = (function (){var G__29540 = frames;
var G__29540__$1 = (((G__29540 == null))?null:cljs.core.second(G__29540));
if((G__29540__$1 == null)){
return null;
} else {
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__29540__$1,/:/);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var frame = temp__5804__auto__;
var line_col = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(frame) - (2)),frame);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(frame) - (2)),frame));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),parseInt(cljs.core.re_find(/\d+/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(line_col))),(10)),new cljs.core.Keyword(null,"column","column",2078222095),parseInt(cljs.core.re_find(/\d+/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(line_col))),(10))], null);
} else {
return null;
}
} else {
return null;
}
});
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.chui !== 'undefined') && (typeof lambdaisland.chui.runner !== 'undefined') && (typeof lambdaisland.chui.runner.report !== 'undefined')){
} else {
lambdaisland.chui.runner.report = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29542 = cljs.core.get_global_hierarchy;
return (fexpr__29542.cljs$core$IFn$_invoke$arity$0 ? fexpr__29542.cljs$core$IFn$_invoke$arity$0() : fexpr__29542.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.chui.runner","report"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
lambdaisland.chui.runner.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
lambdaisland.chui.runner.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return lambdaisland.chui.runner.update_run_var.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"assertions","assertions",-971608611),cljs.core.conj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,lambdaisland.chui.runner.file_and_line(),cljs.core.select_keys(cljs.test._STAR_current_env_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523),new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150)], null))], 0))], 0));
}));
lambdaisland.chui.runner.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return lambdaisland.chui.runner.update_run_var.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"assertions","assertions",-971608611),cljs.core.conj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.select_keys(cljs.test._STAR_current_env_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523),new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150)], null))], 0))], 0));
}));
lambdaisland.chui.runner.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return lambdaisland.chui.runner.update_run_var.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"assertions","assertions",-971608611),cljs.core.conj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,lambdaisland.chui.runner.file_and_line(),cljs.core.select_keys(cljs.test._STAR_current_env_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523),new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150)], null))], 0))], 0));
}));
/**
 * Turn a function which may return a cljs.test IAsyncTest into a promise-based interceptor.
 * 
 *   An IAsyncTest is a special type of object which is callable. It takes a single
 *   argument: a continuation callback, which is a zero-arity function. In effect
 *   it is like a promise which does not yield a value, but simply signals that
 *   some process has completed.
 * 
 *   IAsyncTest values are created using the `cljs.test/async` macro, which may be
 *   used in tests (deftest) and fixtures to implement asynchrony. 
 */
lambdaisland.chui.runner.cljs_test_intor = (function lambdaisland$chui$runner$cljs_test_intor(name,f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\n","(fn? f)"].join('')));
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"cljs-test-intor","cljs-test-intor",-477175036),new cljs.core.Keyword(null,"test","test",577538877),name,new cljs.core.Keyword(null,"enter","enter",1792452624),(function (ctx){
var result = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.test.async_QMARK_(result)){
var p__26247__auto__ = kitchen_async.promise.promise_impl();
return (new p__26247__auto__((function (resolve){
var G__29547 = (function (){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(ctx) : resolve.call(null,ctx));
});
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(G__29547) : result.call(null,G__29547));
})));
} else {
if(((lambdaisland.chui.runner.PROMISE_ASYNC_TEST) && ((result instanceof Promise)))){
var p__26247__auto__ = kitchen_async.promise.promise_impl();
return (new p__26247__auto__((function (resolve){
return result.then((function (_){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(ctx) : resolve.call(null,ctx));
}),(function (error){
var G__29554 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"error","error",-978969032),error);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__29554) : resolve.call(null,G__29554));
}));
})));
} else {
return ctx;

}
}
})], null);
});
/**
 * Interceptor which calls cljs.test/report
 */
lambdaisland.chui.runner.report_intor = (function lambdaisland$chui$runner$report_intor(m){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (ctx){
cljs.test.report.call(null,m);

return ctx;
})], null);
});
/**
 * Sequence of interceptors which handle a single test var.
 */
lambdaisland.chui.runner.var_intors = (function lambdaisland$chui$runner$var_intors(test){
var the_var = new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(test);
var test_fn = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(test);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.runner.report_intor(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),new cljs.core.Keyword(null,"var","var",-769682797),the_var], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"begin-var-update-env","begin-var-update-env",1684434425),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (ctx){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([the_var], 0));

cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),new cljs.core.Keyword(null,"test","test",577538877)], null),cljs.core.inc);

lambdaisland.chui.runner.update_run_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(test,new cljs.core.Keyword(null,"start","start",-355208981),(new Date()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"assertions","assertions",-971608611),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"done?","done?",-1847001718),false], 0))], 0));

return ctx;
})], null),lambdaisland.chui.runner.cljs_test_intor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(test),test_fn),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"end-var-update-env","end-var-update-env",1639301274),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (ctx){
cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150)], null),cljs.core.rest);

lambdaisland.chui.runner.update_run_var.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),(new Date()),new cljs.core.Keyword(null,"done?","done?",-1847001718),true], 0));

return ctx;
})], null),lambdaisland.chui.runner.report_intor(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),new cljs.core.Keyword(null,"var","var",-769682797),the_var], null))], null);
});
lambdaisland.chui.runner.fixture_intors = (function lambdaisland$chui$runner$fixture_intors(ns,stage,type,fixtures){
var fix = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(stage,fixtures);
var G__29562 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29561_SHARP_){
return lambdaisland.chui.runner.cljs_test_intor(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),[cljs.core.name(stage),"-",cljs.core.name(type)].join('')),p1__29561_SHARP_);
}),fix);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"after","after",594996914),stage)){
return cljs.core.reverse(G__29562);
} else {
return G__29562;
}
});
lambdaisland.chui.runner.check_sync_fixtures_intor = (function lambdaisland$chui$runner$check_sync_fixtures_intor(ns,fixtures){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"check-synchronous-fixtures","check-synchronous-fixtures",1067536258),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (ctx){
var seq__29565_29791 = cljs.core.seq(fixtures);
var chunk__29567_29792 = null;
var count__29568_29793 = (0);
var i__29569_29794 = (0);
while(true){
if((i__29569_29794 < count__29568_29793)){
var fix_29797 = chunk__29567_29792.cljs$core$IIndexed$_nth$arity$2(null,i__29569_29794);
if(cljs.core.fn_QMARK_(fix_29797)){
lambdaisland.chui.runner.update_run_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"fixtures",new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",212345235),(0)], null),new cljs.core.Keyword(null,"start","start",-355208981),(new Date()),new cljs.core.Keyword(null,"assertions","assertions",-971608611),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"message","message",-406056002),["Synchronous fixtures are not supported, in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('')], null)], null),new cljs.core.Keyword(null,"done?","done?",-1847001718),false], null)], 0));


var G__29798 = seq__29565_29791;
var G__29799 = chunk__29567_29792;
var G__29800 = count__29568_29793;
var G__29801 = (i__29569_29794 + (1));
seq__29565_29791 = G__29798;
chunk__29567_29792 = G__29799;
count__29568_29793 = G__29800;
i__29569_29794 = G__29801;
continue;
} else {
var G__29802 = seq__29565_29791;
var G__29803 = chunk__29567_29792;
var G__29804 = count__29568_29793;
var G__29805 = (i__29569_29794 + (1));
seq__29565_29791 = G__29802;
chunk__29567_29792 = G__29803;
count__29568_29793 = G__29804;
i__29569_29794 = G__29805;
continue;
}
} else {
var temp__5804__auto___29809 = cljs.core.seq(seq__29565_29791);
if(temp__5804__auto___29809){
var seq__29565_29811__$1 = temp__5804__auto___29809;
if(cljs.core.chunked_seq_QMARK_(seq__29565_29811__$1)){
var c__4679__auto___29812 = cljs.core.chunk_first(seq__29565_29811__$1);
var G__29813 = cljs.core.chunk_rest(seq__29565_29811__$1);
var G__29814 = c__4679__auto___29812;
var G__29815 = cljs.core.count(c__4679__auto___29812);
var G__29816 = (0);
seq__29565_29791 = G__29813;
chunk__29567_29792 = G__29814;
count__29568_29793 = G__29815;
i__29569_29794 = G__29816;
continue;
} else {
var fix_29818 = cljs.core.first(seq__29565_29811__$1);
if(cljs.core.fn_QMARK_(fix_29818)){
lambdaisland.chui.runner.update_run_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"fixtures",new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",212345235),(0)], null),new cljs.core.Keyword(null,"start","start",-355208981),(new Date()),new cljs.core.Keyword(null,"assertions","assertions",-971608611),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"message","message",-406056002),["Synchronous fixtures are not supported, in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('')], null)], null),new cljs.core.Keyword(null,"done?","done?",-1847001718),false], null)], 0));


var G__29824 = cljs.core.next(seq__29565_29811__$1);
var G__29825 = null;
var G__29826 = (0);
var G__29827 = (0);
seq__29565_29791 = G__29824;
chunk__29567_29792 = G__29825;
count__29568_29793 = G__29826;
i__29569_29794 = G__29827;
continue;
} else {
var G__29828 = cljs.core.next(seq__29565_29811__$1);
var G__29829 = null;
var G__29830 = (0);
var G__29831 = (0);
seq__29565_29791 = G__29828;
chunk__29567_29792 = G__29829;
count__29568_29793 = G__29830;
i__29569_29794 = G__29831;
continue;
}
}
} else {
}
}
break;
}

return ctx;
})], null);
});
lambdaisland.chui.runner.begin_ns_intors = (function lambdaisland$chui$runner$begin_ns_intors(ns,once_fixtures){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.runner.report_intor(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"begin-ns-update-run","begin-ns-update-run",325731116),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (ctx){
lambdaisland.chui.runner.update_run.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nss","nss",338450727),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"start","start",-355208981),(new Date()),new cljs.core.Keyword(null,"done?","done?",-1847001718),false,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.PersistentVector.EMPTY], null)], 0));

return ctx;
})], null)], null),lambdaisland.chui.runner.fixture_intors(ns,new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"once","once",-262568523),once_fixtures));
});
lambdaisland.chui.runner.end_ns_intors = (function lambdaisland$chui$runner$end_ns_intors(ns,once_fixtures){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(lambdaisland.chui.runner.fixture_intors(ns,new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"once","once",-262568523),once_fixtures),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"end-ns-update-run","end-ns-update-run",-1845559380),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (ctx){
lambdaisland.chui.runner.update_run.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nss","nss",338450727),cljs.core.assoc,new cljs.core.Keyword(null,"end","end",-268185958),(new Date()),new cljs.core.Keyword(null,"done?","done?",-1847001718),true], 0));

return ctx;
})], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.runner.report_intor(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null))], null)], 0));
});
lambdaisland.chui.runner.wrap_each_fixtures = (function lambdaisland$chui$runner$wrap_each_fixtures(ns,intors,each_fixtures){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(lambdaisland.chui.runner.fixture_intors(ns,new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"each","each",940016129),each_fixtures),intors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lambdaisland.chui.runner.fixture_intors(ns,new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"each","each",940016129),each_fixtures)], 0));
});
/**
 * Sequence of interceptors which handle a single namespace, including
 *   once-fixtures and each-fixtures.
 */
lambdaisland.chui.runner.ns_intors = (function lambdaisland$chui$runner$ns_intors(ns,p__29593){
var map__29594 = p__29593;
var map__29594__$1 = cljs.core.__destructure_map(map__29594);
var ns_data = map__29594__$1;
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29594__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29594__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var each_fixtures = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29594__$1,new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977));
var once_fixtures = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29594__$1,new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167));
var temp__5804__auto__ = cljs.core.seq(tests);
if(temp__5804__auto__){
var tests__$1 = temp__5804__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(lambdaisland.chui.runner.begin_ns_intors(ns,once_fixtures),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.chui.runner.check_sync_fixtures_intor(ns,once_fixtures),lambdaisland.chui.runner.check_sync_fixtures_intor(ns,each_fixtures)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__29590_SHARP_){
return lambdaisland.chui.runner.wrap_each_fixtures(ns,p1__29590_SHARP_,each_fixtures);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.chui.runner.var_intors,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"meta","meta",1499536964)),tests__$1))], 0)),lambdaisland.chui.runner.end_ns_intors(ns,once_fixtures)], 0));
} else {
return null;
}
});
lambdaisland.chui.runner.on_intor_error = (function lambdaisland$chui$runner$on_intor_error(ctx,error){
var error_29841__$1 = (function (){var or__4253__auto__ = cljs.core.ex_cause(error);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return error;
}
})();
cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),error_29841__$1,new cljs.core.Keyword("kaocha.result","exception","kaocha.result/exception",-806011840),error_29841__$1], null));

return ctx;
});
lambdaisland.chui.runner.slowdown_intor = (function lambdaisland$chui$runner$slowdown_intor(ms){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("lambdaisland.chui.runner","slowdown","lambdaisland.chui.runner/slowdown",1718603434),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (ctx){
var p__26247__auto__ = kitchen_async.promise.promise_impl();
return (new p__26247__auto__((function (resolve){
return setTimeout((function (){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(ctx) : resolve.call(null,ctx));
}),ms);
})));
})], null);
});
/**
 * Interceptor which continues on the next tick, used to allow the UI to update.
 */
lambdaisland.chui.runner.next_tick_intor = (function lambdaisland$chui$runner$next_tick_intor(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("lambdaisland.chui.runner","next-tick","lambdaisland.chui.runner/next-tick",-1731834975),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (ctx){
var p__26247__auto__ = kitchen_async.promise.promise_impl();
return (new p__26247__auto__((function (resolve){
return goog.async.nextTick((function (){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(ctx) : resolve.call(null,ctx));
}));
})));
})], null);
});
lambdaisland.chui.runner.var_summary = (function lambdaisland$chui$runner$var_summary(p__29601){
var map__29602 = p__29601;
var map__29602__$1 = cljs.core.__destructure_map(map__29602);
var assertions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29602__$1,new cljs.core.Keyword(null,"assertions","assertions",-971608611));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),assertions)),new cljs.core.Keyword(null,"test","test",577538877),(1));
});
lambdaisland.chui.runner.ns_summary = (function lambdaisland$chui$runner$ns_summary(p__29603){
var map__29604 = p__29603;
var map__29604__$1 = cljs.core.__destructure_map(map__29604);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29604__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tests","tests",-1041085625),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0)], null),cljs.core.frequencies(cljs.core.flatten((function (){var iter__4652__auto__ = (function lambdaisland$chui$runner$ns_summary_$_iter__29606(s__29607){
return (new cljs.core.LazySeq(null,(function (){
var s__29607__$1 = s__29607;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29607__$1);
if(temp__5804__auto__){
var s__29607__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29607__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29607__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29609 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29608 = (0);
while(true){
if((i__29608 < size__4651__auto__)){
var map__29614 = cljs.core._nth(c__4650__auto__,i__29608);
var map__29614__$1 = cljs.core.__destructure_map(map__29614);
var assertions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29614__$1,new cljs.core.Keyword(null,"assertions","assertions",-971608611));
cljs.core.chunk_append(b__29609,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tests","tests",-1041085625),(function (){var iter__4652__auto__ = ((function (i__29608,map__29614,map__29614__$1,assertions,c__4650__auto__,size__4651__auto__,b__29609,s__29607__$2,temp__5804__auto__,map__29604,map__29604__$1,vars){
return (function lambdaisland$chui$runner$ns_summary_$_iter__29606_$_iter__29615(s__29616){
return (new cljs.core.LazySeq(null,((function (i__29608,map__29614,map__29614__$1,assertions,c__4650__auto__,size__4651__auto__,b__29609,s__29607__$2,temp__5804__auto__,map__29604,map__29604__$1,vars){
return (function (){
var s__29616__$1 = s__29616;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__29616__$1);
if(temp__5804__auto____$1){
var s__29616__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29616__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__29616__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__29618 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__29617 = (0);
while(true){
if((i__29617 < size__4651__auto____$1)){
var map__29619 = cljs.core._nth(c__4650__auto____$1,i__29617);
var map__29619__$1 = cljs.core.__destructure_map(map__29619);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29619__$1,new cljs.core.Keyword(null,"type","type",1174270348));
cljs.core.chunk_append(b__29618,type);

var G__29850 = (i__29617 + (1));
i__29617 = G__29850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29618),lambdaisland$chui$runner$ns_summary_$_iter__29606_$_iter__29615(cljs.core.chunk_rest(s__29616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29618),null);
}
} else {
var map__29621 = cljs.core.first(s__29616__$2);
var map__29621__$1 = cljs.core.__destructure_map(map__29621);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29621__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.cons(type,lambdaisland$chui$runner$ns_summary_$_iter__29606_$_iter__29615(cljs.core.rest(s__29616__$2)));
}
} else {
return null;
}
break;
}
});})(i__29608,map__29614,map__29614__$1,assertions,c__4650__auto__,size__4651__auto__,b__29609,s__29607__$2,temp__5804__auto__,map__29604,map__29604__$1,vars))
,null,null));
});})(i__29608,map__29614,map__29614__$1,assertions,c__4650__auto__,size__4651__auto__,b__29609,s__29607__$2,temp__5804__auto__,map__29604,map__29604__$1,vars))
;
return iter__4652__auto__(assertions);
})()], null));

var G__29851 = (i__29608 + (1));
i__29608 = G__29851;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29609),lambdaisland$chui$runner$ns_summary_$_iter__29606(cljs.core.chunk_rest(s__29607__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29609),null);
}
} else {
var map__29623 = cljs.core.first(s__29607__$2);
var map__29623__$1 = cljs.core.__destructure_map(map__29623);
var assertions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29623__$1,new cljs.core.Keyword(null,"assertions","assertions",-971608611));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tests","tests",-1041085625),(function (){var iter__4652__auto__ = ((function (map__29623,map__29623__$1,assertions,s__29607__$2,temp__5804__auto__,map__29604,map__29604__$1,vars){
return (function lambdaisland$chui$runner$ns_summary_$_iter__29606_$_iter__29624(s__29625){
return (new cljs.core.LazySeq(null,(function (){
var s__29625__$1 = s__29625;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__29625__$1);
if(temp__5804__auto____$1){
var s__29625__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29625__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29625__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29627 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29626 = (0);
while(true){
if((i__29626 < size__4651__auto__)){
var map__29632 = cljs.core._nth(c__4650__auto__,i__29626);
var map__29632__$1 = cljs.core.__destructure_map(map__29632);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29632__$1,new cljs.core.Keyword(null,"type","type",1174270348));
cljs.core.chunk_append(b__29627,type);

var G__29859 = (i__29626 + (1));
i__29626 = G__29859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29627),lambdaisland$chui$runner$ns_summary_$_iter__29606_$_iter__29624(cljs.core.chunk_rest(s__29625__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29627),null);
}
} else {
var map__29636 = cljs.core.first(s__29625__$2);
var map__29636__$1 = cljs.core.__destructure_map(map__29636);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29636__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.cons(type,lambdaisland$chui$runner$ns_summary_$_iter__29606_$_iter__29624(cljs.core.rest(s__29625__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__29623,map__29623__$1,assertions,s__29607__$2,temp__5804__auto__,map__29604,map__29604__$1,vars))
;
return iter__4652__auto__(assertions);
})()], null),lambdaisland$chui$runner$ns_summary_$_iter__29606(cljs.core.rest(s__29607__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(vars);
})()))], 0));
});
lambdaisland.chui.runner.run_summary = (function lambdaisland$chui$runner$run_summary(p__29637){
var map__29638 = p__29637;
var map__29638__$1 = cljs.core.__destructure_map(map__29638);
var nss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29638__$1,new cljs.core.Keyword(null,"nss","nss",338450727));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core._PLUS_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tests","tests",-1041085625),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.chui.runner.ns_summary,nss));
});
lambdaisland.chui.runner.error_QMARK_ = (function lambdaisland$chui$runner$error_QMARK_(p__29641){
var map__29642 = p__29641;
var map__29642__$1 = cljs.core.__destructure_map(map__29642);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29642__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return cljs.core.pos_int_QMARK_(error);
});
lambdaisland.chui.runner.fail_QMARK_ = (function lambdaisland$chui$runner$fail_QMARK_(p__29644){
var map__29645 = p__29644;
var map__29645__$1 = cljs.core.__destructure_map(map__29645);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29645__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29645__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return ((cljs.core.pos_int_QMARK_(fail)) || (cljs.core.pos_int_QMARK_(error)));
});
lambdaisland.chui.runner.pass_QMARK_ = cljs.core.complement(lambdaisland.chui.runner.fail_QMARK_);
lambdaisland.chui.runner.test_run = (function lambdaisland$chui$runner$test_run(){
var terminate_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid(),new cljs.core.Keyword(null,"nss","nss",338450727),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ctx","ctx",-493610118),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lambdaisland.chui.interceptor","terminate?","lambdaisland.chui.interceptor/terminate?",1318383940),terminate_QMARK_,new cljs.core.Keyword("lambdaisland.chui.interceptor","on-context","lambdaisland.chui.interceptor/on-context",-546679795),(function (p1__29648_SHARP_){
return lambdaisland.chui.runner.update_run.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ctx","ctx",-493610118),p1__29648_SHARP_], 0));
}),new cljs.core.Keyword("lambdaisland.chui.interceptor","on-error","lambdaisland.chui.interceptor/on-error",-2012168804),lambdaisland.chui.runner.on_intor_error], null),new cljs.core.Keyword(null,"done?","done?",-1847001718),false,new cljs.core.Keyword(null,"start","start",-355208981),(new Date()),new cljs.core.Keyword(null,"terminate!","terminate!",27019329),(function (){
return cljs.core.reset_BANG_(terminate_QMARK_,true);
}),new cljs.core.Keyword(null,"report","report",1394055010),lambdaisland.chui.runner.report], null);
});
lambdaisland.chui.runner.run_tests = (function lambdaisland$chui$runner$run_tests(var_args){
var G__29665 = arguments.length;
switch (G__29665) {
case 0:
return lambdaisland.chui.runner.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return lambdaisland.chui.runner.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.chui.runner.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
var tests = cljs.core.deref(lambdaisland.chui.test_data.test_ns_data);
return lambdaisland.chui.runner.run_tests.cljs$core$IFn$_invoke$arity$1((function (){var temp__5802__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lambdaisland.chui.runner.state)));
if(temp__5802__auto__){
var selected = temp__5802__auto__;
return cljs.core.select_keys(tests,selected);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("test","skip","test/skip",596009069),new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.val)),tests);
}
})());
}));

(lambdaisland.chui.runner.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (tests){
var cnt = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.count,new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.val),tests));
var run = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lambdaisland.chui.runner.test_run(),new cljs.core.Keyword(null,"test-count","test-count",212751891),cnt);
lambdaisland.chui.runner.add_test_run_BANG_(run);

lambdaisland.chui.runner.install_custom_reporter();

var ctx_promise = lambdaisland.chui.interceptor.execute(lambdaisland.chui.interceptor.enqueue(new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(run),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__29658_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lambdaisland.chui.runner.ns_intors,p1__29658_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tests], 0))));
lambdaisland.chui.runner.update_run.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"donep","donep",-1019778663),ctx_promise], 0));

try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(ctx_promise,(function (ctx){
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(lambdaisland.chui.runner.restore_original_reporter(),(function (___26270__auto__){
return lambdaisland.chui.runner.update_run.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"end","end",-268185958),(new Date()),new cljs.core.Keyword(null,"done?","done?",-1847001718),true], 0));
}));
})));
}catch (e29682){var e__26264__auto__ = e29682;
return kitchen_async.promise.reject(e__26264__auto__);
}}));

(lambdaisland.chui.runner.run_tests.cljs$lang$maxFixedArity = 1);

lambdaisland.chui.runner.terminate_BANG_ = (function lambdaisland$chui$runner$terminate_BANG_(var_args){
var G__29696 = arguments.length;
switch (G__29696) {
case 0:
return lambdaisland.chui.runner.terminate_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return lambdaisland.chui.runner.terminate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.chui.runner.terminate_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return lambdaisland.chui.runner.terminate_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(lambdaisland.chui.runner.terminate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (callback){
var temp__5802__auto__ = lambdaisland.chui.runner.current_run();
if(cljs.core.truth_(temp__5802__auto__)){
var run = temp__5802__auto__;
var temp__5802__auto___29887__$1 = (function (){var and__4251__auto__ = callback;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"donep","donep",-1019778663).cljs$core$IFn$_invoke$arity$1(run);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto___29887__$1)){
var donep_29891 = temp__5802__auto___29887__$1;
try{kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(donep_29891,(function (ctx){
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"done?","done?",-1847001718).cljs$core$IFn$_invoke$arity$1(run))?null:lambdaisland.chui.runner.update_run.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"terminated?","terminated?",209866129),true], 0))),(function (___26270__auto__){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(ctx) : callback.call(null,ctx));
}));
})));
}catch (e29703){var e__26264__auto___29900 = e29703;
kitchen_async.promise.reject(e__26264__auto___29900);
}} else {
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(null) : callback.call(null,null));
}

var fexpr__29710 = new cljs.core.Keyword(null,"terminate!","terminate!",27019329).cljs$core$IFn$_invoke$arity$1(run);
return (fexpr__29710.cljs$core$IFn$_invoke$arity$0 ? fexpr__29710.cljs$core$IFn$_invoke$arity$0() : fexpr__29710.call(null));
} else {
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(null) : callback.call(null,null));
}
}));

(lambdaisland.chui.runner.terminate_BANG_.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=lambdaisland.chui.runner.js.map
