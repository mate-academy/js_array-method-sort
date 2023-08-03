/* eslint-disable no-unused-expressions */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction !== undefined) {
          compareFunction(this[j], this[i]) < 0
            ? [this[i], this[j]] = [this[j], this[i]]
            : [this[i], this[j]];
        } else if (compareFunction === undefined
          && typeof this[0] !== 'number') {
          [this[i], this[j]]
            = this[j] < this[i]
              ? [this[i], this[j]] = [this[j], this[i]]
              : [this[i], this[j]];
        } else {
          [this[i], this[j]]
            = this[j].toString().localeCompare(this[i]) === -1
              ? [this[j], this[i]]
              : [this[i], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
