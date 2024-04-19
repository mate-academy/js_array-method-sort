'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (item1, item2) => {
      if (
        String(item1).length > String(item2).length &&
        String(item1).startsWith(String(item2))
      ) {
        return 1;
      }

      for (let i = 0; i < String(item2).length; i++) {
        if (String(item1).charCodeAt(i) - String(item2).charCodeAt(i)) {
          return String(item1).charCodeAt(i) - String(item2).charCodeAt(i);
        }
      }

      return 0;
    },
  ) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        } else {
          continue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
