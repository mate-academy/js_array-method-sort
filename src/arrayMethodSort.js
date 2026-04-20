'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (this.length < 2) {
      return this;
    }

    const pivot = this[this.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < this.length - 1; i++) {
      if (
        typeof compareFunction === 'function'
          ? compareFunction(this[i], pivot) > 0
          : String(this[i]) > String(pivot)
      ) {
        right.push(this[i]);
      } else {
        left.push(this[i]);
      }
    }

    const sorted = [
      ...left.sort2(compareFunction),
      pivot,
      ...right.sort2(compareFunction),
    ];

    this.length = 0;

    for (let i = 0; i < sorted.length; i++) {
      this.push(sorted[i]);
    }

    return this;
  };
}

module.exports = applyCustomSort;
