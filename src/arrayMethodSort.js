'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultFunction = (a, b) => {
    const prevElement = String(a);
    const currentElement = String(b);

    if (currentElement > prevElement) {
      return -1;
    } else if (currentElement < prevElement) {
      return 1;
    } else {
      return 0;
    }
  };

  [].__proto__.sort2 = function(compareFunction = defaultFunction) {
    let needIteration = true;

    while (needIteration) {
      needIteration = false;

      for (let i = 1; i < this.length; i++) {
        let temp;

        if (compareFunction(this[i - 1], this[i]) > 0) {
          temp = this[i - 1];
          this[i - 1] = this[i];
          this[i] = temp;
          needIteration = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
