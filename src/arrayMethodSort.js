'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const asciiArray = [];

    for (const item of this) {
      asciiArray.push(item.toString().charCodeAt());
    }

    if (arguments.length < 1) {
      let swapCount = 0;

      while (true) {
        for (let i = 1; i < this.length; i++) {
          if (asciiArray[i - 1] > asciiArray[i]
            || (asciiArray[i - 1] === asciiArray[i] && this[i - 1] > this[i])) {
            const tmp = this[i];

            this[i] = this[i - 1];

            this[i - 1] = tmp;

            const tmp2 = asciiArray[i];

            asciiArray[i] = asciiArray[i - 1];

            asciiArray[i - 1] = tmp2;

            swapCount++;
          }
        }

        if (!swapCount) {
          break;
        }
        swapCount = 0;
      }
    } else {
      let swapCount = 0;

      while (true) {
        for (let i = 1; i < this.length; i++) {
          if (compareFunction(this[i], this[i - 1]) < 0) {
            const tmp = this[i];

            this[i] = this[i - 1];

            this[i - 1] = tmp;

            swapCount++;
          }
        }

        if (!swapCount) {
          break;
        }
        swapCount = 0;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
