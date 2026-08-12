'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compare = compareFunction;

    if (compare === undefined) {
      compare = (a, b) => {
        if (String(a) > String(b)) {
          return 1;
        }

        if (String(a) < String(b)) {
          return -1;
        }

        return 0;
      };
    }

    for (let index = 0; index < this.length - 1; index++) {
      let bar = 0;

      if (compare(this[index], this[index + 1]) > 0) {
        bar = this[index];
        this[index] = this[index + 1];
        this[index + 1] = bar;
        index = -1;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
