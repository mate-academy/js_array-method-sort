'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = stringFunction) {
    let count = '';

    while (count !== 0) {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const second = this[i];
        const first = this[i - 1];

        if (compareFunction(this[i - 1], this[i]) > 0) {
          this[i - 1] = second;
          this[i] = first;

          count++;
        }
      }
    }

    return this;
  };

  function stringFunction(a, b) {
    const first = String(a);
    const second = String(b);

    if (first > second) {
      return 1;
    } else if (second === first) {
      return 0;
    }

    return -1;
  };
}

module.exports = applyCustomSort;
