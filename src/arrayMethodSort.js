'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let switches = true;

    if (compareFunction !== undefined) {
      while (switches) {
        let count = 0;

        for (let i = 0; i < this.length - 1; i++) {
          if (compareFunction(this[i], this[i + 1]) > 0) {
            const temp = this[i];

            this[i] = this[i + 1];
            this[i + 1] = temp;
            count++;
          }
        }

        if (count === 0) {
          switches = false;
        }
      }
    } else {
      while (switches) {
        let count = 0;

        for (let i = 0; i < this.length - 1; i++) {
          if (String(this[i]) > String(this[i + 1])) {
            const temp = this[i];

            this[i] = this[i + 1];
            this[i + 1] = temp;
            count++;
          }
        }

        if (count === 0) {
          switches = false;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
