'use strict';

function compareStrings(firstElement, secondElement) {
  const firstItem = firstElement.toString();
  const secondItem = secondElement.toString();

  if (firstItem > secondItem) {
    return 1;
  }

  if (firstItem < secondItem) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i] = prev;
          this[i - 1] = current;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
