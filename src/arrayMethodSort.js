'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // Sorts elements according to the compareFunction template
    let stop = false;

    if (compareFunction !== undefined) {
      do {
        stop = false;

        for (let i = 0; i < this.length - 1; i++) {
          if (compareFunction(this[i], this[i + 1]) > 0) {
            stop = true;

            const next = this[i + 1];

            this[i + 1] = this[i];
            this[i] = next;
          }
        }
      } while (stop);
    } else {
      // Sorts elements by Unicode
      do {
        stop = false;

        for (let i = 0; i < this.length - 1; i++) {
          const currentElement = this[i] + '';
          const nextElement = this[i + 1] + '';

          if (currentElement > nextElement) {
            const next = this[i + 1];

            stop = true;
            this[i + 1] = this[i];
            this[i] = next;
          }
        }
      } while (stop);
    }

    return this;
  };
}

module.exports = applyCustomSort;
