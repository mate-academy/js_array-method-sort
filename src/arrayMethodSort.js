'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (typeof compareFunction !== 'function') {
      compareFunction = function(a, b) {
        return String(a) < String(b) ? -1 : String(a) > String(b) ? 1 : 0;
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this; 
  };
}

module.exports = applyCustomSort;
