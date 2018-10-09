describe("Feature: Backstage Passes", function() {

  it("when sellIn > 10, increases the quality by 1", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 8) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toEqual(14);
    expect(items[0].quality).toEqual(9);
  });

  it("when '5 < sellIn <= 10', increases the quality by 2", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 8) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(10);
  });

  it("when '0 <= sellIn <= 5', increases the quality by 3", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 8) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(11);
  });

  it("when 'sellIn < 0', quality equals 0", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 8) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

});
