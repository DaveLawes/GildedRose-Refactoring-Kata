describe("Item", function() {

  it("constructs an Item prototype", function() {
    const item = new Item("Bread", 5, 8);
    expect(item.constructor).toEqual(Item);
  });

  it("returns the name", function() {
    const item = new Item("Bread", 5, 8);
    expect(item.name).toEqual("Bread");
  });

  it("returns the sellIn", function() {
    const item = new Item("Bread", 5, 8);
    expect(item.sellIn).toEqual(5);
  });

  it("returns the quality", function() {
    const item = new Item("Bread", 5, 8);
    expect(item.quality).toEqual(8);
  });

});
