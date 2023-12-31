goog.provide("goog.storage.mechanism.mechanismfactory");
goog.require("goog.storage.mechanism.HTML5LocalStorage");
goog.require("goog.storage.mechanism.HTML5SessionStorage");
goog.require("goog.storage.mechanism.IEUserData");
goog.require("goog.storage.mechanism.PrefixedMechanism");
goog.requireType("goog.storage.mechanism.IterableMechanism");
goog.storage.mechanism.mechanismfactory.USER_DATA_SHARED_KEY = "UserDataSharedStore";
goog.storage.mechanism.mechanismfactory.create = function(opt_namespace) {
  return goog.storage.mechanism.mechanismfactory.createHTML5LocalStorage(opt_namespace) || goog.storage.mechanism.mechanismfactory.createIEUserData(opt_namespace);
};
goog.storage.mechanism.mechanismfactory.createHTML5LocalStorage = function(opt_namespace) {
  var storage = new goog.storage.mechanism.HTML5LocalStorage();
  if (storage.isAvailable()) {
    return opt_namespace ? new goog.storage.mechanism.PrefixedMechanism(storage, opt_namespace) : storage;
  }
  return null;
};
goog.storage.mechanism.mechanismfactory.createHTML5SessionStorage = function(opt_namespace) {
  var storage = new goog.storage.mechanism.HTML5SessionStorage();
  if (storage.isAvailable()) {
    return opt_namespace ? new goog.storage.mechanism.PrefixedMechanism(storage, opt_namespace) : storage;
  }
  return null;
};
goog.storage.mechanism.mechanismfactory.createIEUserData = function(opt_namespace) {
  var storage = new goog.storage.mechanism.IEUserData(opt_namespace || goog.storage.mechanism.mechanismfactory.USER_DATA_SHARED_KEY);
  if (storage.isAvailable()) {
    return storage;
  }
  return null;
};

//# sourceMappingURL=goog.storage.mechanism.mechanismfactory.js.map
