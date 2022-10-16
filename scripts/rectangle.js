'use strict';
const rectangle = {
  width: 5,
  height: 5,

  set setWidth(number) {
    if (isNaN(number)) {
      console.log('Введи число!');
    } else {
      this.width = number;
    }
  },

  set setHeight(number) {
    if (isNaN(number)) {
      console.log('Введи число!');
    } else {
      this.height = number;
    }
  },

  get Perimeter() {
    return `${this.width * 2 + this.height * 2}см`;
  },

  get Square() {
    return `${this.width * this.height}см`;
  },
};
rectangle.setHeight = 10;
rectangle.setWidth = 6;
console.log(rectangle.Perimeter);
console.log(rectangle.Square);
