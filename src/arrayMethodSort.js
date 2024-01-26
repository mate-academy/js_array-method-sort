'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction =
  (item1, item2) => String(item1) > String(item2)
  ) {
    let ch = false;

    do {
      ch = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const tmp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = tmp;
          ch = true;
        }
      }
    }
    while (ch !== false);

    return this;
  };
}

module.exports = applyCustomSort;
