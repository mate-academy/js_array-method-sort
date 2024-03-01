'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => {
      if (String(this[a]) > String(this[b])) {
        return 1;
      }
    }
  ) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let element = 0; element < this.length - i - 1; element++) {
        if (compareFunction(this[element], this[element + 1]) > 0) {
          const temp = this[element];

          this[element] = this[element + 1];
          this[element + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
