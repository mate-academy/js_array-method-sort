'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const stringCompare = (a, b) => {
    const one = String(a);
    const two = String(b);

    if (one > two) {
      return 1;
    } else if (one === two) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = stringCompare) {
    let counter;

    do {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const first = this[i];
        const second = this[i + 1];

        if (compareFunction(this[i], this[i + 1]) > 0) {
          counter++;
          this[i] = second;
          this[i + 1] = first;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
