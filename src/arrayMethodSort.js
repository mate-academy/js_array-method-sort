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

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const a = this[i];
        const b = this[j];

        let comparison;

        if (a === undefined && b === undefined) {
          comparison = 0;
        } else if (a === undefined) {
          comparison = 1;
        } else if (b === undefined) {
          comparison = -1;
        }

        if (compareFunction) {
          comparison = compareFunction(a, b);
        } else {
          const aStr = String(a);
          const bStr = String(b);

          comparison = aStr > bStr ? 1 : aStr < bStr ? -1 : 0;
        }

        if (comparison > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
