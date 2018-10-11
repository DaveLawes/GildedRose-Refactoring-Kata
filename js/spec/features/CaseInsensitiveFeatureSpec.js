'use strict';

describe('Feature: System is Cases Insensitive', function() {

  it('is cases Insensitive', function() {
    let sulfuras = new Item('sulfuras', 5, 80);
    let agedBrie = new Item('aged brie', 5, 4);
    let backstagePasses = new Item('backstage passes', 5, 8);
    let conjured = new Item('conjured cake', 5, 3);
    const gildedRose = new Shop([ sulfuras, agedBrie, backstagePasses, conjured ]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toEqual(5);
    expect(items[0].quality).toEqual(80);

    expect(items[1].sellIn).toEqual(4);
    expect(items[1].quality).toEqual(5);

    expect(items[2].sellIn).toEqual(4);
    expect(items[2].quality).toEqual(11);

    expect(items[3].sellIn).toEqual(4);
    expect(items[3].quality).toEqual(1);

  })

})
