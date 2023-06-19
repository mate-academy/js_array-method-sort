'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let str = '';

    const compare = compareFunction || defaultCompare;

    while (str !== this.toString()) {
      str = this.toString();

      for (let i = 0; i < this.length - 1; i += 1) {
        const current = this[i];
        const next = this[i + 1];

        if (compare(current, next) > 0) {
          const currentItem = this[i];
          const nextItem = this[i + 1];

          this[i] = nextItem;
          this[i + 1] = currentItem;
        }
      }
    }

    return this;
  };
}

function defaultCompare(a, b) {
  return String(a) > String(b);
}

module.exports = applyCustomSort;
