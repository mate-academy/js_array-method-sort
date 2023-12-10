'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => bubbleSort(a, b)) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < (this.length - i - 1); j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

function bubbleSort(a, b) {
  const aStr = a.toString();
  const bStr = b.toString();

  for (let i = 0; i < aStr.length; i++) {
    if (aStr.charAt(i) < bStr.charAt(i)) {
      return -1;
    } else if (aStr.charAt(i) > bStr.charAt(i)) {
      return 1;
    }
  }
}

module.exports = applyCustomSort;
