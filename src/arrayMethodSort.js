'use strict';

function elementCompare(firstElement, secondElement) {
  const firstOperand = String(firstElement);
  const secondOperand = String(secondElement);

  if (firstOperand > secondOperand) {
    return 1;
  }

  if (firstOperand < secondOperand) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = elementCompare) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          this[i - 1] = current;
          this[i] = previous;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
