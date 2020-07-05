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
        const element1 = this[i - 1];
        const element2 = this[i];

        if (arguments.length < 1) {
          if (String(element1) > String(element2)) {
            this[i - 1] = element2;
            this[i] = element1;
            count++;
          }
        } else {
          if (compareFunction(element1, element2) > 0) {
            this[i - 1] = element2;
            this[i] = element1;
            count++;
          }
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
