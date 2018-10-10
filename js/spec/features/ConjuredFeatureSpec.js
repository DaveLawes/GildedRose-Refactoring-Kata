describe("Feature: Conjured Items", function() {

  it("when sellIn >= 0, reduces the quality by 2", function() {
    const gildedRose = new Shop([ new Item("Conjured Mana Cake", 3, 6) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Conjured Mana Cake");
    expect(items[0].sellIn).toEqual(2);
    expect(items[0].quality).toEqual(4);
  });

  it("when sellIn < 0, decreases the quality by 4", function() {
    const gildedRose = new Shop([ new Item("Conjured Mana Cake", 0, 8) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(4);
  });

  it("caps the minimum quality at 0", function() {
    const gildedRose = new Shop([ new Item("Conjured Mana Cake", 4, 1) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

});
