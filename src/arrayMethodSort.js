'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let changes;

    do {
      changes = 0;

      for (let i = 1; i < this.length; i++) {
        const prevCher = this[i - 1];
        const secCher = this[i];

        if (arguments.length < 1) {
          if (String(prevCher) > String(secCher)) {
            this[i - 1] = secCher;
            this[i] = prevCher;
            changes++;
          }
        } else {
          const resultCher = compareFunction(prevCher, secCher);

          if (resultCher > 0) {
            this[i - 1] = secCher;
            this[i] = prevCher;
            changes++;
          }
        }
      }
    } while (changes !== 0);

    return this;
  };
}

module.exports = applyCustomSort;
