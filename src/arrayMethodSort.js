'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultSort = (a, b) => (a.toString() > b.toString() ? 1 : -1);

  [].__proto__.sort2 = function(callback = defaultSort) {
    let isReplaced = true;

    while (isReplaced !== false) {
      isReplaced = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (callback(this[i], this[i + 1]) > 0) {
          const bufferValue = this[i];

          this[i] = this[i + 1];
          this[i + 1] = bufferValue;
          isReplaced = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
