'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const DEFAULT_CALLBACK = (a, b) => {
    if (a.toString() > b.toString()) {
      return 1;
    }

    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = DEFAULT_CALLBACK) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i; j < this.length; j++) {
        const res = compareFunction(this[i], this[j]);

        if (res > 0) {
          const value = this[i];

          this[i] = this[j];
          this[j] = value;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
