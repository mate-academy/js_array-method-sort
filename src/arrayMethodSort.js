'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareByDefault) {
    for (let ii = this.length - 1; ii > 0; ii--) {
      for (let i = 0; i < ii; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const _ = this[i];

          this[i] = this[i + 1];
          this[i + 1] = _;
        }
      }
    }

    return this;
  };
}

function compareByDefault(item1, item2) {
  return `${item1}` > `${item2}` ? 1 : 0;
}

module.exports = applyCustomSort;
