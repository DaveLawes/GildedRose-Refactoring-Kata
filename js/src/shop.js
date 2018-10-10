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

      const item = this.items[i]

      switch(true) {

        case(this._isNormal(item.name)):
          this.updateNormalItem(item);
          break;

        case(this._isAgedBrie(item.name)):
          this.updateAgedBrie(item);
          break;

        case(this._isBackstagePasses(item.name)):
          this.updateBackstagePasses(item);
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

  Shop.prototype._isSulfuras = function(item_name) {
    const validation = name =>
      item_name.search("Sulfuras") > -1 ? true : false;

    return validation(item_name);
  }

  Shop.prototype._isAgedBrie = function(item_name) {
    const validation = name =>
      item_name.search("Aged Brie") > -1 ? true : false;

    return validation(item_name);
  }

  Shop.prototype._isBackstagePasses = function(item_name) {
    const validation = name =>
      item_name.search("Backstage passes") > -1 ? true : false;

    return validation(item_name);
  }

  exports.Shop = Shop;
})(this);
