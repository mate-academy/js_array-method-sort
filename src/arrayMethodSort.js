'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let comparison = compareFunction;

    if (!comparison) {
      comparison = function (value1, value2) {
        const string1 = String(value1);
        const string2 = String(value2);

        if (string1 > string2) {
          return 1;
        }

        if (string1 < string2) {
          return -1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let x = 0; x < this.length - i - 1; x++) {
        const result = comparison(this[x], this[x + 1]);

        if (result > 0) {
          [this[x], this[x + 1]] = [this[x + 1], this[x]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
