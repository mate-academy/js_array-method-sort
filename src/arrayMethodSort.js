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
    for (let i = 0; i < this.length; i++) {
      for (let s = i + 1; s < this.length; s++) {
        if (compareFunction(this[i], this[s]) > 0) {
          const current = this[i];
          const next = this[s];

          this[i] = next;
          this[s] = current;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
