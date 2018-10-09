describe("Feature: normal items", function() {

  it("reduces the quality and sellIn value every time .updateQuality() is invoked", function() {
    const gildedRose = new Shop([ new Item("Bread", 5, 8) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Bread");
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(7);
  });

  it("caps the lowest quality at 0", function() {
    const gildedRose = new Shop([ new Item("Bread", 5, 1) ]);
    const items = gildedRose.updateQuality();
    const gildedRose2 = new Shop(items)
    const items2 = gildedRose2.updateQuality();
    expect(items2[0].sellIn).toEqual(3);
    expect(items2[0].quality).toEqual(0);
  });

  it("reduces the quality twice as quickly when sellIn < 0", function() {
    const gildedRose = new Shop([ new Item("Bread", 0, 8) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(6);
  });

});