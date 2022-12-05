'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => `${a}` > `${b}`) {
    let end = this.length - 1;
    let index = 0;

    while (end) {
      const current = this[index];
      const next = this[index + 1];
      const needsSorting = compareFunction(current, next) > 0;

      if (needsSorting) {
        this[index] = next;
        this[index + 1] = current;
      }

      index++;

      if (index === end) {
        index = 0;
        end--;
      }
    }

    return this;
  };
};

module.exports = applyCustomSort;
