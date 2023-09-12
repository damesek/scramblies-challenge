goog.provide('lambdaisland.deep_diff2.diff_impl');


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
lambdaisland.deep_diff2.diff_impl.Mismatch = (function (_,_PLUS_,__meta,__extmap,__hash){
this._ = _;
this._PLUS_ = _PLUS_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k37169,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__37182 = k37169;
var G__37182__$1 = (((G__37182 instanceof cljs.core.Keyword))?G__37182.fqn:null);
switch (G__37182__$1) {
case "-":
return self__._;

break;
case "+":
return self__._PLUS_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37169,else__4505__auto__);

}
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__37187){
var vec__37188 = p__37187;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37188,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37188,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#lambdaisland.deep-diff2.diff-impl.Mismatch{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"-","-",-2112348439),self__._],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"+","+",1913524883),self__._PLUS_],null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37168){
var self__ = this;
var G__37168__$1 = this;
return (new cljs.core.RecordIter((0),G__37168__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword(null,"+","+",1913524883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new lambdaisland.deep_diff2.diff_impl.Mismatch(self__._,self__._PLUS_,self__.__meta,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (277844286 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37170,other37171){
var self__ = this;
var this37170__$1 = this;
return (((!((other37171 == null)))) && ((((this37170__$1.constructor === other37171.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37170__$1._,other37171._)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37170__$1._PLUS_,other37171._PLUS_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37170__$1.__extmap,other37171.__extmap)))))))));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"+","+",1913524883),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new lambdaisland.deep_diff2.diff_impl.Mismatch(self__._,self__._PLUS_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k37169){
var self__ = this;
var this__4509__auto____$1 = this;
var G__37203 = k37169;
var G__37203__$1 = (((G__37203 instanceof cljs.core.Keyword))?G__37203.fqn:null);
switch (G__37203__$1) {
case "-":
case "+":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37169);

}
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__37168){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__37204 = cljs.core.keyword_identical_QMARK_;
var expr__37205 = k__4511__auto__;
if(cljs.core.truth_((pred__37204.cljs$core$IFn$_invoke$arity$2 ? pred__37204.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"-","-",-2112348439),expr__37205) : pred__37204.call(null,new cljs.core.Keyword(null,"-","-",-2112348439),expr__37205)))){
return (new lambdaisland.deep_diff2.diff_impl.Mismatch(G__37168,self__._PLUS_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37204.cljs$core$IFn$_invoke$arity$2 ? pred__37204.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"+","+",1913524883),expr__37205) : pred__37204.call(null,new cljs.core.Keyword(null,"+","+",1913524883),expr__37205)))){
return (new lambdaisland.deep_diff2.diff_impl.Mismatch(self__._,G__37168,self__.__meta,self__.__extmap,null));
} else {
return (new lambdaisland.deep_diff2.diff_impl.Mismatch(self__._,self__._PLUS_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__37168),null));
}
}
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"-","-",-2112348439),self__._,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"+","+",1913524883),self__._PLUS_,null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__37168){
var self__ = this;
var this__4501__auto____$1 = this;
return (new lambdaisland.deep_diff2.diff_impl.Mismatch(self__._,self__._PLUS_,G__37168,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"+","+",-740910886,null)], null);
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.cljs$lang$type = true);

(lambdaisland.deep_diff2.diff_impl.Mismatch.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"lambdaisland.deep-diff2.diff-impl/Mismatch",null,(1),null));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"lambdaisland.deep-diff2.diff-impl/Mismatch");
}));

/**
 * Positional factory function for lambdaisland.deep-diff2.diff-impl/Mismatch.
 */
lambdaisland.deep_diff2.diff_impl.__GT_Mismatch = (function lambdaisland$deep_diff2$diff_impl$__GT_Mismatch(_,_PLUS_){
return (new lambdaisland.deep_diff2.diff_impl.Mismatch(_,_PLUS_,null,null,null));
});

/**
 * Factory function for lambdaisland.deep-diff2.diff-impl/Mismatch, taking a map of keywords to field values.
 */
lambdaisland.deep_diff2.diff_impl.map__GT_Mismatch = (function lambdaisland$deep_diff2$diff_impl$map__GT_Mismatch(G__37172){
var extmap__4542__auto__ = (function (){var G__37219 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37172,new cljs.core.Keyword(null,"-","-",-2112348439),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"+","+",1913524883)], 0));
if(cljs.core.record_QMARK_(G__37172)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37219);
} else {
return G__37219;
}
})();
return (new lambdaisland.deep_diff2.diff_impl.Mismatch(new cljs.core.Keyword(null,"-","-",-2112348439).cljs$core$IFn$_invoke$arity$1(G__37172),new cljs.core.Keyword(null,"+","+",1913524883).cljs$core$IFn$_invoke$arity$1(G__37172),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
lambdaisland.deep_diff2.diff_impl.Deletion = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k37223,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__37238 = k37223;
var G__37238__$1 = (((G__37238 instanceof cljs.core.Keyword))?G__37238.fqn:null);
switch (G__37238__$1) {
case "-":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37223,else__4505__auto__);

}
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__37239){
var vec__37240 = p__37239;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37240,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37240,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#lambdaisland.deep-diff2.diff-impl.Deletion{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"-","-",-2112348439),self__._],null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37222){
var self__ = this;
var G__37222__$1 = this;
return (new cljs.core.RecordIter((0),G__37222__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-","-",-2112348439)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new lambdaisland.deep_diff2.diff_impl.Deletion(self__._,self__.__meta,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-213818521 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37224,other37225){
var self__ = this;
var this37224__$1 = this;
return (((!((other37225 == null)))) && ((((this37224__$1.constructor === other37225.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37224__$1._,other37225._)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37224__$1.__extmap,other37225.__extmap)))))));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"-","-",-2112348439),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new lambdaisland.deep_diff2.diff_impl.Deletion(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k37223){
var self__ = this;
var this__4509__auto____$1 = this;
var G__37270 = k37223;
var G__37270__$1 = (((G__37270 instanceof cljs.core.Keyword))?G__37270.fqn:null);
switch (G__37270__$1) {
case "-":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37223);

}
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__37222){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__37271 = cljs.core.keyword_identical_QMARK_;
var expr__37272 = k__4511__auto__;
if(cljs.core.truth_((pred__37271.cljs$core$IFn$_invoke$arity$2 ? pred__37271.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"-","-",-2112348439),expr__37272) : pred__37271.call(null,new cljs.core.Keyword(null,"-","-",-2112348439),expr__37272)))){
return (new lambdaisland.deep_diff2.diff_impl.Deletion(G__37222,self__.__meta,self__.__extmap,null));
} else {
return (new lambdaisland.deep_diff2.diff_impl.Deletion(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__37222),null));
}
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"-","-",-2112348439),self__._,null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__37222){
var self__ = this;
var this__4501__auto____$1 = this;
return (new lambdaisland.deep_diff2.diff_impl.Deletion(self__._,G__37222,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null)], null);
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.cljs$lang$type = true);

(lambdaisland.deep_diff2.diff_impl.Deletion.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"lambdaisland.deep-diff2.diff-impl/Deletion",null,(1),null));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"lambdaisland.deep-diff2.diff-impl/Deletion");
}));

/**
 * Positional factory function for lambdaisland.deep-diff2.diff-impl/Deletion.
 */
lambdaisland.deep_diff2.diff_impl.__GT_Deletion = (function lambdaisland$deep_diff2$diff_impl$__GT_Deletion(_){
return (new lambdaisland.deep_diff2.diff_impl.Deletion(_,null,null,null));
});

/**
 * Factory function for lambdaisland.deep-diff2.diff-impl/Deletion, taking a map of keywords to field values.
 */
lambdaisland.deep_diff2.diff_impl.map__GT_Deletion = (function lambdaisland$deep_diff2$diff_impl$map__GT_Deletion(G__37229){
var extmap__4542__auto__ = (function (){var G__37279 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37229,new cljs.core.Keyword(null,"-","-",-2112348439));
if(cljs.core.record_QMARK_(G__37229)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37279);
} else {
return G__37279;
}
})();
return (new lambdaisland.deep_diff2.diff_impl.Deletion(new cljs.core.Keyword(null,"-","-",-2112348439).cljs$core$IFn$_invoke$arity$1(G__37229),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
lambdaisland.deep_diff2.diff_impl.Insertion = (function (_PLUS_,__meta,__extmap,__hash){
this._PLUS_ = _PLUS_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k37282,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__37296 = k37282;
var G__37296__$1 = (((G__37296 instanceof cljs.core.Keyword))?G__37296.fqn:null);
switch (G__37296__$1) {
case "+":
return self__._PLUS_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37282,else__4505__auto__);

}
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__37298){
var vec__37299 = p__37298;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37299,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37299,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#lambdaisland.deep-diff2.diff-impl.Insertion{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"+","+",1913524883),self__._PLUS_],null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37281){
var self__ = this;
var G__37281__$1 = this;
return (new cljs.core.RecordIter((0),G__37281__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1913524883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new lambdaisland.deep_diff2.diff_impl.Insertion(self__._PLUS_,self__.__meta,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (598484861 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37283,other37284){
var self__ = this;
var this37283__$1 = this;
return (((!((other37284 == null)))) && ((((this37283__$1.constructor === other37284.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37283__$1._PLUS_,other37284._PLUS_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37283__$1.__extmap,other37284.__extmap)))))));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"+","+",1913524883),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new lambdaisland.deep_diff2.diff_impl.Insertion(self__._PLUS_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k37282){
var self__ = this;
var this__4509__auto____$1 = this;
var G__37310 = k37282;
var G__37310__$1 = (((G__37310 instanceof cljs.core.Keyword))?G__37310.fqn:null);
switch (G__37310__$1) {
case "+":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37282);

}
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__37281){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__37311 = cljs.core.keyword_identical_QMARK_;
var expr__37312 = k__4511__auto__;
if(cljs.core.truth_((pred__37311.cljs$core$IFn$_invoke$arity$2 ? pred__37311.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"+","+",1913524883),expr__37312) : pred__37311.call(null,new cljs.core.Keyword(null,"+","+",1913524883),expr__37312)))){
return (new lambdaisland.deep_diff2.diff_impl.Insertion(G__37281,self__.__meta,self__.__extmap,null));
} else {
return (new lambdaisland.deep_diff2.diff_impl.Insertion(self__._PLUS_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__37281),null));
}
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"+","+",1913524883),self__._PLUS_,null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__37281){
var self__ = this;
var this__4501__auto____$1 = this;
return (new lambdaisland.deep_diff2.diff_impl.Insertion(self__._PLUS_,G__37281,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null);
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.cljs$lang$type = true);

(lambdaisland.deep_diff2.diff_impl.Insertion.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"lambdaisland.deep-diff2.diff-impl/Insertion",null,(1),null));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"lambdaisland.deep-diff2.diff-impl/Insertion");
}));

/**
 * Positional factory function for lambdaisland.deep-diff2.diff-impl/Insertion.
 */
lambdaisland.deep_diff2.diff_impl.__GT_Insertion = (function lambdaisland$deep_diff2$diff_impl$__GT_Insertion(_PLUS_){
return (new lambdaisland.deep_diff2.diff_impl.Insertion(_PLUS_,null,null,null));
});

/**
 * Factory function for lambdaisland.deep-diff2.diff-impl/Insertion, taking a map of keywords to field values.
 */
lambdaisland.deep_diff2.diff_impl.map__GT_Insertion = (function lambdaisland$deep_diff2$diff_impl$map__GT_Insertion(G__37286){
var extmap__4542__auto__ = (function (){var G__37315 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37286,new cljs.core.Keyword(null,"+","+",1913524883));
if(cljs.core.record_QMARK_(G__37286)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37315);
} else {
return G__37315;
}
})();
return (new lambdaisland.deep_diff2.diff_impl.Insertion(new cljs.core.Keyword(null,"+","+",1913524883).cljs$core$IFn$_invoke$arity$1(G__37286),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


/**
 * @interface
 */
lambdaisland.deep_diff2.diff_impl.Diff = function(){};

var lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$dyn_37698 = (function (x,y){
var x__4550__auto__ = (((x == null))?null:x);
var m__4551__auto__ = (lambdaisland.deep_diff2.diff_impl._diff_similar[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4551__auto__.call(null,x,y));
} else {
var m__4549__auto__ = (lambdaisland.deep_diff2.diff_impl._diff_similar["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4549__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("Diff.-diff-similar",x);
}
}
});
lambdaisland.deep_diff2.diff_impl._diff_similar = (function lambdaisland$deep_diff2$diff_impl$_diff_similar(x,y){
if((((!((x == null)))) && ((!((x.lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$arity$2 == null)))))){
return x.lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$arity$2(x,y);
} else {
return lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$dyn_37698(x,y);
}
});


/**
 * @interface
 */
lambdaisland.deep_diff2.diff_impl.Undiff = function(){};

var lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$dyn_37708 = (function (x){
var x__4550__auto__ = (((x == null))?null:x);
var m__4551__auto__ = (lambdaisland.deep_diff2.diff_impl.left_undiff[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4551__auto__.call(null,x));
} else {
var m__4549__auto__ = (lambdaisland.deep_diff2.diff_impl.left_undiff["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4549__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("Undiff.left-undiff",x);
}
}
});
lambdaisland.deep_diff2.diff_impl.left_undiff = (function lambdaisland$deep_diff2$diff_impl$left_undiff(x){
if((((!((x == null)))) && ((!((x.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 == null)))))){
return x.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1(x);
} else {
return lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$dyn_37708(x);
}
});

var lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$dyn_37709 = (function (x){
var x__4550__auto__ = (((x == null))?null:x);
var m__4551__auto__ = (lambdaisland.deep_diff2.diff_impl.right_undiff[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4551__auto__.call(null,x));
} else {
var m__4549__auto__ = (lambdaisland.deep_diff2.diff_impl.right_undiff["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4549__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("Undiff.right-undiff",x);
}
}
});
lambdaisland.deep_diff2.diff_impl.right_undiff = (function lambdaisland$deep_diff2$diff_impl$right_undiff(x){
if((((!((x == null)))) && ((!((x.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 == null)))))){
return x.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1(x);
} else {
return lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$dyn_37709(x);
}
});

lambdaisland.deep_diff2.diff_impl.shift_insertions = (function lambdaisland$deep_diff2$diff_impl$shift_insertions(ins){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,idx){
var offset = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.vals(res)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,(idx + offset),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ins,idx));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(ins)));
});
/**
 * Given a set of deletion indexes and a map of insertion index to value sequence,
 *   match up deletions and insertions into replacements, returning a map of
 *   replacements, a set of deletions, and a map of insertions.
 */
lambdaisland.deep_diff2.diff_impl.replacements = (function lambdaisland$deep_diff2$diff_impl$replacements(p__37366){
var vec__37369 = p__37366;
var del = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37369,(0),null);
var ins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37369,(1),null);
var rep = cljs.core.PersistentArrayMap.EMPTY;
var del__$1 = del;
var del_rest = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(del__$1);
var ins__$1 = ins;
while(true){
var temp__5802__auto__ = cljs.core.first(del_rest);
if(cljs.core.truth_(temp__5802__auto__)){
var d = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ins__$1,d));
if(temp__5802__auto____$1){
var i = temp__5802__auto____$1;
var G__37711 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rep,d,cljs.core.first(i));
var G__37712 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(del__$1,d);
var G__37713 = cljs.core.next(del_rest);
var G__37714 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(ins__$1,d,cljs.core.next);
rep = G__37711;
del__$1 = G__37712;
del_rest = G__37713;
ins__$1 = G__37714;
continue;
} else {
var temp__5802__auto____$2 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ins__$1,(d - (1))));
if(temp__5802__auto____$2){
var i = temp__5802__auto____$2;
var G__37715 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rep,d,cljs.core.first(i));
var G__37716 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(del__$1,d);
var G__37717 = cljs.core.next(del_rest);
var G__37718 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ins__$1,(d - (1))),d,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(i),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ins__$1,d))));
rep = G__37715;
del__$1 = G__37716;
del_rest = G__37717;
ins__$1 = G__37718;
continue;
} else {
var G__37720 = rep;
var G__37721 = del__$1;
var G__37722 = cljs.core.next(del_rest);
var G__37723 = ins__$1;
rep = G__37720;
del__$1 = G__37721;
del_rest = G__37722;
ins__$1 = G__37723;
continue;
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rep,del__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.val)),lambdaisland.deep_diff2.diff_impl.shift_insertions(ins__$1))], null);
}
break;
}
});
/**
 * Wrapper around clj-diff that returns deletions and insertions as a set and map
 *   respectively.
 */
lambdaisland.deep_diff2.diff_impl.del_PLUS_ins = (function lambdaisland$deep_diff2$diff_impl$del_PLUS_ins(exp,act){
var map__37404 = lambdaisland.clj_diff.core.diff(exp,act);
var map__37404__$1 = cljs.core.__destructure_map(map__37404);
var del = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37404__$1,new cljs.core.Keyword(null,"-","-",-2112348439));
var ins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37404__$1,new cljs.core.Keyword(null,"+","+",1913524883));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,del),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__37415){
var vec__37417 = p__37415;
var seq__37418 = cljs.core.seq(vec__37417);
var first__37419 = cljs.core.first(seq__37418);
var seq__37418__$1 = cljs.core.next(seq__37418);
var k = first__37419;
var vs = seq__37418__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.vec(vs)], null);
})),ins)], null);
});
lambdaisland.deep_diff2.diff_impl.diff_seq_replacements = (function lambdaisland$deep_diff2$diff_impl$diff_seq_replacements(replacements,s){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,v){
if(cljs.core.contains_QMARK_(replacements,idx)){
var G__37421 = v;
var G__37422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(replacements,idx);
return (lambdaisland.deep_diff2.diff_impl.diff.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.deep_diff2.diff_impl.diff.cljs$core$IFn$_invoke$arity$2(G__37421,G__37422) : lambdaisland.deep_diff2.diff_impl.diff.call(null,G__37421,G__37422));
} else {
return v;
}
}),s);
});
lambdaisland.deep_diff2.diff_impl.diff_seq_deletions = (function lambdaisland$deep_diff2$diff_impl$diff_seq_deletions(del,s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (v,idx){
if(cljs.core.contains_QMARK_(del,idx)){
return lambdaisland.deep_diff2.diff_impl.__GT_Deletion(v);
} else {
return v;
}
}),s,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
lambdaisland.deep_diff2.diff_impl.diff_seq_insertions = (function lambdaisland$deep_diff2$diff_impl$diff_seq_insertions(ins,s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,p__37428){
var vec__37429 = p__37428;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37429,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37429,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2((idx + (1)),res),cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.__GT_Insertion,vs),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2((idx + (1)),res)], 0));
}),s,ins);
});
lambdaisland.deep_diff2.diff_impl.diff_seq = (function lambdaisland$deep_diff2$diff_impl$diff_seq(exp,act){
var vec__37433 = lambdaisland.deep_diff2.diff_impl.replacements(lambdaisland.deep_diff2.diff_impl.del_PLUS_ins(exp,act));
var rep = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37433,(0),null);
var del = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37433,(1),null);
var ins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37433,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,lambdaisland.deep_diff2.diff_impl.diff_seq_insertions(ins,lambdaisland.deep_diff2.diff_impl.diff_seq_deletions(del,lambdaisland.deep_diff2.diff_impl.diff_seq_replacements(rep,exp))));
});
lambdaisland.deep_diff2.diff_impl.diff_map = (function lambdaisland$deep_diff2$diff_impl$diff_map(exp,act){
return cljs.core.first((function (){var exp_ks = cljs.core.keys(exp);
var act_ks = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(act)),exp_ks),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(exp_ks),cljs.core.keys(act)));
var vec__37447 = lambdaisland.deep_diff2.diff_impl.del_PLUS_ins(exp_ks,act_ks);
var del = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37447,(0),null);
var ins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37447,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__37451,k){
var vec__37454 = p__37451;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37454,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37454,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37457 = m;
var G__37457__$1 = ((cljs.core.contains_QMARK_(del,idx))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37457,lambdaisland.deep_diff2.diff_impl.__GT_Deletion(k),(exp.cljs$core$IFn$_invoke$arity$1 ? exp.cljs$core$IFn$_invoke$arity$1(k) : exp.call(null,k))):G__37457);
var G__37457__$2 = (((!(cljs.core.contains_QMARK_(del,idx))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37457__$1,k,(function (){var G__37461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(exp,k);
var G__37462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(act,k);
return (lambdaisland.deep_diff2.diff_impl.diff.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.deep_diff2.diff_impl.diff.cljs$core$IFn$_invoke$arity$2(G__37461,G__37462) : lambdaisland.deep_diff2.diff_impl.diff.call(null,G__37461,G__37462));
})()):G__37457__$1);
if(cljs.core.contains_QMARK_(ins,idx)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(G__37457__$2,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.__GT_Insertion,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get,act))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ins,idx));
} else {
return G__37457__$2;
}
})(),(idx + (1))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_(ins,(-1)))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.__GT_Insertion,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get,act))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ins,(-1))):cljs.core.PersistentArrayMap.EMPTY),(0)], null),exp_ks);
})());
});
lambdaisland.deep_diff2.diff_impl.primitive_QMARK_ = (function lambdaisland$deep_diff2$diff_impl$primitive_QMARK_(x){
return ((typeof x === 'number') || (((typeof x === 'string') || (((cljs.core.boolean_QMARK_(x)) || (((cljs.core.inst_QMARK_(x)) || ((((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))))))))));
});
lambdaisland.deep_diff2.diff_impl.diff_atom = (function lambdaisland$deep_diff2$diff_impl$diff_atom(exp,act){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(exp,act)){
return exp;
} else {
return lambdaisland.deep_diff2.diff_impl.__GT_Mismatch(exp,act);
}
});
lambdaisland.deep_diff2.diff_impl.diff_similar = (function lambdaisland$deep_diff2$diff_impl$diff_similar(x,y){
if(lambdaisland.deep_diff2.diff_impl.primitive_QMARK_(x)){
return lambdaisland.deep_diff2.diff_impl.diff_atom(x,y);
} else {
return lambdaisland.deep_diff2.diff_impl._diff_similar(x,y);
}
});
lambdaisland.deep_diff2.diff_impl.diffable_QMARK_ = (function lambdaisland$deep_diff2$diff_impl$diffable_QMARK_(exp){
if((!((exp == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === exp.lambdaisland$deep_diff2$diff_impl$Diff$)))){
return true;
} else {
if((!exp.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(lambdaisland.deep_diff2.diff_impl.Diff,exp);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(lambdaisland.deep_diff2.diff_impl.Diff,exp);
}
});
lambdaisland.deep_diff2.diff_impl.diff = (function lambdaisland$deep_diff2$diff_impl$diff(exp,act){
if((exp == null)){
return lambdaisland.deep_diff2.diff_impl.diff_atom(exp,act);
} else {
if(((lambdaisland.deep_diff2.diff_impl.diffable_QMARK_(exp)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(exp),clojure.data.equality_partition(act))))){
return lambdaisland.deep_diff2.diff_impl.diff_similar(exp,act);
} else {
if(cljs.core.array_QMARK_(exp)){
return lambdaisland.deep_diff2.diff_impl.diff_seq(exp,act);
} else {
if(cljs.core.record_QMARK_(exp)){
return lambdaisland.deep_diff2.diff_impl.diff_map(exp,act);
} else {
return lambdaisland.deep_diff2.diff_impl.diff_atom(exp,act);

}
}
}
}
});
(cljs.core.PersistentHashSet.prototype.lambdaisland$deep_diff2$diff_impl$Diff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$arity$2 = (function (exp,act){
var exp__$1 = this;
var exp_seq = cljs.core.seq(exp__$1);
var act_seq = cljs.core.seq(act);
return cljs.core.set(lambdaisland.deep_diff2.diff_impl.diff_seq(exp_seq,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(act,exp_seq),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(exp__$1,act_seq))));
}));

(cljs.core.List.prototype.lambdaisland$deep_diff2$diff_impl$Diff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$arity$2 = (function (exp,act){
var exp__$1 = this;
return lambdaisland.deep_diff2.diff_impl.diff_seq(exp__$1,act);
}));

(cljs.core.PersistentVector.prototype.lambdaisland$deep_diff2$diff_impl$Diff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$arity$2 = (function (exp,act){
var exp__$1 = this;
return lambdaisland.deep_diff2.diff_impl.diff_seq(exp__$1,act);
}));

(cljs.core.EmptyList.prototype.lambdaisland$deep_diff2$diff_impl$Diff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$arity$2 = (function (exp,act){
var exp__$1 = this;
return lambdaisland.deep_diff2.diff_impl.diff_seq(exp__$1,act);
}));

(cljs.core.PersistentHashMap.prototype.lambdaisland$deep_diff2$diff_impl$Diff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$arity$2 = (function (exp,act){
var exp__$1 = this;
return lambdaisland.deep_diff2.diff_impl.diff_map(exp__$1,act);
}));

(cljs.core.PersistentArrayMap.prototype.lambdaisland$deep_diff2$diff_impl$Diff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$arity$2 = (function (exp,act){
var exp__$1 = this;
return lambdaisland.deep_diff2.diff_impl.diff_map(exp__$1,act);
}));
(lambdaisland.deep_diff2.diff_impl.Undiff["null"] = true);

(lambdaisland.deep_diff2.diff_impl.left_undiff["null"] = (function (m){
return m;
}));

(lambdaisland.deep_diff2.diff_impl.right_undiff["null"] = (function (m){
return m;
}));

(cljs.core.PersistentHashMap.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__37545_SHARP_){
return (cljs.core.key(p1__37545_SHARP_) instanceof lambdaisland.deep_diff2.diff_impl.Insertion);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.left_undiff,cljs.core.key),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.left_undiff,cljs.core.val)))),m__$1);
}));

(cljs.core.PersistentHashMap.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__37546_SHARP_){
return (cljs.core.key(p1__37546_SHARP_) instanceof lambdaisland.deep_diff2.diff_impl.Deletion);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.right_undiff,cljs.core.key),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.right_undiff,cljs.core.val)))),m__$1);
}));

(cljs.core.PersistentArrayMap.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__37543_SHARP_){
return (cljs.core.key(p1__37543_SHARP_) instanceof lambdaisland.deep_diff2.diff_impl.Insertion);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.left_undiff,cljs.core.key),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.left_undiff,cljs.core.val)))),m__$1);
}));

(cljs.core.PersistentArrayMap.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__37544_SHARP_){
return (cljs.core.key(p1__37544_SHARP_) instanceof lambdaisland.deep_diff2.diff_impl.Deletion);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.right_undiff,cljs.core.key),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.right_undiff,cljs.core.val)))),m__$1);
}));

(cljs.core.EmptyList.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.left_undiff,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37536_SHARP_){
return (p1__37536_SHARP_ instanceof lambdaisland.deep_diff2.diff_impl.Insertion);
}),s__$1));
}));

(cljs.core.EmptyList.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.right_undiff,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37537_SHARP_){
return (p1__37537_SHARP_ instanceof lambdaisland.deep_diff2.diff_impl.Deletion);
}),s__$1));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,new cljs.core.Keyword(null,"-","-",-2112348439));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,new cljs.core.Keyword(null,"+","+",1913524883));
}));

(lambdaisland.deep_diff2.diff_impl.Undiff["_"] = true);

(lambdaisland.deep_diff2.diff_impl.left_undiff["_"] = (function (m){
return m;
}));

(lambdaisland.deep_diff2.diff_impl.right_undiff["_"] = (function (m){
return m;
}));

(cljs.core.PersistentVector.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.left_undiff,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37539_SHARP_){
return (p1__37539_SHARP_ instanceof lambdaisland.deep_diff2.diff_impl.Insertion);
}),s__$1));
}));

(cljs.core.PersistentVector.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.right_undiff,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37540_SHARP_){
return (p1__37540_SHARP_ instanceof lambdaisland.deep_diff2.diff_impl.Deletion);
}),s__$1));
}));

(cljs.core.List.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.left_undiff,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37534_SHARP_){
return (p1__37534_SHARP_ instanceof lambdaisland.deep_diff2.diff_impl.Insertion);
}),s__$1));
}));

(cljs.core.List.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.right_undiff,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37535_SHARP_){
return (p1__37535_SHARP_ instanceof lambdaisland.deep_diff2.diff_impl.Deletion);
}),s__$1));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,new cljs.core.Keyword(null,"+","+",1913524883));
}));

(cljs.core.PersistentHashSet.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.set(lambdaisland.deep_diff2.diff_impl.left_undiff(cljs.core.seq(s__$1)));
}));

(cljs.core.PersistentHashSet.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.set(lambdaisland.deep_diff2.diff_impl.right_undiff(cljs.core.seq(s__$1)));
}));

(cljs.core.KeySeq.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.KeySeq.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.left_undiff,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37541_SHARP_){
return (p1__37541_SHARP_ instanceof lambdaisland.deep_diff2.diff_impl.Insertion);
}),s__$1));
}));

(cljs.core.KeySeq.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.right_undiff,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37542_SHARP_){
return (p1__37542_SHARP_ instanceof lambdaisland.deep_diff2.diff_impl.Deletion);
}),s__$1));
}));

(cljs.core.PersistentTreeSet.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeSet.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.set(lambdaisland.deep_diff2.diff_impl.left_undiff(cljs.core.seq(s__$1)));
}));

(cljs.core.PersistentTreeSet.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.set(lambdaisland.deep_diff2.diff_impl.right_undiff(cljs.core.seq(s__$1)));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,new cljs.core.Keyword(null,"-","-",-2112348439));
}));

(cljs.core.UUID.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
}));

(cljs.core.UUID.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
}));

//# sourceMappingURL=lambdaisland.deep_diff2.diff_impl.js.map
