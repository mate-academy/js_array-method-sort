'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (
      compareFunction !== undefined &&
      typeof compareFunction !== 'function'
    ) {
      throw new TypeError(
        'The comparison function must be either a function or undefined',
      );
    }

    const compare =
      compareFunction ||
      ((a, b) => {
        const s1 = String(a);
        const s2 = String(b);

        if (s1 < s2) {
          return -1;
        }

        if (s1 > s2) {
          return 1;
        }

        return 0;
      });

    const length = this.length;

    for (let i = 0; i < length; i++) {
      let swapped = false;

      for (let j = 0; j < length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }
    }

    return this;
  };

  [].__proto__.sort = function (compareFunction) {
    return this.sort2(compareFunction);
  };
}

module.exports = applyCustomSort;
