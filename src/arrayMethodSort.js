'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let counter;

    do {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const aString = String(this[i]);
        const bString = String(this[i + 1]);
        const a = this[i];
        const b = this[i + 1];

        if (compareFunction === undefined && aString > bString) {
          counter++;
          this[i] = b;
          this[i + 1] = a;
        } else if (compareFunction !== undefined && compareFunction(a, b) > 0) {
          counter++;
          this[i] = b;
          this[i + 1] = a;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
