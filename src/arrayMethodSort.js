'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareDefault(a, b) {
    if (String(a) > String(b)) {
      return 1;
    }

    if (String(a) < String(b)) {
      return -1;
    }

    return 0;
  }

  [].__proto__.sort2 = function (compareFunction = compareDefault) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
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

module.exports = applyCustomSort;
