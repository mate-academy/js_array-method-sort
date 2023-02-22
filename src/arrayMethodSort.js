'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        const current = this[j];
        const next = this[j + 1];

        const isCurrentBigger = compareFunction
          ? compareFunction(current, next) > 0
          : String(current) > String(next);

        if (isCurrentBigger) {
          [this[j], this[j + 1]] = [next, current];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
