describe("Feature: Aged Brie", function() {

  it("increases the quality every time .updateQuality() is invoked", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 5, 8) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Aged Brie");
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(9);
  });

  it("caps the highest quality at 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 5, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(50);
  });

  it("increases quality twice as quickly when sellIn < 0", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(7);    
  });

});
