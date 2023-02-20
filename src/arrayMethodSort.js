'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    if (`${a}` < `${b}`) {
      return -1;
    } else if (`${a}` > `${b}`) {
      return 1;
    } else {
      return 0;
    }
  }) {
    const length = this.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = i + 1; j < length; j++) {
        if (compareFunction(this[j], this[i]) < 0) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
};

module.exports = applyCustomSort;
