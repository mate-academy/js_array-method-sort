'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    
    if (compareFunction !== undefined && typeof compareFunction !== 'function') {
      throw new TypeError('The comparison function must be either a function or undefined');
    }

    const compare = compareFunction || function (a, b) {
      const sA = String(a);
      const sB = String(b);
      if (sA < sB) return -1;
      if (sA > sB) return 1;
      return 0;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          const temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }
    return this;
  };

  [].__proto__.sort = function(compareFunction) {
    return this.sort2(compareFunction);
  };
}

module.exports = applyCustomSort;
