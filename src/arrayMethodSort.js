'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let change = true;
    const compare = function(a, b, callback) {
      if (callback === undefined) {
        return a.toString() > b.toString();
      }

      return callback(a, b) > 0;
    };

    while (change) {
      change = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (compare(this[i], this[i + 1], compareFunction)) {
          [this[i + 1], this[i]] = [this[i], this[i + 1]];
          change = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
