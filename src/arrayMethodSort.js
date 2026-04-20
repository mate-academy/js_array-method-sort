'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = comparingElements) {
    for (let i = 0; i < this.length; i++) {
      for (let k = i + 1; k < this.length; k++) {
        if (compareFunction(this[i], this[k]) > 0) {
          const tempElem = this[k];

          this[k] = this[i];
          this[i] = tempElem;
        }
      }
    }

    return this;
  };
}

const comparingElements = (a, b) => {
  if (String(a) > String(b)) {
    return 1;
  }

  if (String(a) < String(b)) {
    return -1;
  }

  return 0;
};

module.exports = applyCustomSort;
