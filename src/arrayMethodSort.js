'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => (`${a}` < `${b}`) ? -1 : 1
  ) {
    let forSort = ``;

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          forSort = this[i];
          this[i] = this[j];
          this[j] = forSort;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
