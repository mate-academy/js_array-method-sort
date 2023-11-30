'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length; j++) {
        const prev = this[j];

        if ((compareFunction(this[j], this[j + 1])) > 0) {
          this[j] = this[j + 1];
          this[j + 1] = prev;
        }
      }
    }

    return this;
  };
};

function defaultCompareFunction(a, b) {
  if (typeof (a) === 'number') {
    return String(a) > String(b) ? 1 : -1;
  }

  if (typeof (a) === 'string') {
    return a > b ? 1 : -1;
  }
}

module.exports = applyCustomSort;
