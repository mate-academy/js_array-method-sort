'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      let wasSwapped = false;

      for (let j = 0; j < this.length - (i + 1); j++) {
        const defaultMatch = !compareFunction
          && String(this[j]) > String(this[j + 1]);

        const customMatch = compareFunction
        && compareFunction(this[j], this[j + 1]) > 0;

        if (defaultMatch || customMatch) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
          wasSwapped = true;
        }
      }

      if (!wasSwapped) {
        break;
      }
    }

    return this;
  };
};

applyCustomSort();

const sort = [3, 12, 2, 11];

sort.sort2();

module.exports = applyCustomSort;
