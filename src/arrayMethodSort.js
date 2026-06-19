'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let comparison = (a, b) => a.toString() < b.toString() ? -1 : 1;

    if (typeof compareFunction === 'function') {
      comparison = compareFunction;
    }

    for (let j = 0; j < this.length; j++) {
      let min = j;

      for (let i = j + 1; i < this.length; i++) {
        if (comparison(this[i], this[min]) < 0) {
          min = i;
        }
      }

      const replacement = this[j];

      this[j] = this[min];
      this[min] = replacement;
    }

    return this;
  };
}

module.exports = applyCustomSort;
