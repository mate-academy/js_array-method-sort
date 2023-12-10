'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(cb) {
    for (let i = 0; i < this.length - 1; i++) {
      const currElem = this[i];
      const nextElem = this[i + 1];

      if (cb ? cb(nextElem, currElem, i, this) < 0
        : nextElem.toString()[0] < currElem.toString()[0]) {
        this.splice(i + 1, 1);
        this.unshift(nextElem);
        i = -1;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
