'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompareFunction = (a, b) => {
    if (String(a) < String(b)) {
      return -1;
    } else if (String(a) > String(b)) {
      return 1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = defaultCompareFunction) {
    let temp;
    let counter = 0;

    do {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          temp = this[i];
          this[i] = this[i + 1];
          this[i + 1] = temp;
          counter++;
        }
      }
    }
    while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
