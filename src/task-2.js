// Task 2

// Specify number of elements to add once
// Specify a holding array for all generated elements
const numberOfElements = 100;
let elementsCollection = [];

class Number {
  constructor(value, className) {
    this.value = value;
    this.className = className;
  }
  findDivisors() {
    const elements = document.getElementsByClassName("number");
    let divisors = [];

    for (var i = 0; i < elements.length; i++) {
      const potentialDivisor = parseInt(elements[i].textContent);

      if (
        this.value % potentialDivisor === 0 &&
        this.value !== potentialDivisor
      ) {
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
}

const clearAll = arrayOfElements => {
  if (arrayOfElements.length !== 0) {
    for (var i = 0; i < arrayOfElements.length; i++) {
      arrayOfElements[i].style.backgroundColor = "transparent";
      arrayOfElements[i].style.color = "black";
    }
  }

  return;
};

for (var i = 0; i < numberOfElements; i++) {
  // Create new Number instance for each generated element
  // Set up <p> element for each loop iteration
  const number = new Number(i + 1, "number");
  let element = document.createElement("p");
  let arrayOfDivisors;

  element.className = number.className;
  element.appendChild(document.createTextNode(number.value));

  // Add mouseover event listener to colour hovered element
  // and begin search for divisors
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "yellow";
    // Number.findDivisors() returns array of divisors
    arrayOfDivisors = number.findDivisors();
  });

  // Add mouseout event listener to reset colours
  // only for affected elements, not entire DOM
  element.addEventListener("mouseout", () => {
    element.style.backgroundColor = "transparent";
    clearAll(arrayOfDivisors);
  });

  // Add element to holding array specified at top
  elementsCollection.push(element);
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
