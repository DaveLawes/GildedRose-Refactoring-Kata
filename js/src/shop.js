"use strict";

(function(exports) {
  function Shop(items=[]) {
      this.items = items;
      this.updateNormalItem = updateNormalItem;
      this.updateAgedBrie = updateAgedBrie;
      this.updateBackstagePasses = updateBackstagePasses;
  };

  Shop.prototype.updateQuality = function() {
    for (var i = 0; i < this.items.length; i++) {
      switch(true) {
        case(this._isNormal(this.items[i].name)):
          this.updateNormalItem(this.items[i]);
          break;
        case(this._isSpecialItem("Aged Brie", this.items[i].name)):
          this.updateAgedBrie(this.items[i]);
          break;
        case(this._isSpecialItem("Backstage passes", this.items[i].name)):
          this.updateBackstagePasses(this.items[i]);
          break;
      }
    }
    return this.items;
  }

  Shop.prototype._isNormal = function(item_name) {
    const validation = name =>
      name.search("Sulfuras") !== -1           ? false
      : name.search("Aged Brie") !== -1        ? false
      : name.search("Backstage passes") !== -1 ? false
                                               : true
    return validation(item_name);
  }

  Shop.prototype._isSpecialItem = function(special_name, item_name) {
    const validation = name =>
      item_name.search(special_name) > -1 ? true : false;
    return validation();
  }

  exports.Shop = Shop;
})(this);
