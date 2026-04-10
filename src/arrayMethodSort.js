'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const copy = [...this];
    let defaultFn = compareFunction;

    if (!compareFunction) {
      defaultFn = (a, b) => String(a) > String(b);
    }

    for (let i = 0; i < copy.length; i++) {
      for (let j = 0; j < copy.length; j++) {
        if (defaultFn(copy[j], copy[j + 1]) > 0) {
          [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
        }
      }
    }

    for (let i = 0; i < this.length; i++) {
      this[i] = copy[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
