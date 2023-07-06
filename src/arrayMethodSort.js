'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCallback = (a, b) => String(a) >= String(b);

  [].__proto__.sort2 = function(callback = defaultCallback) {
    const { length } = this;

    for (let i = 0; i < length - 1; i++) {
      for (let j = i + 1; j < length; j++) {
        if (callback(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
