'use strict';
const cart = {
  items: [],
  count: 0,
  discount: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },

  add(name, price, amount = 1) {
    const item = {};
    item.name = name;
    item.price = price;
    item.count = amount;
    this.increaseCount(amount);
    this.items.push(item);
  },

  set setDiscount(promocode) {
    if (promocode === "METHED") {
      this.discount += 15;
    }
    if (promocode === "NEWYEAR") {
      this.discount += 21;
    }
  },

  increaseCount(amount) {
    this.count += amount;
  },

  calculateItemPrice() {
    let itemPrice = 0;
    for (let i = 0; i < this.items.length; i++) {
      itemPrice += this.items[i].price * this.items[i].count;
    }
    itemPrice -= itemPrice / 100 * this.discount;
    return itemPrice;
  },

  clear() {
    this.items.length = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
};

cart.add(`подушки`, 200, 2);
cart.add(`тарелки`, 200, 3);
cart.add(`бельё`, 450, 1);
cart.setDiscount = "METHED";
cart.increaseCount(2);
cart.print();
cart.clear();
cart.print();
