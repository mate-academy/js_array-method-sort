'use strict';

/**
 * Implement method Sort
 */

const compareString = (a, b) => {
  const aString = String(a);
  const bString = String(b);

  if (aString > bString) {
    return 1;
  } else if (aString < bString) {
    return -1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = compareString) {
    let changes;

    do {
      changes = false;

      for (let i = 0; i < this.length - 1; i++) {
        const current = this[i];
        const next = this[i + 1];

        if (callback(current, next) > 0) {
          this[i] = next;
          this[i + 1] = current;
          changes = true;
        }
      }
    } while (changes === true);

    return this;
  };
}

module.exports = applyCustomSort;
