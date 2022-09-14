'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = ((prev, curr) => (
    String(prev) > String(curr)
  ))) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const switcher = this[i];

          this[i] = this[j];
          this[j] = switcher;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;

/**
 * - Interesting fact:
 * |-- tests also will be passed
 * |-- with this block of code bellow
 * |-- with a native JS .sort() method. =)
 * >>>CODE:
function sorting(arr, callback) {
  return arr.sort(callback);
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    return sorting(this, compareFunction);
  };
}
*/
