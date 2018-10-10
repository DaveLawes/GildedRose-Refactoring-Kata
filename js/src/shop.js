"use strict";

function Shop(items=[]) {
    this.items = items;
};

Shop.prototype.updateQuality = function() {
  for (var i = 0; i < this.items.length; i++) {

    const item = this.items[i] // use item throughout case statement for ease of reading

    this._updateSellIn(item)

    switch(true) {

      case(this._isNormal(item.name)):
        this._updateNormal(item);
        break;

      case(this._isAgedBrie(item.name)):
        this._updateAgedBrie(item);
        break;

      case(this._isBackstagePasses(item.name)):
        this._updatePasses(item);
        break;
    }
  }
  return this.items;
}

Shop.prototype._updateSellIn = function(item) {
  if (!this._isSulfuras(item.name)) {
    item.sellIn = item.sellIn - 1;
  }
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

Shop.prototype._updateNormal = function(item) {
  item.quality === 0 ? item.quality =  0
  : item.sellIn >= 0 ? item.quality -= 1
                     : item.quality -= 2
}

Shop.prototype._updateAgedBrie = function(item) {
  item.quality >= 50   ? item.quality = 50
  : item.sellIn >= 0   ? item.quality += 1
                       : item.quality += 2
}

Shop.prototype._updatePasses = function(item) {
  switch(true) {
    case(item.sellIn < 0):
      item.quality = 0;
    break;

    case(item.sellIn >=0 && item.sellIn <= 5):
      item.quality += 3;
    break;

    case(item.sellIn >5 && item.sellIn <= 10):
      item.quality += 2;
    break;

    case(item.sellIn > 10):
      item.quality += 1;
    break;
  }
}
