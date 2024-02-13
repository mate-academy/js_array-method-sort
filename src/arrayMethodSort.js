'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(cb = ((item1, item2) => {
    return item1.toString() > item2.toString();
  })) {
    for (let i = 0; i < this.length; i++) {
      for (let k = i + 1; k < this.length; k++) {
        if (cb(this[i], this[k]) > 0) {
          const temper = this[k];

          this[k] = this[i];
          this[i] = temper;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
