"use strict";

describe("Update Normal Item", function() {

  it("decreases sellIn by 1", function() {
    let item = { name: "Bread", sellIn: 1, quality: 4 };
    expect(updateNormalItem(item).sellIn).toEqual(0);
  });

  it("decreases quality by 1 when sellIn >= 0", function() {
    let item = { name: "Bread", sellIn: 1, quality: 4 };
    expect(updateNormalItem(item).quality).toEqual(3);
  });

  it("decreases quality by 2 when sellIn < 0", function() {
    let item = { name: "Bread", sellIn: 0, quality: 4 };
    expect(updateNormalItem(item).quality).toEqual(2);
  });

  it("caps lowest quality at 0", function() {
    let item = { name: "Bread", sellIn: 1, quality: 0 };
    expect(updateNormalItem(item).quality).toEqual(0);
  });

});
