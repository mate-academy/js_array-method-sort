'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareAsString(a, b) {
    if (a == null || b == null) {
      return -1;
    }

    let x = a;
    let y = b;

    x = String(x);
    y = String(y);

    if (x > y) {
      return 1;
    }

    if (x < y) {
      return -1;
    }

    return 0;
  }

  [].__proto__.sort2 = function (compareFunction = compareAsString) {
    if (typeof compareFunction === 'function') {
      let count = 0;

      for (let j = 0; j < this.length - 1; j++) {
        count = 0;

        for (let i = 0; i < this.length - 1 - j; i++) {
          const a = this[i];
          const b = this[i + 1];

          if (compareFunction(a, b) > 0) {
            count++;
            this[i] = b;
            this[i + 1] = a;
          }
        }

        if (count === 0) {
          break;
        }
      }

      return this;
    }
  };
}

module.exports = applyCustomSort;
