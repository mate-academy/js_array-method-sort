'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => `${a}` > `${b}`) {
    let counter = 0;

    for (let i = 1; i < this.length; i++) {
      const comparator = compareFunction(this[i - 1], this[i]);

      if (comparator > 0) {
        const temp = this[i];

        this[i] = this[i - 1];
        this[i - 1] = temp;
        counter++;
      }
    }

    return counter ? this.sort2(compareFunction) : this;
  };
}

module.exports = applyCustomSort;
