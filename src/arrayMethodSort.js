'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let hadToSwitch = false;

    const originalArr = this;

    do {
      hadToSwitch = false;

      for (let i = 0; i < this.length - 1; i++) {
        const compareResult =
          compareFunction === undefined
            ? this[i].toString() > this[i + 1].toString()
            : compareFunction(this[i], this[i + 1]) > 0;

        if (compareResult) {
          const temporaryEl = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temporaryEl;
          hadToSwitch = true;
        }
      }
    } while (hadToSwitch);

    return originalArr;
  };
}

module.exports = applyCustomSort;
