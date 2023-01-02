'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultSort = (a, b) => {
    if (a.toString() > b.toString()) {
      return 1;
    } else if (a.toString() < b.toString()) {
      return -1;
    } else {
      return 0;
    }
  };

  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let isChanged = true;

    while (isChanged) {
      isChanged = false;

      for (let i = 1; i < this.length; i++) {
        const prevEl = this[i - 1];
        const currentEl = this[i];

        if (compareFunction(prevEl, currentEl) > 0) {
          this[i - 1] = currentEl;
          this[i] = prevEl;
          isChanged = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
