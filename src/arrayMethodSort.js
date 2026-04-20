'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 1; i < this.length; i++) {
      for (let k = 0; k < this.length; k++) {
        if (compareFunction === undefined) {
          if (String(this[k]) > String(this[i])) {
            [this[k], this[i]] = [this[i], this[k]];
          }

          continue;
        }

        if (compareFunction(this[i], this[k]) < 0) {
          [this[k], this[i]] = [this[i], this[k]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
