'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => (a.toString() > b.toString() ? 1 : -1),
  ) {
    let thisLenght = this.length;

    while (thisLenght > 0) {
      for (let i = 0; i < thisLenght - 1; i++) {
        const current = this[i];
        const next = this[i + 1];

        if (compareFunction(this[i], this[i + 1])) {
          if (compareFunction(this[i], this[i + 1]) > 0) {
            this[i] = next;
            this[i + 1] = current;
          } else {
            continue;
          }
        } else {
          if (this[i] > this[i + 1]) {
            this[i] = next;
            this[i + 1] = current;
          }
        }
      }
      thisLenght--;
    }

    return this;
  };
}

module.exports = applyCustomSort;
