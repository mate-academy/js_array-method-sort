'use strict';

/**
 * Implement method Sort
 */
function defaultFunction(curr, prev) {
  if (String(curr) < String(prev)) {
    return -1;
  };

  if (String(curr) > String(prev)) {
    return 1;
  };

  if (String(curr) === String(prev)) {
    return 0;
  };
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultFunction) {
    let step;

    do {
      step = false;

      for (let i = 1; i < this.length; i++) {
        const curr = this[i];
        const prev = this[i - 1];

        if (compareFunction(curr, prev) < 0) {
          this[i - 1] = curr;
          this[i] = prev;
          step = true;
        }
      }
    } while (step);

    return this;
  };
}

module.exports = applyCustomSort;
