'use strict';

/**
 * Implement method Sort
 */

const defaultSort = (a, b) => {
  const stringValueA = a.toString(); const stringValueB = b.toString();

  if (stringValueA < stringValueB) {
    return -1;
  }

  if (stringValueA > stringValueB) {
    return 1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let n = this.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 1; i < n; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          swapped = true;
        }
      }
      n--;
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
