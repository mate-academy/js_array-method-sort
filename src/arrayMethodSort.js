'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const callback =
      compareFunction === undefined
        ? (value1, value2) => (`${value1}` > `${value2}` ? 1 : -1)
        : compareFunction;

    for (let j = 0; j < this.length - 1; j++) {
      for (let i = 0; i < this.length - 1; i++) {
        const returnCallback = callback(this[i], this[i + 1]);

        if (returnCallback > 0) {
          const saveValue = this[i + 1];

          this[i + 1] = this[i];
          this[i] = saveValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
