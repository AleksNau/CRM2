const cart = {
    items : [],
    totalPrice : 0,
    count: 0,

    getTotalPrice() {
        return this.totalPrice;
    },

    add(name,price,amount = 1) {
        const item = {};
        item.name = name;
        item.price = price;
        item.count = amount;
        this.increaseCount(amount);
        this.calculateItemPrice();
        return this.items.push(item);
    },

    increaseCount(amount) {
        return this.count += amount;
    },

    calculateItemPrice() {
        let itemPrice = 0;
         for (i = 0;i < this.items.length; i++) {
             itemPrice += this.items[i].price * this.items[i].count;
         }
        this.totalPrice = itemPrice;
    },

    clear() {
        this.items.length = 0;
        this.totalPrice = 0;
        this.count = 0;
    },

    print() {
       console.log(JSON.stringify(this.items));
       console.log(this.totalPrice);
    },
};

cart.add(`подушки`,200,2);
cart.add(`тарелки`,200,3);
cart.add(`бельё`,450,1);
cart.increaseCount(2);
cart.print();
console.log(cart.getTotalPrice())
cart.clear();
cart.print();