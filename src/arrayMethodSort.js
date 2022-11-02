'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const myCompareFunction = (a, b) => {
    const aString = String(a);
    const bString = String(b);

    if (aString > bString) {
      return 1;
    } else if (aString === bString) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = myCompareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let y = 1; y < this.length; y++) {
        if (compareFunction(this[y - 1], this[y]) > 0) {
          const temp = this[y];

          this[y] = this[y - 1];
          this[y - 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
