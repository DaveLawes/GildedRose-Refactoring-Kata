'use strict';

(function(exports) {
  function Shop(items=[], update = new Update()) {
      this.items = items;
      this.update = update;
  };

  Shop.prototype.updateQuality = function() {
    for (let i = 0; i < this.items.length; i++) {
      switch(true) {
        case(_isNormalItem.call(this, this.items[i].name)):
          this.update.normalItem(this.items[i]);
          break;
        case(_isSpecialItem.call(this, 'Aged Brie', this.items[i].name)):
          this.update.agedBrie(this.items[i]);
          break;
        case(_isSpecialItem.call(this, 'Backstage passes', this.items[i].name)):
          this.update.backstagePasses(this.items[i]);
          break;
        case(_isSpecialItem.call(this, 'Conjured', this.items[i].name)):
          this.update.conjured(this.items[i]);
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
      item_name.toLowerCase().search(special_name.toLowerCase()) > -1 ? true : false;
    return validation();
  }

  exports.Shop = Shop;
})(this);
