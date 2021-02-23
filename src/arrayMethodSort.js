'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsStrings = (a, b) => {
    const previousString = String(a);
    const nextString = String(b);

    if (previousString > nextString) {
      return 1;
    } else if (previousString === nextString) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let hasChanged;

    do {
      hasChanged = false;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          hasChanged = true;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (hasChanged);

    return this;
  };
}

module.exports = applyCustomSort;
