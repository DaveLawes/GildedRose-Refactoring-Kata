"use strict";

describe("Feature: Normal Items", function() {

  it("when sellIn >= 0, reduces the quality by 1", function() {
    const gildedRose = new Shop([ new Item("Bread", 5, 8) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Bread");
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(7);
  });

  it("caps the lowest quality at 0", function() {
    const gildedRose = new Shop([ new Item("Bread", 5, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(0);
  });

  it("when sellIn < 0, reduces the quality by 2", function() {
    const gildedRose = new Shop([ new Item("Bread", 0, 8) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(6);
  });

});
