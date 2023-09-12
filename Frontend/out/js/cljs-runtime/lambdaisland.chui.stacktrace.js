goog.provide('lambdaisland.chui.stacktrace');
var module$node_modules$stacktrace_js$stacktrace=shadow.js.require("module$node_modules$stacktrace_js$stacktrace", {});
var module$node_modules$stacktrace_gps$stacktrace_gps=shadow.js.require("module$node_modules$stacktrace_gps$stacktrace_gps", {});
lambdaisland.chui.stacktrace.unmunge = (function lambdaisland$chui$stacktrace$unmunge(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$","."),"_STAR_","*"),"_BANG_","!"),"_","-");
} else {
return null;
}
});
lambdaisland.chui.stacktrace.from_error = (function lambdaisland$chui$stacktrace$from_error(error){
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(module$node_modules$stacktrace_js$stacktrace.fromError(error),(function (trace){
var iter__4652__auto__ = (function lambdaisland$chui$stacktrace$from_error_$_iter__28919(s__28920){
return (new cljs.core.LazySeq(null,(function (){
var s__28920__$1 = s__28920;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28920__$1);
if(temp__5804__auto__){
var s__28920__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28920__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__28920__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__28922 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__28921 = (0);
while(true){
if((i__28921 < size__4651__auto__)){
var frame = cljs.core._nth(c__4650__auto__,i__28921);
cljs.core.chunk_append(b__28922,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"function","function",-2127255473),lambdaisland.chui.stacktrace.unmunge(frame.getFunctionName()),new cljs.core.Keyword(null,"file","file",-1269645878),frame.getFileName(),new cljs.core.Keyword(null,"line","line",212345235),frame.getLineNumber(),new cljs.core.Keyword(null,"column","column",2078222095),frame.getColumnNumber()], null));

var G__28946 = (i__28921 + (1));
i__28921 = G__28946;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28922),lambdaisland$chui$stacktrace$from_error_$_iter__28919(cljs.core.chunk_rest(s__28920__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28922),null);
}
} else {
var frame = cljs.core.first(s__28920__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"function","function",-2127255473),lambdaisland.chui.stacktrace.unmunge(frame.getFunctionName()),new cljs.core.Keyword(null,"file","file",-1269645878),frame.getFileName(),new cljs.core.Keyword(null,"line","line",212345235),frame.getLineNumber(),new cljs.core.Keyword(null,"column","column",2078222095),frame.getColumnNumber()], null),lambdaisland$chui$stacktrace$from_error_$_iter__28919(cljs.core.rest(s__28920__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(trace);
})));
}catch (e28916){var e__26264__auto__ = e28916;
return kitchen_async.promise.reject(e__26264__auto__);
}});

//# sourceMappingURL=lambdaisland.chui.stacktrace.js.map
