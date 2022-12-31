'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let compareFunc;
    let temp;
    let counter = 0;

    if (!compareFunction) {
      compareFunc = (a, b) => {
        if (String(a) < String(b)) {
          return -1;
        } else if (String(a) > String(b)) {
          return 1;
        }

        return 0;
      };
    } else {
      compareFunc = compareFunction;
    }

    do {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunc(this[i], this[i + 1]) > 0) {
          temp = this[i];
          this[i] = this[i + 1];
          this[i + 1] = temp;
          counter++;
        }
      }
    }
    while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
