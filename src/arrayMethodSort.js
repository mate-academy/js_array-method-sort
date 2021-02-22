'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let isChanged;

    do {
      isChanged = false;

      for (let i = 0; i < this.length - 1; i++) {
        const nextValue = this[i + 1];
        const currentValue = this[i];

        if (compareFunction(currentValue, nextValue) > 0) {
          isChanged = true;
          this[i] = nextValue;
          this[i + 1] = currentValue;
        }
      }
    } while (isChanged);

    return this;
  };

  const compareAsStrings = (current, next) => {
    const currentString = String(current);
    const nextString = String(next);

    if (currentString > nextString) {
      return 1;
    } else if (currentString === nextString) {
      return 0;
    } else {
      return -1;
    };
  };
}

module.exports = applyCustomSort;
