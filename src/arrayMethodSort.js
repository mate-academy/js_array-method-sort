'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let compare = compareFunction;

    if (compare === undefined) {
      compare = compareDefault;
    }

    for (let i = 0; i < this.length; i++) {
      for (let k = 0; k < this.length - 1; k++) {
        if (compare(this[k], this[k + 1]) > 0) {
          const moreEl = this[k];

          this[k] = this[k + 1];
          this[k + 1] = moreEl;
        }
      }
    }

    function compareDefault(el1, el2) {
      const value1 = '' + el1;
      const value2 = '' + el2;

      if (value1 > value2) {
        return 1;
      } else if (value1 < value2) {
        return -1;
      } else if (value1 === value2) {
        return 0;
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
