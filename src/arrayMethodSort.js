'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (!compareFunction || typeof compareFunction !== 'function') {
      // eslint-disable-next-line no-param-reassign
      compareFunction = (a, b) => {
        if (String(a) < String(b)) {
          return -1;
        }

        if (String(a) > String(b)) {
          return 1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
