'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // const newArray = [];
    let compare = compareFunction;
    const result = [];
    const undefinedNumber = [];

    if (typeof compare !== 'function') {
      compare = (a, b) =>
        String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0;
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (this[i] === undefined) {
          continue;
        }

        if (this[j] === undefined) {
          continue;
        }

        if (compare(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined) {
        result[result.length] = this[i];
      } else {
        undefinedNumber[undefinedNumber.length] = this[i];
      }
    }

    const sorted = [...result, ...undefinedNumber];

    for (let i = 0; i < sorted.length; i++) {
      this[i] = sorted[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
