"use strict";

(function(exports) {
  function Shop(items=[]) {
      this.items = items;
      this.updateNormalItem = updateNormalItem;
      this.updateAgedBrie = updateAgedBrie;
      this.updateBackstagePasses = updateBackstagePasses;
      this.updateConjured = updateConjured;
  };

  Shop.prototype.updateQuality = function() {
    for (var i = 0; i < this.items.length; i++) {
      switch(true) {
        case(this._isNormalItem(this.items[i].name)):
          this.updateNormalItem(this.items[i]);
          break;
        case(this._isSpecialItem("Aged Brie", this.items[i].name)):
          this.updateAgedBrie(this.items[i]);
          break;
        case(this._isSpecialItem("Backstage passes", this.items[i].name)):
          this.updateBackstagePasses(this.items[i]);
          break;
        case(this._isSpecialItem("Conjured", this.items[i].name)):
          this.updateConjured(this.items[i]);
          break;
      }
    }
    return this.items;
  }

  Shop.prototype._isNormalItem = function(item_name) {
    const validation = name =>
      this._isSpecialItem("Sulfuras", item_name)           ? false
      : this._isSpecialItem("Aged Brie", item_name)        ? false
      : this._isSpecialItem("Backstage passes", item_name) ? false
      : this._isSpecialItem("Conjured", item_name)         ? false
                                                           : true
    return validation();
  }

  Shop.prototype._isSpecialItem = function(special_name, item_name) {
    const validation = name =>
      item_name.search(special_name) > -1 ? true : false;
    return validation();
  }

  exports.Shop = Shop;
})(this);
