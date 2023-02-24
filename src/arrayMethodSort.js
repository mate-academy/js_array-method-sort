'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareFunction(a, b) {
    if (String(a) > String(b)) {
      return 1;
    }

    if (String(a) === String(b)) {
      return 0;
    }

    return -1;
  };

  [].__proto__.sort2 = function(callback = compareFunction) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstElem = this[i - 1];
        const secondElem = this[i];

        if (callback(firstElem, secondElem) > 0) {
          count++;
          this[i] = firstElem;
          this[i - 1] = secondElem;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
