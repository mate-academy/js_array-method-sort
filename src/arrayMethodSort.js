'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compare) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const curr = this[i];

          this[i] = this[j];
          this[j] = curr;
        }
      }
    }

    return this;
  };
}

function compare(a, b) {
  const firstValue = a.toString();
  const secondValue = b.toString();

  switch (true) {
    case firstValue > secondValue:
      return 1;

    case firstValue < secondValue:
      return -1;
    default:
      return 0;
  };
}

module.exports = applyCustomSort;
