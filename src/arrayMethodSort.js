'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompareFunc = (a, b) => (a + '') > (b + '');

  [].__proto__.sort2 = function(compareFunction = defaultCompareFunc) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.slice(0, i).length; j++) {
        if (compareFunction(this[j], this[i]) === true
        || compareFunction(this[j], this[i]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
