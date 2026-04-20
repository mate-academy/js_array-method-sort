'use strict';

/**
 * Implement method Sort
 */
const comparesStrings = (a, b) => {
  const srtA = String(a);
  const srtB = String(b);

  if (srtA > srtB) {
    return 1;
  } else if (srtA === srtB) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = comparesStrings) {
    let countIteration;

    do {
      countIteration = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const next = this[i];

        if (compareFunction(prev, next) > 0) {
          this[i - 1] = next;
          this[i] = prev;
          countIteration++;
        }
      }
    } while (countIteration > 0);

    return this;
  };
}

module.exports = applyCustomSort;
