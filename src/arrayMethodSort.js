'use strict';

/**
 * Implement method Sort
 */

const stringCase = (first, second) => {
  const stringFirst = String(first);
  const stringSecond = String(second);

  if (stringFirst > stringSecond) {
    return 1;
  } else if (stringFirst === stringSecond) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = stringCase) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const first = this[i - 1];
        const second = this[i];

        if (callback(first, second) > 0) {
          this[i - 1] = second;
          this[i] = first;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
