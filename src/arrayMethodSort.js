'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let item;

    for (let i = 0; i < this.length; i++) {
      if (
        compareFunction
          ? compareFunction(this[i], this[i + 1]) > 0
          : `${this[i]}` > `${this[i + 1]}`
      ) {
        item = this[i];
        this[i] = this[i + 1];
        this[i + 1] = item;
        i = -1;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
