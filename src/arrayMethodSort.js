'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const callback = compareFunction || compareAsStrings;

    while (true) {
      let wasMoved = false;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (callback(previous, current) > 0) {
          this[i] = previous;
          this[i - 1] = current;

          wasMoved = true;
        }
      }

      if (!wasMoved) {
        return this;
      }
    }
  };
}

/**
 *
 * @param {string|number} a
 * @param {string|number} b
 *
 * @returns {number}
 */
function compareAsStrings(a, b) {
  const element1 = String(a);
  const element2 = String(b);

  if (element1 > element2) {
    return 1;
  }

  if (element1 < element2) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
