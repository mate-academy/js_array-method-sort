'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const length = this.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = i + 1; j < length; j++) {
        if (compareFunction && typeof compareFunction === 'function') {
          if (compareFunction(this[j], this[i]) < 0) {
            const temp = this[i];

            this[i] = this[j];
            this[j] = temp;
          }
        } else {
          if (`${this[j]}` < `${this[i]}`) {
            const temp = this[i];

            this[i] = this[j];
            this[j] = temp;
          }
        }
      }
    }

    return this;
  };
};

module.exports = applyCustomSort;
