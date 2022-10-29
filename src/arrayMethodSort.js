'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = stringComperison) {
    // write code here
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prevElem = this[i - 1];
        const currentElem = this[i];

        if (compareFunction(prevElem, currentElem) > 0) {
          this[i] = prevElem;
          this[i - 1] = currentElem;

          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };

  const stringComperison = (prev, current) => {
    const prevEl = '' + prev;
    const curEl = '' + current;

    if (prevEl > curEl) {
      return 1;
    }

    if (prevEl < curEl) {
      return -1;
    }

    return 0;
  };
}

module.exports = applyCustomSort;
