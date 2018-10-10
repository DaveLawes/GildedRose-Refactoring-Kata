"use strict";

describe("Item", function() {

  var item;

  beforeEach(function() {
    item = new Item("Bread", 5, 8);
  });

  it("constructs an Item prototype", function() {
    expect(item.constructor).toEqual(Item);
  });

  it("returns the name", function() {
    expect(item.name).toEqual("Bread");
  });

  it("returns the sellIn", function() {
    expect(item.sellIn).toEqual(5);
  });

  it("returns the quality", function() {
    expect(item.quality).toEqual(8);
  });

});
