'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompare = (a, b) => `${a}` < `${b}` ? -1 : 1;

  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        // eslint-disable-next-line max-len
        const res = compareFunction ? compareFunction(this[i], this[j]) : defaultCompare(this[i], this[j]);

        if (res > 0) {
          const val = this[j];

          this[j] = this[i];
          this[i] = val;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;

// const source = ['їжачок','яблуко','апельсин'];
// const source = [2, 3, 1];

// applyCustomSort();

// const res = source.sort2();

// eslint-disable-next-line no-console
// console.log(res);
