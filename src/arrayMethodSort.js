'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => (`${a}` < `${b}`) ? -1 : 1
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let z = i + 1; z < this.length; z++) {
        if (compareFunction(this[i], this[z]) > 0) {
          [this[i], this[z]] = [this[z], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
