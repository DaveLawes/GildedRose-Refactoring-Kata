'use strict';

describe('Update Conjured Item', function() {

  it('decreases sellIn by 1', function() {
    let item = { name: 'Conjured Mana Cake', sellIn: 1, quality: 4 };
    expect(updateConjured(item).sellIn).toEqual(0);
  });

  it('decreases quality by 2 when sellIn >= 0', function() {
    let item = { name: 'Conjured Mana Cake', sellIn: 1, quality: 4 };
    expect(updateConjured(item).quality).toEqual(2);
  });

  it('decreases quality by 4 when sellIn < 0', function() {
    let item = { name: 'Conjured Mana Cake', sellIn: 0, quality: 5 };
    expect(updateConjured(item).quality).toEqual(1);
  });

  it('caps lowest quality at 0', function() {
    let item = { name: 'Conjured Mana Cake', sellIn: 1, quality: 1 };
    expect(updateConjured(item).quality).toEqual(0);
  });

});
