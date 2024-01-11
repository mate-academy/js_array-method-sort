'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sortStringFunction) {
    let step;

    do {
      step = 0;

      for (let i = 1; i < this.length; i++) {
        const first = this[i - 1];
        const second = this[i];

        if (compareFunction(first, second) > 0) {
          this[i - 1] = second;
          this[i] = first;
          step++;
        }
      }
    } while (step > 0);

    return this;
  };

  const sortStringFunction = (a, b) => {
    const strA = `${a}`;
    const strB = `${b}`;

    if (strA > strB) {
      return 1;
    } else if (strA === strB) {
      return 0;
    } else {
      return -1;
    }
  };
}

module.exports = applyCustomSort;
