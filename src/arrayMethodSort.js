'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (!compareFunction) {
      for (let j = 0; j < this.length; ++j) {
        for (let k = j + 1; k < this.length; ++k) {
          if (String(this[j]) > String(this[k])) {
            [this[j], this[k]] = [this[k], this[j]];
          }
        }
      }
    } else {
      for (let j = 0; j < this.length; ++j) {
        for (let k = j + 1; k < this.length; ++k) {
          if (compareFunction(this[j], this[k]) > 0) {
            [this[j], this[k]] = [this[k], this[j]];
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
