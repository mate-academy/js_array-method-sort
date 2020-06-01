'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) =>
    String(a) > String(b)
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(String(this[i]), String(this[j])) > 0) {
          const item = this[i];

          this[i] = this[j];
          this[j] = item;
        };
      };
    };

    return this;
  };
}

module.exports = applyCustomSort;
