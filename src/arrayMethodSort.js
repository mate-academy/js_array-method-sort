'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const callback = compareFunction || ((a, b) => a.toString() > b.toString());

    for (let i = 0; i < this.length; i++) {
      let alreadySorted = true;

      for (let j = 0; j < this.length - i - 1; j++) {
        if (callback(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
          alreadySorted = false;
        }
      }

      if (alreadySorted) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
