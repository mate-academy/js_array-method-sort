'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => (`${a}` > `${b}` ? 1 : -1),
  ) {
    let change = false;

    do {
      change = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const sortElement = this[i];

          this[i] = this[i + 1];
          this[i + 1] = sortElement;
          change = true;
        }
      }
    } while (change);

    return this;
  };
}

module.exports = applyCustomSort;
