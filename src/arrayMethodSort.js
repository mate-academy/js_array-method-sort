'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let callback = compareFunction;

    if (compareFunction === undefined) {
      callback = function(a, b) {
        if (`${a}` < `${b}`) {
          return -1;
        } else if (`${a}` > `${b}`) {
          return 1;
        } else if (`${a}` === `${b}`) {
          return 0;
        }
      };
    };

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (callback(this[i], this[j]) > 0) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };

  return this;
}

module.exports = applyCustomSort;
