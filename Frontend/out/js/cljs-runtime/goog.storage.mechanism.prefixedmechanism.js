goog.provide("goog.storage.mechanism.PrefixedMechanism");
goog.require("goog.iter.Iterator");
goog.require("goog.storage.mechanism.IterableMechanism");
goog.storage.mechanism.PrefixedMechanism = function(mechanism, prefix) {
  goog.storage.mechanism.PrefixedMechanism.base(this, "constructor");
  this.mechanism_ = mechanism;
  this.prefix_ = prefix + "::";
};
goog.inherits(goog.storage.mechanism.PrefixedMechanism, goog.storage.mechanism.IterableMechanism);
goog.storage.mechanism.PrefixedMechanism.prototype.set = function(key, value) {
  this.mechanism_.set(this.prefix_ + key, value);
};
goog.storage.mechanism.PrefixedMechanism.prototype.get = function(key) {
  return this.mechanism_.get(this.prefix_ + key);
};
goog.storage.mechanism.PrefixedMechanism.prototype.remove = function(key) {
  this.mechanism_.remove(this.prefix_ + key);
};
goog.storage.mechanism.PrefixedMechanism.prototype.__iterator__ = function(opt_keys) {
  var subIter = this.mechanism_.__iterator__(true);
  var selfObj = this;
  var newIter = new goog.iter.Iterator();
  newIter.nextValueOrThrow = function() {
    var key = subIter.nextValueOrThrow();
    while (key.substr(0, selfObj.prefix_.length) != selfObj.prefix_) {
      key = subIter.nextValueOrThrow();
    }
    return opt_keys ? key.substr(selfObj.prefix_.length) : selfObj.mechanism_.get(key);
  };
  return newIter;
};

//# sourceMappingURL=goog.storage.mechanism.prefixedmechanism.js.map
