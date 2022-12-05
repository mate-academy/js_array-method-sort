'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultFunction = (a, b) => {
    if (String(a) > String(b)) {
      return 1;
    }

    return String(a) < String(b)
      ? -1
      : 0;
  };

  [].__proto__.sort2 = function(compareFunction = defaultFunction) {
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
