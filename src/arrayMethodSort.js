'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (elem1, elem2) => {
      if (String(elem1) < String(elem2)) {
        return -1;
      }

      if (String(elem1) === String(elem2)) {
        return 0;
      }

      if (String(elem1) > String(elem2)) {
        return 1;
      }
    },
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
