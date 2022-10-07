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
        return this.items.push(item);

    },

    increaseCount(amount) {
        let itemCount = 0;
        for (i = 0;i < this.items.length; i++) {
            itemCount += this.items[i].count;
        }
        this.count += amount;
        return this.count =  itemCount;
    },

    calculateItemPrice() {
        let itemPrice = 0;
        for (i = 0;i < this.items.length; i++) {
            itemPrice += this.items[i].price * this.items[i].count;
        }
        return this.totalPrice = itemPrice;
    },

    clear() {
        this.items.length = 0;
        this.totalPrice = 0;
        this.count =0;
        return this.items,this.totalPrice,this.count;
    },

    print() {
       return  JSON.stringify(this);
    },
};

cart.add(`подушки`,200,2);
cart.add(`тарелки`,200,3);
cart.add(`бельё`,450,1);
cart.increaseCount(2);
console.log(cart.calculateItemPrice())
console.log(cart.print());
cart.clear();
console.log(cart.print());