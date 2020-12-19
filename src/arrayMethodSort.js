'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compare(a, b) {
    const aStr = a.toString();
    const bStr = b.toString();

    return (aStr > bStr) ? 1 : -1;
  }

  [].__proto__.sort2 = function(callback = compare) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (callback(this[j], this[j + 1]) > 0) {
          const tmp = this[j + 1];

          this[j + 1] = this[j];
          this[j] = tmp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
