'use strict';

const defaultCompareFuncton = (a, b) => {
  const firstElement = a.toString();
  const secondElement = b.toString();

  switch (true) {
    case firstElement > secondElement:
      return 1;
    case firstElement === secondElement:
      return 0;
    case firstElement < secondElement:
      return -1;
  }
};

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompareFuncton) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const firstVariable = this[i];
        const secondVariable = this[i + 1];

        if (compareFunction(firstVariable, secondVariable) > 0) {
          this[i] = secondVariable;
          this[i + 1] = firstVariable;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
