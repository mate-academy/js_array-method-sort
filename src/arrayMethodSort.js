'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compare) {
    if (this.length < 2) {
      return this;
    }

    const isCompare = arguments.length > 0;

    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i < this.length - j - 1; i++) {
        let swap = false;

        if (!isCompare && String(this[i]) > String(this[i + 1])) {
          swap = true;
        }

        if (isCompare && compare(String(this[i]), String(this[i + 1])) > 0) {
          swap = true;
        }

        if (swap) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
