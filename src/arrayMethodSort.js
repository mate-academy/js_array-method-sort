'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let len = this.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < len - 1; i++) {
        if (compareFunction) {
          if (compareFunction(this[i], this[i + 1]) > 0) {
            const temp = this[i];

            this[i] = this[i + 1];
            this[i + 1] = temp;

            swapped = true;
          } else if (
            compareFunction(this[i], this[i + 1]) < 0 ||
            compareFunction(this[i], this[i + 1]).isNan()
          ) {
            swapped = true;
          }
        } else {
          if (this[i].toString() > this[i + 1].toString()) {
            const temp = this[i];

            this[i] = this[i + 1];
            this[i + 1] = temp;
            swapped = true;
          }
        }
      }

      len--;
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
