'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(callback = sortWithoutParams) {
    for (let i = 1; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        const current = this[i];
        const prev = this[j];

        if (callback(prev, current) > 0) {
          this[i] = prev;
          this[j] = current;
        }
      }
    }

    return this;
  };
}

function sortWithoutParams() {
  const firstString = `${arguments[0]}`;
  const secondString = `${arguments[1]}`;

  return firstString > secondString ? 1 : -1;
}

module.exports = applyCustomSort;
