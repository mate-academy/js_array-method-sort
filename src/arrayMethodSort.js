'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = defaultCallback) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

function defaultCallback(a, b) {
  return String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0;
}

module.exports = applyCustomSort;
