'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCallback = (a, b) => (a.toString() > b.toString() ? 1 : -1);

  [].__proto__.sort2 = function(callback = defaultCallback) {
    let isReplaced = false;

    while (isReplaced !== true) {
      isReplaced = true;

      for (let i = 0; i < this.length - 1; i++) {
        if (callback(this[i], this[i + 1]) > 0) {
          const bufferValue = this[i];

          this[i] = this[i + 1];
          this[i + 1] = bufferValue;
          isReplaced = false;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
