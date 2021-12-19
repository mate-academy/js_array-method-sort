'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let worked = 1;

    while (worked === 1) {
      worked = 0;

      for (let i = 0; i < this.length - 1; i++) {
        let result = 0;

        if (compareFunction !== undefined) {
          result = compareFunction(this[i], this[i + 1]);
        } else if (String(this[i]) > String(this[i + 1])) {
          result = 1;
        }

        if (result > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
          worked = 1;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
