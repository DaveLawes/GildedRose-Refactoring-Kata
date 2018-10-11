describe('Feature: Sulfuras', function() {

  it('remains static', function() {
    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 5, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toEqual(5);
    expect(items[0].quality).toEqual(80);
  });

});
