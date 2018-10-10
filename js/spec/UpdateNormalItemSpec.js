describe("Update Normal Item", function() {

  it("decreases sellIn by 1", function() {
    item = new Item("Bread", 1, 4)
    expect(updateNormalItem(item).sellIn).toEqual(0);
  });

  it("decreases quality by 1 when sellIn >= 0", function() {
    item = new Item("Bread", 1, 4)
    expect(updateNormalItem(item).quality).toEqual(3);
  });

  it("decreases quality by 2 when sellIn < 0", function() {
    item = new Item("Bread", 0, 4)
    expect(updateNormalItem(item).quality).toEqual(2);
  });

  it("caps lowest quality at 0", function() {
    item = new Item("Bread", 1, 0)
    expect(updateNormalItem(item).quality).toEqual(0);
  });

});