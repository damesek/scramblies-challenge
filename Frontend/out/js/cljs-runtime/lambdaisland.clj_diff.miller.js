goog.provide('lambdaisland.clj_diff.miller');
/**
 * Get the next farthest x value by looking at previous farthest values on the
 *   diagonal above and below diagonal k. Choose the greater of the farthest x on
 *   the above diagonal and the farthest x on the diagonal below plus one. fp is
 *   a map of diagonals => farthest points.
 */
lambdaisland.clj_diff.miller.next_x = (function lambdaisland$clj_diff$miller$next_x(k,fp){
var x__4336__auto__ = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(fp,(k - (1)),(-1)) + (1));
var y__4337__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fp,(k + (1)),(-1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
});
/**
 * Starting at the farthest point on diagonal k, return the x value of the
 *   point at the end of the longest snake on this diagonal. A snake is a
 *   sequence of diagonal moves connecting match points on the edit graph.
 */
lambdaisland.clj_diff.miller.snake = (function lambdaisland$clj_diff$miller$snake(a,b,n,m,k,fp){
if(((cljs.core.vector_QMARK_(a)) && (cljs.core.vector_QMARK_(b)))){
} else {
throw (new Error("Assert failed: (and (vector? a) (vector? b))"));
}

var x = lambdaisland.clj_diff.miller.next_x(k,fp);
var y = (x - k);
var x__$1 = x;
var y__$1 = y;
while(true){
if((((x__$1 < n)) && ((((y__$1 < m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,(x__$1 + (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,(y__$1 + (1))))))))){
var G__37093 = (x__$1 + (1));
var G__37094 = (y__$1 + (1));
x__$1 = G__37093;
y__$1 = G__37094;
continue;
} else {
return x__$1;
}
break;
}
});
/**
 * Given a p value and a delta, return all diagonals in this p-band.
 */
lambdaisland.clj_diff.miller.p_band_diagonals = (function lambdaisland$clj_diff$miller$p_band_diagonals(p,delta){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.range.cljs$core$IFn$_invoke$arity$2(((-1) * p),delta),cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$2((delta + (1)),(delta + (p + (1))))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta], null)], 0));
});
/**
 * Given a p value, search all diagonals in the p-band for the furthest
 *   reaching endpoints. Record the furthest reaching endpoint for each p value
 *   in the map fp. Returns an updated fp map for p. a and b are the two
 *   sequences and n and m are their lengths respectively. delta is the
 *   diagonal of the sink and is equal to n - m.
 */
lambdaisland.clj_diff.miller.search_p_band = (function lambdaisland$clj_diff$miller$search_p_band(a,b,n,m,delta,p,fp){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (fp__$1,next_k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fp__$1,next_k,lambdaisland.clj_diff.miller.snake(a,b,n,m,next_k,fp__$1));
}),fp,lambdaisland.clj_diff.miller.p_band_diagonals(p,delta));
});
/**
 * Find the size of the shortest edit script (ses). Returns a 3-tuple of the
 *   size of the ses, the delta value (which is the diagonal of the sink)
 *   and the fp map. The optimal path from source to sink can be constructed from
 *   this information.
 */
lambdaisland.clj_diff.miller.ses = (function lambdaisland$clj_diff$miller$ses(a,b){
if((cljs.core.count(a) >= cljs.core.count(b))){
} else {
throw (new Error("Assert failed: (>= (count a) (count b))"));
}

var n = (cljs.core.count(a) - (1));
var m = (cljs.core.count(b) - (1));
var delta = (n - m);
var p = (0);
var fp = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(fp,(p - (1)),cljs.core.PersistentArrayMap.EMPTY),delta),n)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p - (1)),delta,fp], null);
} else {
var G__37097 = (p + (1));
var G__37098 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fp,p,lambdaisland.clj_diff.miller.search_p_band(a,b,n,m,delta,p,cljs.core.get.cljs$core$IFn$_invoke$arity$3(fp,(p - (1)),cljs.core.PersistentArrayMap.EMPTY)));
p = G__37097;
fp = G__37098;
continue;
}
break;
}
});
/**
 * Given a delta, p and k value, calculate the edit distance.
 */
lambdaisland.clj_diff.miller.edit_dist = (function lambdaisland$clj_diff$miller$edit_dist(delta,p,k){
if((k > delta)){
return (((2) * (p - (k - delta))) + k);
} else {
return (((2) * p) + k);
}
});
/**
 * Calculate the p value that will be used to look up the farthest reaching
 *   end point for the diagonal above k.
 */
lambdaisland.clj_diff.miller.p_value_up = (function lambdaisland$clj_diff$miller$p_value_up(delta,p,k){
if(((k + (1)) > delta)){
return p;
} else {
return (p - (1));
}
});
/**
 * Calculate the p value that will be used to look up the farthest reaching
 *   end point for the diagonal below k.
 */
lambdaisland.clj_diff.miller.p_value_left = (function lambdaisland$clj_diff$miller$p_value_left(delta,p,k){
if(((k - (1)) < delta)){
return p;
} else {
return (p - (1));
}
});
/**
 * Get information about the vertex above the one at x on k. If this vertex
 *   is chosen, it will represent an insertion.
 */
lambdaisland.clj_diff.miller.look_up = (function lambdaisland$clj_diff$miller$look_up(graph,delta,p,x,k){
if(((x - k) > (0))){
var up_k = (k + (1));
var up_p = lambdaisland.clj_diff.miller.p_value_up(delta,p,k);
var x_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$3(graph,up_p,cljs.core.PersistentArrayMap.EMPTY),up_k,(-1));
if((((x_STAR_ >= (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,x_STAR_)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"x","x",2099068185),x_STAR_,new cljs.core.Keyword(null,"p","p",151049309),up_p,new cljs.core.Keyword(null,"k","k",-2146297393),up_k,new cljs.core.Keyword(null,"d","d",1972142424),lambdaisland.clj_diff.miller.edit_dist(delta,up_p,up_k)], null);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Get information about the vertex to the left of the one at x on k. If this
 *   vertex is chosen, it will represent an deletion.
 */
lambdaisland.clj_diff.miller.look_left = (function lambdaisland$clj_diff$miller$look_left(graph,delta,p,x,k){
if((x > (0))){
var left_k = (k - (1));
var left_p = lambdaisland.clj_diff.miller.p_value_left(delta,p,k);
var x_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$3(graph,left_p,cljs.core.PersistentArrayMap.EMPTY),left_k,(-1));
if((((x_STAR_ >= (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((x - (1)),x_STAR_)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"x","x",2099068185),x_STAR_,new cljs.core.Keyword(null,"p","p",151049309),left_p,new cljs.core.Keyword(null,"k","k",-2146297393),left_k,new cljs.core.Keyword(null,"d","d",1972142424),lambdaisland.clj_diff.miller.edit_dist(delta,left_p,left_k)], null);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the x value at the head of the longest snake ending at (x, y).
 */
lambdaisland.clj_diff.miller.backtrack_snake = (function lambdaisland$clj_diff$miller$backtrack_snake(a,b,x,y){
if((((x >= (0))) && ((y >= (0))))){
} else {
throw (new Error("Assert failed: (and (>= x 0) (>= y 0))"));
}

var x__$1 = x;
var y__$1 = y;
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(x__$1,y__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0))) || ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,x__$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y__$1))))))){
return x__$1;
} else {
var G__37106 = (x__$1 - (1));
var G__37107 = (y__$1 - (1));
x__$1 = G__37106;
y__$1 = G__37107;
continue;
}
break;
}
});
/**
 * Find the next move through the edit graph which will decrease the
 *   edit distance by 1.
 */
lambdaisland.clj_diff.miller.next_edit = (function lambdaisland$clj_diff$miller$next_edit(a,b,graph,delta,p,x,k){
var _PERCENT_ = (function (){var d = lambdaisland.clj_diff.miller.edit_dist(delta,p,k);
var head_x = lambdaisland.clj_diff.miller.backtrack_snake(a,b,x,(x - k));
var head_x__$1 = head_x;
while(true){
var move = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (head_x__$1,d,head_x){
return (function (p1__37049_SHARP_){
return (((!((p1__37049_SHARP_ == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(p1__37049_SHARP_),(d - (1)))));
});})(head_x__$1,d,head_x))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (head_x__$1,d,head_x){
return (function (p1__37050_SHARP_){
return (p1__37050_SHARP_.cljs$core$IFn$_invoke$arity$5 ? p1__37050_SHARP_.cljs$core$IFn$_invoke$arity$5(graph,delta,p,head_x__$1,k) : p1__37050_SHARP_.call(null,graph,delta,p,head_x__$1,k));
});})(head_x__$1,d,head_x))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.clj_diff.miller.look_left,lambdaisland.clj_diff.miller.look_up], null))));
if((((head_x__$1 < x)) && ((move == null)))){
var G__37110 = (head_x__$1 + (1));
head_x__$1 = G__37110;
continue;
} else {
return move;
}
break;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((lambdaisland.clj_diff.miller.edit_dist(delta,p,k) - (1)),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(_PERCENT_))){
} else {
throw (new Error("Assert failed: (= (dec (edit-dist delta p k)) (:d %))"));
}

return _PERCENT_;
});
/**
 * Calculate the sequence of edits from the map of farthest reaching end
 *   points.
 */
lambdaisland.clj_diff.miller.edits = (function lambdaisland$clj_diff$miller$edits(a,b,p,delta,graph){
var next_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(lambdaisland.clj_diff.miller.next_edit,a,b,graph,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delta], 0));
var edits = cljs.core.List.EMPTY;
var prev = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.count(a),new cljs.core.Keyword(null,"p","p",151049309),p,new cljs.core.Keyword(null,"k","k",-2146297393),delta,new cljs.core.Keyword(null,"d","d",1972142424),lambdaisland.clj_diff.miller.edit_dist(delta,p,delta)], null);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(prev),(0))){
return edits;
} else {
var next = next_fn(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(prev),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(prev),new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(prev));
var G__37113 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edits,next);
var G__37114 = next;
edits = G__37113;
prev = G__37114;
continue;
}
break;
}
});
/**
 * If a is shorter than b, then the diff is calculated from b to a and this
 *   function is used to transpose the results into a diff from a to b.
 */
lambdaisland.clj_diff.miller.transpose = (function lambdaisland$clj_diff$miller$transpose(edit){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(edit,new cljs.core.Keyword(null,"edit","edit",-1641834166),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"edit","edit",-1641834166).cljs$core$IFn$_invoke$arity$1(edit)))?new cljs.core.Keyword(null,"delete","delete",-1768633620):new cljs.core.Keyword(null,"insert","insert",1286475395))),new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(edit) - new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(edit))),new cljs.core.Keyword(null,"k","k",-2146297393),(- new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(edit)));
});
/**
 * Convert a sequence of edits into an edit script.
 */
lambdaisland.clj_diff.miller.edits__GT_script = (function lambdaisland$clj_diff$miller$edits__GT_script(b,edits,f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (script,edit){
var map__37056 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(edit) : f.call(null,edit));
var map__37056__$1 = cljs.core.__destructure_map(map__37056);
var edit__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37056__$1,new cljs.core.Keyword(null,"edit","edit",-1641834166));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37056__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37056__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var y = ((x - k) + (1));
var insertions = new cljs.core.Keyword(null,"+","+",1913524883).cljs$core$IFn$_invoke$arity$1(script);
var last_insert = cljs.core.last(insertions);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edit__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(script,new cljs.core.Keyword(null,"-","-",-2112348439),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"-","-",-2112348439).cljs$core$IFn$_invoke$arity$1(script),x));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(script,new cljs.core.Keyword(null,"+","+",1913524883),(function (){var index = (x - (1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.first(last_insert))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(insertions)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(last_insert,cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(insertions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y)], null));
}
})());
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"+","+",1913524883),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"-","-",-2112348439),cljs.core.PersistentVector.EMPTY], null),edits);
});
lambdaisland.clj_diff.miller.vectorize = (function lambdaisland$clj_diff$miller$vectorize(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37124 = arguments.length;
var i__4865__auto___37125 = (0);
while(true){
if((i__4865__auto___37125 < len__4864__auto___37124)){
args__4870__auto__.push((arguments[i__4865__auto___37125]));

var G__37131 = (i__4865__auto___37125 + (1));
i__4865__auto___37125 = G__37131;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return lambdaisland.clj_diff.miller.vectorize.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(lambdaisland.clj_diff.miller.vectorize.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37059_SHARP_){
return cljs.core.vec(cljs.core.cons(null,p1__37059_SHARP_));
}),more);
}));

(lambdaisland.clj_diff.miller.vectorize.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(lambdaisland.clj_diff.miller.vectorize.cljs$lang$applyTo = (function (seq37060){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37060));
}));

lambdaisland.clj_diff.miller.order__GT_ses = (function lambdaisland$clj_diff$miller$order__GT_ses(a,b){
var vec__37066 = (((cljs.core.count(b) > cljs.core.count(a)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37066,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37066,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.clj_diff.miller.ses(a_STAR_,b_STAR_),a_STAR_,b_STAR_], null);
});
lambdaisland.clj_diff.miller.seq_diff = (function lambdaisland$clj_diff$miller$seq_diff(a,b){
var vec__37069 = lambdaisland.clj_diff.miller.vectorize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37069,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37069,(1),null);
var vec__37072 = lambdaisland.clj_diff.miller.order__GT_ses(a__$1,b__$1);
var es = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37072,(0),null);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37072,(1),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37072,(2),null);
var edits = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(lambdaisland.clj_diff.miller.edits,a_STAR_,b_STAR_,es);
return lambdaisland.clj_diff.miller.edits__GT_script(b__$1,edits,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a_STAR_,a__$1))?cljs.core.identity:lambdaisland.clj_diff.miller.transpose));
});
lambdaisland.clj_diff.miller.string_dispatch = (function lambdaisland$clj_diff$miller$string_dispatch(a,b){
if(((typeof a === 'string') && (typeof b === 'string'))){
return new cljs.core.Keyword(null,"string","string",-1989541586);
} else {
return null;
}
});
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.clj_diff !== 'undefined') && (typeof lambdaisland.clj_diff.miller !== 'undefined') && (typeof lambdaisland.clj_diff.miller.diff !== 'undefined')){
} else {
/**
 * Create an edit script that may be used to transform a into b. See doc string
 *   for clj-diff.core/diff. This function will ensure that diff* is called with
 *   arguments a and b where a >= b. If the passed values of a and b need to be
 *   swapped then the resulting path with will transposed.
 */
lambdaisland.clj_diff.miller.diff = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37075 = cljs.core.get_global_hierarchy;
return (fexpr__37075.cljs$core$IFn$_invoke$arity$0 ? fexpr__37075.cljs$core$IFn$_invoke$arity$0() : fexpr__37075.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.clj-diff.miller","diff"),lambdaisland.clj_diff.miller.string_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
lambdaisland.clj_diff.miller.diff.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a,b){
return lambdaisland.clj_diff.miller.seq_diff(a,b);
}));
lambdaisland.clj_diff.miller.seq_edit_dist = (function lambdaisland$clj_diff$miller$seq_edit_dist(a,b){
var vec__37076 = lambdaisland.clj_diff.miller.vectorize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37076,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37076,(1),null);
var vec__37079 = lambdaisland.clj_diff.miller.order__GT_ses(a__$1,b__$1);
var vec__37082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37079,(0),null);
var seq__37083 = cljs.core.seq(vec__37082);
var first__37084 = cljs.core.first(seq__37083);
var seq__37083__$1 = cljs.core.next(seq__37083);
var p = first__37084;
var more = seq__37083__$1;
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37079,(1),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37079,(2),null);
return (((2) * p) + (cljs.core.count(a_STAR_) - cljs.core.count(b_STAR_)));
});
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.clj_diff !== 'undefined') && (typeof lambdaisland.clj_diff.miller !== 'undefined') && (typeof lambdaisland.clj_diff.miller.edit_distance !== 'undefined')){
} else {
lambdaisland.clj_diff.miller.edit_distance = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37087 = cljs.core.get_global_hierarchy;
return (fexpr__37087.cljs$core$IFn$_invoke$arity$0 ? fexpr__37087.cljs$core$IFn$_invoke$arity$0() : fexpr__37087.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.clj-diff.miller","edit-distance"),lambdaisland.clj_diff.miller.string_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
lambdaisland.clj_diff.miller.edit_distance.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a,b){
return lambdaisland.clj_diff.miller.seq_edit_dist(a,b);
}));
lambdaisland.clj_diff.miller.edit_distance.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (a,b){
return lambdaisland.clj_diff.miller.seq_edit_dist(a,b);
}));
lambdaisland.clj_diff.miller.seq_lcs = (function lambdaisland$clj_diff$miller$seq_lcs(a,b){
var diff = lambdaisland.clj_diff.miller.seq_diff(a,b);
var deletions = new cljs.core.Keyword(null,"-","-",-2112348439).cljs$core$IFn$_invoke$arity$1(diff);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37091_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__37091_SHARP_,new cljs.core.Keyword("lambdaisland.clj-diff.miller","d","lambdaisland.clj-diff.miller/d",-45891548));
}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (coll,next){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll,next,new cljs.core.Keyword("lambdaisland.clj-diff.miller","d","lambdaisland.clj-diff.miller/d",-45891548));
}),cljs.core.vec(cljs.core.seq(a)),deletions));
});
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.clj_diff !== 'undefined') && (typeof lambdaisland.clj_diff.miller !== 'undefined') && (typeof lambdaisland.clj_diff.miller.longest_common_subseq !== 'undefined')){
} else {
lambdaisland.clj_diff.miller.longest_common_subseq = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37092 = cljs.core.get_global_hierarchy;
return (fexpr__37092.cljs$core$IFn$_invoke$arity$0 ? fexpr__37092.cljs$core$IFn$_invoke$arity$0() : fexpr__37092.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.clj-diff.miller","longest-common-subseq"),lambdaisland.clj_diff.miller.string_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
lambdaisland.clj_diff.miller.longest_common_subseq.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a,b){
return lambdaisland.clj_diff.miller.seq_lcs(a,b);
}));
lambdaisland.clj_diff.miller.longest_common_subseq.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,lambdaisland.clj_diff.miller.seq_lcs(a,b));
}));

//# sourceMappingURL=lambdaisland.clj_diff.miller.js.map
