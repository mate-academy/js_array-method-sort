'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const standartCompare = function(a, b) {
      return (String(a) < String(b)) ? -1 : 1;
    };

    const method = compareFunction || standartCompare;

    for (let i = 0; i < this.length - 1;) {
      const result = method(this[i], this[i + 1]);

      if (result > 0) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];

        i = 0;
      }

      if (result < 0) {
        i++;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
