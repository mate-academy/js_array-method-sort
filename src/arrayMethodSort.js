'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  // eslint-disable-next-line max-len
  [].__proto__.sort2 = function(compareFunction = (a, b) => a.toString() > b.toString()) {
    const sort = compareFunction;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        const cmpResult = sort(this[j], this[j + 1]);

        if (cmpResult > 0) {
          const x = this[j];

          this[j] = this[j + 1];
          this[j + 1] = x;
        };
      };
    };

    return this;
  };
}

module.exports = applyCustomSort;
