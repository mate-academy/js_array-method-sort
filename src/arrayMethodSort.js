'use strict';

/**
 * Implement method Sort
 */
const compareAsStrings = function(a, b) {
  return String(a) > String(b);
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let countObj = 1;

    while (countObj > 0) {
      countObj = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const prevObj = this[i];
        const currentObj = this[i + 1];

        if (compareFunction(prevObj, currentObj) > 0) {
          this[i] = currentObj;
          this[i + 1] = prevObj;
          countObj++;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
