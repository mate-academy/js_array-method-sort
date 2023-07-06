'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const newFunction = function(elA, elB) {
      if (typeof elA === 'string') {
        if (elA > elB) {
          return 1;
        };
      };

      if (typeof elA === 'number') {
        if (String(elA) > String(elB)) {
          return 1;
        }
      }

      return -1;
    };

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        const a = this[j];
        const b = this[j + 1];
        let comparison;

        if (compareFunction) {
          comparison = compareFunction(a, b);
        } else {
          comparison = newFunction(a, b);
        }

        if (comparison > 0) {
          this[j] = b;
          this[j + 1] = a;
        }
      }
    }

    return this;
  };
};

module.exports = applyCustomSort;
