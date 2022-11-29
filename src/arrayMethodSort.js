'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let wasReversion;

    do {
      wasReversion = false;

      for (let i = 1; i < this.length; i++) {
        const prevItem = this[i - 1];
        const currentItem = this[i];

        if (compareFunction(prevItem, currentItem) > 0) {
          this[i - 1] = currentItem;
          this[i] = prevItem;

          wasReversion = true;
        }
      }
    } while (wasReversion);

    return this;
  };

  function compareAsStrings(a, b) {
    if (String(a) > String(b)) {
      return 1;
    }

    if (String(a) < String(b)) {
      return -1;
    }

    return 0;
  };
}

module.exports = applyCustomSort;
