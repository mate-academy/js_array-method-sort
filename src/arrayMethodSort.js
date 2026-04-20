'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let callback = compareFunction;

    callback =
      callback ||
      function (firstElem, secondElem) {
        let a = firstElem;
        let b = secondElem;

        a = String(a);
        b = String(b);

        if (a > b) {
          return 1;
        }

        if (a < b) {
          return -1;
        }

        return 0;
      };

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (callback(this[i], this[j]) > 0) {
          const currentElem = this[i];

          this[i] = this[j];
          this[j] = currentElem;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
