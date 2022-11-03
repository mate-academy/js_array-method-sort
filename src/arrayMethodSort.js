'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let x = 0; x < this.length; x++) {
      for (let y = 0; y < (this.length - x - 1); y++) {
        const currentIndex = String(this[y]);
        const nextIndex = String(this[y + 1]);

        let compareResult = false;

        if (typeof (compareFunction) === 'function') {
          compareResult = compareFunction(this[y], this[y + 1]) > 0;
        } else {
          compareResult = (currentIndex > nextIndex);
        };

        if (compareResult) {
          const temp = this[y];

          this[y] = this[y + 1];
          this[y + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
