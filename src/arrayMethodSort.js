'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = asStrings) {
    let loop;

    do {
      loop = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          this[i - 1] = curr;
          this[i] = prev;
          loop++;
        }
      }
    } while (loop > 0);

    return this;
  };
}

const asStrings = (a, b) => {
  const A = String(a);
  const B = String(b);

  if (A > B) {
    return 1;
  } else if (A === B) {
    return 0;
  } else {
    return -1;
  }
};

module.exports = applyCustomSort;
