"use strict";

(function(exports) {
  function updateBackstagePasses(item) {
    item.sellIn = item.sellIn - 1;
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
  }

  exports.updateBackstagePasses = updateBackstagePasses;
})(this);
