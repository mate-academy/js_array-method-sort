'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function defaultCompareFunction(a, b) {
    if (String(a) > String(b)) {
      return 1;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = defaultCompareFunction) {
    let isNextStep = true;

    while (isNextStep) {
      isNextStep = false;

      for (let i = 0; i < this.length - 1; i++) {
        const currentEl = this[i];
        const nextEl = this[i + 1];

        if (compareFunction(currentEl, nextEl) > 0) {
          this[i] = nextEl;
          this[i + 1] = currentEl;
          isNextStep = true;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
