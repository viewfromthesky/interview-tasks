"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Task 2

// Specify number of elements to add once
// Specify a holding array for all generated elements
var numberOfElements = 100;
var elementsCollection = [];

var Number = function () {
  function Number(value, className) {
    _classCallCheck(this, Number);

    this.value = value;
    this.className = className;
  }

  _createClass(Number, [{
    key: "findDivisors",
    value: function findDivisors() {
      var elements = document.getElementsByClassName("number");
      var divisors = [];

      for (var i = 0; i < elements.length; i++) {
        var potentialDivisor = parseInt(elements[i].textContent);

        if (this.value % potentialDivisor === 0 && this.value !== potentialDivisor) {
          divisors.push(elements[i]);
        }
      }

      if (divisors.length !== 0) {
        for (var j = 0; j < divisors.length; j++) {
          divisors[j].style.backgroundColor = "blue";
          divisors[j].style.color = "white";
        }
      }

      return divisors;
    }
  }]);

  return Number;
}();

var clearAll = function clearAll(arrayOfElements) {
  if (arrayOfElements.length !== 0) {
    for (var i = 0; i < arrayOfElements.length; i++) {
      arrayOfElements[i].style.backgroundColor = "transparent";
      arrayOfElements[i].style.color = "black";
    }
  }

  return;
};

var _loop = function _loop() {
  // Create new Number instance for each generated element
  // Set up <p> element for each loop iteration
  var number = new Number(i + 1, "number");
  var element = document.createElement("p");
  var arrayOfDivisors = void 0;

  element.className = number.className;
  element.appendChild(document.createTextNode(number.value));

  // Add mouseover event listener to colour hovered element
  // and begin search for divisors
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = "yellow";
    // Number.findDivisors() returns array of divisors
    arrayOfDivisors = number.findDivisors();
  });

  // Add mouseout event listener to reset colours
  // only for affected elements, not entire DOM
  element.addEventListener("mouseout", function () {
    element.style.backgroundColor = "transparent";
    clearAll(arrayOfDivisors);
  });

  // Add element to holding array specified at top
  elementsCollection.push(element);
};

for (var i = 0; i < numberOfElements; i++) {
  _loop();
}

for (var j = 0; j < numberOfElements; j++) {
  // Select a random entry from the holding array based
  // on current array length
  var selection = Math.floor(Math.random() * elementsCollection.length);

  // Add selected element to DOM
  document.body.appendChild(elementsCollection[selection]);

  // Remove selected element from array to ensure it
  // doesn't appear more than once
  elementsCollection.splice(selection, 1);
}
