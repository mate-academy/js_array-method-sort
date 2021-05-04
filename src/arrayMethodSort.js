'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    if (String(a) > String(b)) {
      return 1;
    } else if (String(a) < String(b)) {
      return -1;
    } else {
      return 0;
    }
  }) {
    let changes = 0;

    for (let i = 0; i < this.length; i++) {
      if (compareFunction(this[i], this[i + 1]) > 0 && this[i + 1]) {
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
