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
      throw new TypeError('compareFunction must be a function');
    }

    const len = this.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        const a = this[j];
        const b = this[j + 1];

        const cmpResult = compareFunction
          ? compareFunction(a, b)
          : String(a) > String(b)
            ? 1
            : String(a) < String(b)
              ? -1
              : 0;

        if (cmpResult > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };

  [].__proto__.sort = function (compareFunction) {
    return this.sort2(compareFunction);
  };
}

module.exports = applyCustomSort;
