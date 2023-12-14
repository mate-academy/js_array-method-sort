'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(cb) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const currElem = this[j];
        const nextElem = this[j + 1];

        if (cb ? cb(currElem, nextElem, i, this) > 0
          : nextElem.toString() < currElem.toString()) {
          this[j] = nextElem;
          this[j + 1] = currElem;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
