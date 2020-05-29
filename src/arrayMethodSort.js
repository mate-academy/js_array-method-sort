'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let isSorted = false;

    const sort = (a, b) => {
      if (a > b) {
        return 0;
      }

      return -1;
    };

    do {
      for (let i = 0; i < this.length - 1; i++) {
        const a = this[i];
        const b = this[i + 1];

        isSorted = true;

        if (arguments.length === 0) {
          if (sort(a + '', b + '') >= 0) {
            this[i] = b;
            this[i + 1] = a;
            isSorted = false;
            i = -1;
          }
        } else {
          if (compareFunction(a + '', b + '') >= 0) {
            this[i] = b;
            this[i + 1] = a;
            isSorted = false;
            i = -1;
          }
        }
      }
    } while (!isSorted);

    return this;
  };
}

module.exports = applyCustomSort;
