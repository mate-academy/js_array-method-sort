'use strict';

/**
 * Implement method Sort
 */

const compareTo = (a, b) => {
  if (a.toString() > b.toString()) {
    return 1;
  } else if (a.toString() < b.toString()) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const sortFunction = (compareFunction === undefined)
      ? compareTo
      : compareFunction;

    for (let i = 1; i < this.length; i++) {
      const currentElement = this[i];
      let j = i;
      while (j > 0 && sortFunction(this[j - 1], currentElement) > 0) {
        this[j] = this[j - 1];
        j--;
      }
      this[j] = currentElement;
    }

    return this;
  };
}

module.exports = applyCustomSort;
