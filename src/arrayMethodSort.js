'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const haveArgs = arguments.length > 0;

    for (let iterator = this.length - 1; iterator >= 0; iterator--) {
      for (let i = 0; i < iterator; i++) {
        const current = this[i];
        const next = this[i + 1];

        if ((haveArgs && compareFunction(current, next) > 0)
        || (!haveArgs && `${current}` > `${next}`)) {
          this[i] = next;
          this[i + 1] = current;
        }
      }
    }

    return this;
  };
};

module.exports = applyCustomSort;
