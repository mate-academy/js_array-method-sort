'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const ARRAY = [...this];
    let cmpFunc = compareFunction;

    if (!compareFunction) {
      cmpFunc = (a, b) => String(a) > String(b);
    }

    for (let i = 0; i < ARRAY.length - 1; i++) {
      for (let j = 0; j < ARRAY.length - 1 - i; j++) {
        if (cmpFunc(ARRAY[j], ARRAY[j + 1]) > 0) {
          [ARRAY[j], ARRAY[j + 1]] = [ARRAY[j + 1], ARRAY[j]];
        }
      }
    }

    for (let i = 0; i < this.length; i++) {
      this[i] = ARRAY[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
