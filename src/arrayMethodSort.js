'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction) {
          if (compareFunction(prev, curr) > 0) {
            this[i - 1] = curr;
            this[i] = prev;
            count++;
          };
        } else {
          if (prev.toString() > curr.toString()) {
            this[i - 1] = curr;
            this[i] = prev;
            count++;
          };
        };
      };
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
