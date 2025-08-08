'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compare;

    if (compareFunction === undefined) {
      compare = (a, b) => {
        if (a + '' > b + '') {
          return 1;
        } else if (a + '' < b + '') {
          return -1;
        }

        return 0;
      };
    } else {
      compare = compareFunction;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compare(this[i], this[j]) > 0) {
          const comparedValue = this[i];

          this[i] = this[j];
          this[j] = comparedValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
