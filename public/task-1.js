"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Task 1

var RandomUtils = function () {
  function RandomUtils(generatedNumber) {
    _classCallCheck(this, RandomUtils);

    this.generatedNumber = generatedNumber;
  }

  _createClass(RandomUtils, [{
    key: "generateNumber",
    value: function generateNumber() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var randomNum = Math.random();

      if (1 - randomNum >= 0.9) {
        randomNum += 0.1;
      }

      var number = Math.floor(randomNum * Math.pow(10, length));

      this.generatedNumber = number;
      return number;
    }
  }, {
    key: "getProduct",
    value: function getProduct() {
      var allNumbers = this.generatedNumber.toString().split("");
      var arrayTotal = 0;

      for (var i = 0; i < allNumbers.length; i++) {
        if (i !== 0) {
          arrayTotal *= parseInt(allNumbers[i]);
        } else {
          arrayTotal = parseInt(allNumbers[i]);
        }
      }

      return arrayTotal;
    }
  }, {
    key: "getGreatestProductOfConsecutiveDigits",
    value: function getGreatestProductOfConsecutiveDigits() {
      var allNumbers = this.generatedNumber.toString().split("");
      var products = [];
      var highestProduct = 0;

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
  }, {
    key: "countInstancesOfNumber",
    value: function countInstancesOfNumber(n) {
      var allNumbers = this.generatedNumber.toString().split("");
      var count = 0;

      for (var i = 0; i < allNumbers.length; i++) {
        if (parseInt(allNumbers[i]) === n) {
          count++;
        }
      }

      return count;
    }
  }]);

  return RandomUtils;
}();

var utils = new RandomUtils();

console.log("Task 1 Output", utils.generateNumber(5), utils.getProduct(), utils.getGreatestProductOfConsecutiveDigits(), utils.countInstancesOfNumber(4));
