'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => (a.toString() > b.toString() ? 1 : -1),
  ) {
    let thisLength = this.length;

    while (thisLength > 0) {
      for (let i = 0; i < thisLength - 1; i++) {
        const current = this[i];
        const next = this[i + 1];
        const callback = compareFunction(this[i], this[i + 1]);

        if (callback > 0) {
          this[i] = next;
          this[i + 1] = current;
        } else {
          continue;
        }
      }
      thisLength--;
    }

    return this;
  };
}

module.exports = applyCustomSort;
