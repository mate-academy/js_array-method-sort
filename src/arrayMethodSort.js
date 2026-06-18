'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let controller = 1;

    while (controller !== 0) {
      let counter = 0;

      for (let i = 1; i < this.length; i++) {
        const temp = this[i];

        if (!compareFunction) {
          const defaultResult = String(this[i - 1]) <= String(temp);

          if (defaultResult) {
            continue;
          } else {
            this[i] = this[i - 1];
            this[i - 1] = temp;
            counter++;
          }
        } else {
          const result = compareFunction(this[i - 1], temp);

          if (result <= 0) {
            continue;
          } else {
            this[i] = this[i - 1];
            this[i - 1] = temp;
            counter++;
          }
        }
      }
      controller = counter;
    }

    return this;
  };
}

module.exports = applyCustomSort;
