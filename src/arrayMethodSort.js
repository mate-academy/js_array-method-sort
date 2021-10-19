'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = standartSort) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (count > 0);

    return this;
  };
}

function standartSort(elementA, elementB) {
  const strElementA = elementA.toString();
  const strElementB = elementB.toString();

  if (strElementA > strElementB) {
    return 1;
  } else if (strElementA === strElementB) {
    return 0;
  } else {
    return -1;
  }
}

module.exports = applyCustomSort;
