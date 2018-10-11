'use strict';

(function(exports) {
  function Update() {};

  Update.prototype.normalItem = function(item) {
    _updateSellIn.call(this, item);
    item.sellIn >= 0  ? item.quality -= 1 : item.quality -= 2;
    item.quality <= 0 ? item.quality = 0  : null;
    return item;
  };

  Update.prototype.agedBrie = function(item) {
    _updateSellIn.call(this, item);
    item.sellIn >= 0   ? item.quality += 1 : item.quality += 2;
    item.quality >= 50 ? item.quality = 50 : null;
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
    item.quality > 50 ? item.quality = 50 : null;
    return item;
  };

  Update.prototype.conjured = function(item) {
    _updateSellIn.call(this, item);
    item.sellIn >= 0  ? item.quality -= 2 : item.quality -= 4;
    item.quality <= 0 ? item.quality = 0  : null;
    return item;
  };

  function _updateSellIn(item) {
    item.sellIn -= 1;
  };

  exports.Update = Update;
})(this);
