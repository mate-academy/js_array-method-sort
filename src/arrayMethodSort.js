'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compare = (a, b) =>
    String(a) > String(b)
      ? 1
      : -1;

  [].__proto__.sort2 = function(compareFunction = compare) {
    for (let index = 1; index < this.length; index++) {
      for (let i = 0; i < this.length - index; i++) {
        const prev = this[i];
        const next = this[i + 1];

        if (compareFunction(prev, next) > 0) {
          [this[i], this[i + 1]] = [next, prev];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
