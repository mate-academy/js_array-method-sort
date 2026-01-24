'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareByDefault = (a, b) => (String(a) > String(b) ? 1 : -1);

  [].__proto__.sort2 = function (callback = compareByDefault) {
    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i < this.length; i++) {
        if (callback(this[i], this[i + 1]) > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
