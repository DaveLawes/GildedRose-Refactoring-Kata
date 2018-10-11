'use strict';

(function(exports) {
  function Shop(items=[]) {
      this.items = items;
      this.updateNormalItem = updateNormalItem;
      this.updateAgedBrie = updateAgedBrie;
      this.updateBackstagePasses = updateBackstagePasses;
      this.updateConjured = updateConjured;
  };

  Shop.prototype.updateQuality = function() {
    for (let i = 0; i < this.items.length; i++) {
      switch(true) {
        case(_isNormalItem.call(this, this.items[i].name)):
          this.updateNormalItem(this.items[i]);
          break;
        case(_isSpecialItem.call(this, 'Aged Brie', this.items[i].name)):
          this.updateAgedBrie(this.items[i]);
          break;
        case(_isSpecialItem.call(this, 'Backstage passes', this.items[i].name)):
          this.updateBackstagePasses(this.items[i]);
          break;
        case(_isSpecialItem.call(this, 'Conjured', this.items[i].name)):
          this.updateConjured(this.items[i]);
          break;
      }
    }
    return this.items;
  }

  function _isNormalItem(item_name) {
    const validation = name =>
      _isSpecialItem.call(this, 'Sulfuras', item_name)           ? false
      : _isSpecialItem.call(this, 'Aged Brie', item_name)        ? false
      : _isSpecialItem.call(this, 'Backstage passes', item_name) ? false
      : _isSpecialItem.call(this, 'Conjured', item_name)         ? false
                                                                 : true;
    return validation();
  }

  function _isSpecialItem(special_name, item_name) {
    const validation = name =>
      item_name.search(special_name) > -1 ? true : false;
    return validation();
  }

  exports.Shop = Shop;
})(this);
