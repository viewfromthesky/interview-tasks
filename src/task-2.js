// Task 2

const numberOfElements = 100;
let elementsCollection = [];
let elementsCollectionLength = 0;

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
  const number = new Number(i + 1, "number");
  let element = document.createElement("p");
  let arrayOfDivisors;

  element.className = number.className;
  element.appendChild(document.createTextNode(number.value));

  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "yellow";
    arrayOfDivisors = number.findDivisors();
  });

  element.addEventListener("mouseout", () => {
    element.style.backgroundColor = "transparent";
    clearAll(arrayOfDivisors);
  });

  elementsCollection.push(element);
  if (i === numberOfElements - 1) {
    elementsCollectionLength = elementsCollection.length;
  }
}

for (var j = 0; j < numberOfElements; j++) {
  var selection = Math.floor(Math.random() * elementsCollectionLength);

  document.body.appendChild(elementsCollection[selection]);
  elementsCollection.splice(selection, 1);

  elementsCollectionLength = elementsCollection.length;
}
