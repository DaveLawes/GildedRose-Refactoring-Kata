describe('Feature: Aged Brie', function() {

  it('when sellIn >= 0, increases quality by 1', function() {
    const gildedRose = new Shop([ new Item('Aged Brie', 5, 8) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('Aged Brie');
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(9);
  });

  it('when sellIn < 0, increases quality by 2', function() {
    const gildedRose = new Shop([ new Item('Aged Brie', 0, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(7);
  });

  it('caps the highest quality at 50', function() {
    const gildedRose = new Shop([ new Item('Aged Brie', 5, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(50);
  });

});
