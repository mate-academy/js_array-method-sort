'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultFunction) {
    let check = 0;

    do {
      check = 0;

      for (let i = 1; i < this.length; i++) {
        const prevEl = this[i - 1];
        const currEl = this[i];
        const comparison = compareFunction(prevEl, currEl);

        if (comparison > 0) {
          this[i - 1] = currEl;
          this[i] = prevEl;
          check++;
        }
      };
    } while (check > 0);

    return this;
  };
}

function defaultFunction(prevEl, currEl) {
  const prevStr = prevEl.toString();
  const currStr = currEl.toString();

  if (prevStr > currStr) {
    return 1;
  }

  if (prevStr === currStr) {
    return 0;
  }

  return -1;
}

module.exports = applyCustomSort;
