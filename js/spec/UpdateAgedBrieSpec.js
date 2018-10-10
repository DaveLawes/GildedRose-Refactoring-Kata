"use strict";

describe("Update Aged Brie", function() {
  var item;

  it("decreases sellIn by 1", function() {
    item = { name: "Aged Brie", sellIn: 1, quality: 4 };
    expect(updateAgedBrie(item).sellIn).toEqual(0);
  });

  it("increases quality by 1 when sellIn >= 0", function() {
    item = { name: "Aged Brie", sellIn: 1, quality: 4 };
    expect(updateAgedBrie(item).quality).toEqual(5);
  });

  it("increases quality by 2 when sellIn < 0", function() {
    item = { name: "Aged Brie", sellIn: 0, quality: 4 };
    expect(updateAgedBrie(item).quality).toEqual(6);
  });

  it("caps highest quality at 50", function() {
    item = { name: "Aged Brie", sellIn: 0, quality: 49 };
    expect(updateAgedBrie(item).quality).toEqual(50);
  });

});
