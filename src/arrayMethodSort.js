'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const collate = compareFunction || (
      (previous, next) => `${previous}` > `${next}`
    );
    const collateDistance = this.length;

    for (let indexPrimary = 0; indexPrimary < collateDistance; indexPrimary++) {
      let done = true;

      for (let indexSecondary = 0;
        indexSecondary < collateDistance - indexPrimary - 1;
        indexSecondary++) {
        if (collate(this[indexSecondary], this[indexSecondary + 1]) > 0) {
          [this[indexSecondary], this[indexSecondary + 1]]
            = [this[indexSecondary + 1], this[indexSecondary]];
          done = false;
        }
      }

      if (done) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;

// applyCustomSort();
// console.log([3,2,1].sort2((a, b) => b - a));
