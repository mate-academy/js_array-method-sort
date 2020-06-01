'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (typeof compareFunction === 'undefined') {
          if (this[j].toString() > this[j + 1].toString()) {
            replaceItems.call(this, j);
          }
        } else {
          if (compareFunction(this[j], this[j + 1]) > 0) {
            replaceItems.call(this, j);
          }
        }
      }
    }

    function replaceItems(j) {
      const current = this[j];

      this[j] = this[j + 1];
      this[j + 1] = current;
    }

    return this;
  };
}

applyCustomSort();

module.exports = applyCustomSort;
