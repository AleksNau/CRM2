const cart = {
    items : [],
    totalPrice : 0,
    count: 0,

    getTotalPrice() {
        return this.totalPrice;
    },
    add(name,price,amount = 1) {

        if (this.items.includes(name)){
            this.totalPrice += price * amount;
            this.count +=amount;
        } else {
            this.items.push(name);
            this.totalPrice += price * amount;
            this.count +=amount;
        }

        return this.items,this.totalPrice,this.count;

    },

    increaseCount(amount) {
        this.count += amount;
        return this.count;
    },

    calculateItemPrice() {
        return this.totalPrice;
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
console.log(cart.print());
console.log(cart.getTotalPrice());