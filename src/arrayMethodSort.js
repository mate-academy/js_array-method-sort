'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let callback = compareFunction;

    if (callback === undefined) {
      callback = (a, b) => a.toString() > b.toString();
    }

    let changes = true;

    while (changes) {
      changes = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (callback(this[i], this[i + 1]) > 0) {
          const prev = this[i];
          const next = this[i + 1];

          this[i] = next;
          this[i + 1] = prev;
          changes = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
