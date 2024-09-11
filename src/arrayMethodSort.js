'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      typeof compareFunction === 'function'
        ? compareFunction
        : (a, b) => (`${a}` > `${b}` ? 1 : -1);

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compare(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
