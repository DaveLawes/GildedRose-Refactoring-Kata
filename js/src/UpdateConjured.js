'use strict';

(function(exports) {
  function updateConjured(item) {
    item.sellIn = item.sellIn - 1;
    item.sellIn >= 0  ? item.quality -= 2 : item.quality -= 4;
    item.quality <= 0 ? item.quality = 0  : null;
    return item;
  }

  exports.updateConjured = updateConjured;
})(this);
