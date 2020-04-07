'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (typeof compareFunction === 'function') {
          const result = compareFunction(this[i], this[j]);

          if (result > 0) {
            [this[i], this[j]] = [this[j], this[i]];
          } else {
            (`${this[i]}` > `${this[j]}`) ? [this[i], this[j]] = [this[j], this[i]] : [this[i], this[j]];
          }
        }
      }

      return this;
    };
  };
}

module.exports = applyCustomSort;
