'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (current, next) => String(current) > String(next)
  ) {
    let helpElementToMove;

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          helpElementToMove = this[i];
          this[i] = this[j];
          this[j] = helpElementToMove;
        }
      }
    }

    return this;
  };
};

module.exports = applyCustomSort;
