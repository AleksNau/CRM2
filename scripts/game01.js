const rightNumber = (number) => {
    const value = Math.ceil(Math.random() * 100);
    const a = number;

        if (isNaN(a)) {
            return console.log('Не число!')
        }

        if (value > a) {
            return console.log('Больше!')
        }

        if (value === a) {
            return console.log('Правильно!')
        }

        if (value < a) {
            return console.log('Меньше!')
        }
    }

rightNumber(prompt());