'use strict';

/**
 * Implement method Sort
 */
function defaultFunction(a, b) {
  if (String(a) > String(b)) {
    return 1;
  } else {
    return -1;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultFunction) {
    // write code here
    let isStep;

    do {
      isStep = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const currentEl = this[i];
        const nextEl = this[i + 1];

        if (compareFunction(currentEl, nextEl) > 0) {
          this[i] = nextEl;
          this[i + 1] = currentEl;
          isStep = 1;
        }
      }
    } while (isStep === 1);

    return this;
  };
}

module.exports = applyCustomSort;
