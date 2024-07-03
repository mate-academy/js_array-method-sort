'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => (a.toString() > b.toString() ? 1 : -1),
  ) {
    const result = [];

    while (this.length > 0) {
      let min = this[0];
      let index = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(min, this[i]) > 0) {
          min = this[i];
          index = i;
        }
      }

      result.push(min);
      this.splice(index, 1);
    }

    for (const char of result) {
      this.push(char);
    }

    return this;
  };
}

module.exports = applyCustomSort;
