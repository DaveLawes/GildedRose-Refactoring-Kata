'use strict';

(function(exports) {
  const MAX = 50;
  const MIN = 0;

  function Update() {};

  Update.prototype.normalItem = function(item) {
    _updateSellIn.call(this, item);
    _updateQuality.call(this, item, -1, -2);
    _applyMinCap.call(this, item);
    return item;
  };

  Update.prototype.agedBrie = function(item) {
    _updateSellIn.call(this, item);
    _updateQuality.call(this, item, 1, 2);
    _applyMaxCap.call(this, item);
    return item;
  };

  Update.prototype.conjured = function(item) {
    _updateSellIn.call(this, item);
    _updateQuality.call(this, item, -2, -4);
    _applyMinCap.call(this, item);
    return item;
  };

  Update.prototype.backstagePasses = function(item) {
    _updateSellIn.call(this, item);
    switch(true) {
      case(item.sellIn < 0):
        item.quality = 0;
        break;
      case(item.sellIn >=0 && item.sellIn <= 5):
        item.quality += 3;
        break;
      case(item.sellIn > 5 && item.sellIn <= 10):
        item.quality += 2;
        break;
      case(item.sellIn > 10):
        item.quality += 1;
        break;
    }
    _applyMaxCap.call(this, item);
    return item;
  };

  function _updateSellIn(item) {
    item.sellIn -= 1;
  };

  function _updateQuality(item, gtZero, ltZero) {
    item.sellIn >= 0  ? item.quality += gtZero : item.quality += ltZero;
  };

  function _applyMinCap(item) {
    item.quality <= MIN ? item.quality = MIN  : null;
  };

  function _applyMaxCap(item) {
    item.quality >= MAX ? item.quality = MAX : null;
  };

  exports.Update = Update;
})(this);
