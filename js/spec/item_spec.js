describe("Unit: Item", function() {

  it("constructs an Item prototype", function() {
    const item = new Item("Bread", 5, 8);
    expect(item.constructor).toEqual(Item);
  });

});
