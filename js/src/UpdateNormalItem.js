(function(exports) {
  function updateNormalItem(item) {
    item.sellIn = item.sellIn - 1;

    item.quality === 0 ? item.quality =  0
    : item.sellIn >= 0 ? item.quality -= 1
                       : item.quality -= 2
    console.log("return from module");
    console.log(item);
    return item
  }

  exports.updateNormalItem = updateNormalItem;

})(this);
