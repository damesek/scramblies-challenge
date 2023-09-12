goog.provide('lambdaisland.clj_diff.core');
/**
 * Create the edit script for transforming sequance a into sequence b.
 *   An edit script is a map with keys :+ and :- for additions and deletions.
 *   Additions are represented as a sequence of vectors. The first item in each
 *   vector is the index where the rest of the items in the vector are to be
 *   inserted. For example [3 b c] means to insert b an c after whatever is
 *   in index 3. Deletions are represented as a sequence of indexes to delete.
 * 
 *   For example: the diff of 'abcabba' and 'cbabac' would generate the edit
 *   script below.
 * 
 *    {:+ [[2 b] [6 c]], :- [0 1 5]}
 * 
 *   An index of -1 may appear in additions and is a special case which means to
 *   add the elements at the beginning of the sequence.
 */
lambdaisland.clj_diff.core.diff = (function lambdaisland$clj_diff$core$diff(a,b){
return lambdaisland.clj_diff.miller.diff.cljs$core$IFn$_invoke$arity$2(a,b);
});
lambdaisland.clj_diff.core.merge_patch = (function lambdaisland$clj_diff$core$merge_patch(s,edit_script,delete_symbol){
var s__$1 = cljs.core.vec(s);
var additions = new cljs.core.Keyword(null,"+","+",1913524883).cljs$core$IFn$_invoke$arity$1(edit_script);
var deletions = new cljs.core.Keyword(null,"-","-",-2112348439).cljs$core$IFn$_invoke$arity$1(edit_script);
var s__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,b,delete_symbol);
}),s__$1,deletions);
var s__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
var index = cljs.core.first(b);
var items = cljs.core.rest(b);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(-1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,(0),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(items),cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,(0))));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,index,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,index)));
}
}),s__$2,additions);
return cljs.core.flatten(s__$3);
});
lambdaisland.clj_diff.core.patch_STAR_ = (function lambdaisland$clj_diff$core$patch_STAR_(s,edit_script){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37102_SHARP_){
return (!((p1__37102_SHARP_ == null)));
}),lambdaisland.clj_diff.core.merge_patch(s,edit_script,null));
});
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.clj_diff !== 'undefined') && (typeof lambdaisland.clj_diff.core !== 'undefined') && (typeof lambdaisland.clj_diff.core.patch !== 'undefined')){
} else {
/**
 * Use the instructions in the edit script to transform the sequence s into
 *   a new sequence. If the edit script was created by using diff on a and b then
 *   patch will use the edit script to transform a into b.
 * 
 *   (diff a b) -> x, (patch a x) -> b.
 */
lambdaisland.clj_diff.core.patch = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37108 = cljs.core.get_global_hierarchy;
return (fexpr__37108.cljs$core$IFn$_invoke$arity$0 ? fexpr__37108.cljs$core$IFn$_invoke$arity$0() : fexpr__37108.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.clj-diff.core","patch"),(function (s,_){
if(typeof s === 'string'){
return new cljs.core.Keyword(null,"string","string",-1989541586);
} else {
return null;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
lambdaisland.clj_diff.core.patch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (s,edit_script){
return lambdaisland.clj_diff.core.patch_STAR_(s,edit_script);
}));
lambdaisland.clj_diff.core.patch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (s,edit_script){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,lambdaisland.clj_diff.core.patch_STAR_(s,edit_script));
}));
/**
 * Returns the edit distance between the two passed sequences. May also be
 *   passed an edit script. The edit distance is the minimum number of insertions
 *   and deletions required to transform one sequence into another.
 */
lambdaisland.clj_diff.core.edit_distance = (function lambdaisland$clj_diff$core$edit_distance(var_args){
var G__37118 = arguments.length;
switch (G__37118) {
case 2:
return lambdaisland.clj_diff.core.edit_distance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return lambdaisland.clj_diff.core.edit_distance.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.clj_diff.core.edit_distance.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return lambdaisland.clj_diff.miller.edit_distance.cljs$core$IFn$_invoke$arity$2(a,b);
}));

(lambdaisland.clj_diff.core.edit_distance.cljs$core$IFn$_invoke$arity$1 = (function (edit_script){
return (cljs.core.count(new cljs.core.Keyword(null,"-","-",-2112348439).cljs$core$IFn$_invoke$arity$1(edit_script)) + cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37115_SHARP_){
return cljs.core.count(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),p1__37115_SHARP_));
}),new cljs.core.Keyword(null,"+","+",1913524883).cljs$core$IFn$_invoke$arity$1(edit_script))));
}));

(lambdaisland.clj_diff.core.edit_distance.cljs$lang$maxFixedArity = 2);

lambdaisland.clj_diff.core.max_or_zero = (function lambdaisland$clj_diff$core$max_or_zero(coll){
if(((cljs.core.coll_QMARK_(coll)) && ((!(cljs.core.empty_QMARK_(coll)))))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,coll);
} else {
return (0);
}
});
/**
 * Returns the Levenshtein distance between two sequences. May either be passed
 *   the two sequences or a diff of the two sequences.
 * 
 *   From [Wikipedia](http://en.wikipedia.org/wiki/Levenshtein_distance):
 *   The Levenshtein distance between two strings is the minimum number of edits
 *   needed to transform one string into the other, with the allowable edit
 *   operations being insertion, deletion and substitution of a single character.
 * 
 *   This function works not only with strings but with any Clojure sequence.
 * 
 *   Warning! Technically this function is estimating the Levenshtein distance
 *   from a computed diff. Most of the time, it is the same as the real Levenshtein
 *   distance but in same cases it may be larger. The reason for this is that
 *   there may be multiple paths through an edit graph with the same edit
 *   distance but with differing Levenshtein distance. A future improvement to
 *   the diff algorithm whould be to find all paths and prefer the one with the
 *   minimum Levenshtein distance.
 */
lambdaisland.clj_diff.core.levenshtein_distance = (function lambdaisland$clj_diff$core$levenshtein_distance(var_args){
var G__37158 = arguments.length;
switch (G__37158) {
case 2:
return lambdaisland.clj_diff.core.levenshtein_distance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return lambdaisland.clj_diff.core.levenshtein_distance.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.clj_diff.core.levenshtein_distance.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return lambdaisland.clj_diff.core.levenshtein_distance.cljs$core$IFn$_invoke$arity$1(lambdaisland.clj_diff.core.diff(a,b));
}));

(lambdaisland.clj_diff.core.levenshtein_distance.cljs$core$IFn$_invoke$arity$1 = (function (edit_script){
var additions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37138_SHARP_){
var index = cljs.core.first(p1__37138_SHARP_);
var items = cljs.core.rest(p1__37138_SHARP_);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,index,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),new cljs.core.Keyword(null,"a","a",-2123407586)));
}),new cljs.core.Keyword(null,"+","+",1913524883).cljs$core$IFn$_invoke$arity$1(edit_script));
var max_index = (function (){var x__4336__auto__ = lambdaisland.clj_diff.core.max_or_zero(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,additions));
var y__4337__auto__ = lambdaisland.clj_diff.core.max_or_zero(new cljs.core.Keyword(null,"-","-",-2112348439).cljs$core$IFn$_invoke$arity$1(edit_script));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var v = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(max_index,new cljs.core.Keyword(null,"e","e",1381269198)));
var patched = lambdaisland.clj_diff.core.merge_patch(v,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edit_script,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"+","+",1913524883),additions], null)], 0)),new cljs.core.Keyword(null,"d","d",1972142424));
var edit_groups = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37151_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.first(p1__37151_SHARP_));
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__37152_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__37152_SHARP_,new cljs.core.Keyword(null,"e","e",1381269198))){
return new cljs.core.Keyword(null,"e","e",1381269198);
} else {
return new cljs.core.Keyword(null,"edit","edit",-1641834166);
}
}),patched));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (group){
var x__4336__auto__ = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37155_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__37155_SHARP_,new cljs.core.Keyword(null,"a","a",-2123407586));
}),group));
var y__4337__auto__ = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37156_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__37156_SHARP_,new cljs.core.Keyword(null,"d","d",1972142424));
}),group));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
}),edit_groups));
}));

(lambdaisland.clj_diff.core.levenshtein_distance.cljs$lang$maxFixedArity = 2);

lambdaisland.clj_diff.core.longest_common_subseq = (function lambdaisland$clj_diff$core$longest_common_subseq(a,b){
return lambdaisland.clj_diff.miller.longest_common_subseq.cljs$core$IFn$_invoke$arity$2(a,b);
});

//# sourceMappingURL=lambdaisland.clj_diff.core.js.map
