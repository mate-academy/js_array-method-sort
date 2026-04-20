'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultComparator = (a, b) => {
      if (a === undefined && b === undefined) {
        return 0;
      } else if (a === undefined) {
        return 1;
      } else if (b === undefined) {
        return -1;
      } else {
        return String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0;
      }
    };

    const cmp =
      typeof compareFunction === 'function'
        ? compareFunction
        : defaultComparator;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        const hasA = Object.prototype.hasOwnProperty.call(this, j);
        const hasB = Object.prototype.hasOwnProperty.call(this, j + 1);
        const a = hasA ? this[j] : undefined;
        const b = hasB ? this[j + 1] : undefined;

        if (cmp(a, b) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
