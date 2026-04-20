'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let done = false;
    const compare = compareFunction || ((a, b) => (a > b ? 1 : a < b ? -1 : 0));

    while (!done) {
      done = true;

      let order;

      for (let i = 1; i < this.length; i++) {
        if (!compareFunction) {
          order = compare(String(this[i - 1]), String(this[i]));
        } else {
          order = compare(this[i - 1], this[i]);
        }

        if (order > 0) {
          done = false;

          const tmp = this[i - 1];

          this[i - 1] = this[i];
          this[i] = tmp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
