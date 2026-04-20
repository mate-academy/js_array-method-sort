'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let str = '';

    while (str !== this.toString()) {
      str = this.toString();

      for (let i = 0; i < this.length - 1; i += 1) {
        const current = this[i];
        const next = this[i + 1];

        if (compareFunction(current, next) > 0) {
          this[i] = next;
          this[i + 1] = current;
        }
      }
    }

    return this;
  };
}

function defaultCompare(a, b) {
  return String(a) > String(b);
}

module.exports = applyCustomSort;
