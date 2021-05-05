'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    return a.toString() > b.toString();
  }) {
    let changes = 0;

    for (let i = 0; i < this.length - 1; i++) {
      if (compareFunction(this[i], this[i + 1]) > 0) {
        const prevValue = this[i];

        this[i] = this[i + 1];
        this[i + 1] = prevValue;
        changes++;
      }
    }

    if (changes !== 0) {
      this.sort2(compareFunction);
    };

    changes = 0;

    return this;
  };
}

module.exports = applyCustomSort;
