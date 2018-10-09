# Gilded Rose Tech Test

## Specification

I've translated the basic specification:

* Every day each item decreases the SellIn and Quality values by 1.
* When SellIn < 0, Quality decreases by 2.
* For normal items: 0 <= Quality <= 50
* Exceptions:
	1. Aged Brie: quality increases as SellIn decreases
	2. Sulfuras: quality is static at 80
	3. Backstage passes: quality increases as SellIn decreases. 
		- 5 < SellIn <= 10: quality increase +2
		- 0 < SellIn <=5  : quality increase +3
		- SellIn <= 0    : quality = 0

The new specification:

* "Conjured" items degrade as fast as normal items.

## User Stories

Existing user stories:

```
As a shop owner
So I can keep track of my stock
I'd like a system to automatically update the quality and sellIn values of my inventory

As a shop owner
So my stock quality updates appropriately
I'd like all normal items to reduce in quality by 1 each day

As a shop owner
So I can get rid out of date stock more quickly
I'd like items with sellIn < 0 to degrade in quality twice as quickly

As a shop owner
So I never pay people to take my stock away
I'd like all items to have a minimum quality of 0

As a shop owner
So I provided good value to my customers
I'd like all normal items to have a maximum value of 50

As a shop owner
So I can take advantage of certain items value
I'd like to define unique behaviours of Quality vs SellIn

As a shop owner
So I can make the most profit from "Sulfuras"
I'd like its quality to remain static at 80

As a shop owner
So I can make the most profit from "Aged Brie"
I'd like its quality to increase by 1 as SellIn decreases by 1

As a shop owner
So I can make the most profit from "Backstage passes"
I'd like its quality to increase (as defined in the specification)
```

The new customer requirement translates into an extra user story:

```
As a shop owner
To take advantage of "conjured" items short shelf life
I'd like the quality to decrease by 2 for every day that passes
```
