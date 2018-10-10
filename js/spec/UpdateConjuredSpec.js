describe("Update Conjured Item", function() {

  it("decreases sellIn by 1", function() {
    item = new Item("Conjured Mana Cake", 1, 4)
    expect(updateConjured(item).sellIn).toEqual(0);
  });

  it("decreases quality by 2 when sellIn >= 0", function() {
    item = new Item("Conjured Mana Cake", 1, 4)
    expect(updateConjured(item).quality).toEqual(2);
  });

  it("decreases quality by 4 when sellIn < 0", function() {
    item = new Item("Conjured Mana Cake", 0, 5)
    expect(updateConjured(item).quality).toEqual(1);
  });

  it("caps lowest quality at 0", function() {
    item = new Item("Conjured Mana Cake", 1, 1)
    expect(updateConjured(item).quality).toEqual(0);
  });

});
