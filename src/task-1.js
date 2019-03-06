// Task 1

class RandomUtils {
  constructor(generatedNumber) {
    this.generatedNumber = generatedNumber;
  }
  generateNumber(length = 1) {
    let randomNum = Math.random();

    if (1 - randomNum >= 0.9) {
      randomNum += 0.1;
    }

    const number = Math.floor(randomNum * Math.pow(10, length));

    this.generatedNumber = number;
    return number;
  }
  getProduct() {
    const allNumbers = this.generatedNumber.toString().split("");
    let arrayTotal = 0;

    for (var i = 0; i < allNumbers.length; i++) {
      if (i !== 0) {
        arrayTotal *= parseInt(allNumbers[i]);
      } else {
        arrayTotal = parseInt(allNumbers[i]);
      }
    }

    return arrayTotal;
  }
  getGreatestProductOfConsecutiveDigits() {
    const allNumbers = this.generatedNumber.toString().split("");
    let products = [];
    let highestProduct = 0;

    for (var i = 0; i < allNumbers.length - 1; i++) {
      products.push(parseInt(allNumbers[i]) * parseInt(allNumbers[i + 1]));
    }

    for (var j = 0; j < products.length; j++) {
      if (products[j] > highestProduct) {
        highestProduct = products[j];
      }
    }

    return highestProduct;
  }
  countInstancesOfNumber(n) {
    const allNumbers = this.generatedNumber.toString().split("");
    let count = 0;

    for (var i = 0; i < allNumbers.length; i++) {
      if (parseInt(allNumbers[i]) === n) {
        count++;
      }
    }

    return count;
  }
}

const utils = new RandomUtils();

console.log(
  "Task 1 Output",
  utils.generateNumber(5),
  utils.getProduct(),
  utils.getGreatestProductOfConsecutiveDigits(),
  utils.countInstancesOfNumber(4)
);
