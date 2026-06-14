'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compareItems = compareFunction
      || ((item1, item2) => String(item1) > String(item2) ? 1 : -1);
    let wasChanged = false;

    do {
      wasChanged = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareItems(this[i], this[i + 1]) > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;

          wasChanged = true;
        }
      }
    } while (wasChanged);

    return this;
  };
}

module.exports = applyCustomSort;
