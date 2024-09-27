'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compare) {
    for (let i = 0; i < this.length; i++) {
      for (let n = i + 1; n < this.length; n++) {
        if (compareFunction(this[i], this[n]) > 0) {
          [this[i], this[n]] = [this[n], this[i]];
        }
      }
    }

    return this;
  };
};

const compare = (x, y) => {
  return String(x) > String(y) ? 1 : 0;
};

module.exports = applyCustomSort;
