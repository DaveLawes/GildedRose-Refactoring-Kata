'use strict';

describe('Update Backstage passes', function() {

  it('decreases sellIn by 1', function() {
    let item = { name: 'Backstage passes', sellIn: 1, quality: 4 };
    expect(updateBackstagePasses(item).sellIn).toEqual(0);
  });

  it('when sellIn > 10, increases the quality by 1', function() {
    let item = { name: 'Backstage passes', sellIn: 12, quality: 4 };
    expect(updateBackstagePasses(item).quality).toEqual(5);
  });

  it('when 5 < sellIn <= 10, increases the quality by 2', function() {
    let item = { name: 'Backstage passes', sellIn: 7, quality: 4 };
    expect(updateBackstagePasses(item).quality).toEqual(6);
  });

  it('when 0 <= sellIn <= 5, increases the quality by 3', function() {
    let item = { name: 'Backstage passes', sellIn: 5, quality: 4 };
    expect(updateBackstagePasses(item).quality).toEqual(7);
  });

  it('caps highest quality at 50', function() {
    let item = { name: 'Backstage passes', sellIn: 1, quality: 49 };
    expect(updateBackstagePasses(item).quality).toEqual(50);
  });

  it('when sellIn < 0, quality equals 0', function() {
    let item = { name: 'Backstage passes', sellIn: 0, quality: 50 };
    expect(updateBackstagePasses(item).quality).toEqual(0);
  });

});
