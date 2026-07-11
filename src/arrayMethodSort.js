'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (this.length < 2) {
      return this;
    }

    for (let idxOuter = 0; idxOuter < this.length; idxOuter++) {
      for (let idxInner = 1; idxInner < this.length; idxInner++) {
        const previousEl = this[idxInner - 1];
        const currentEl = this[idxInner];
        let resCompareFunction = 1;

        if (compareFunction) {
          resCompareFunction = compareFunction(previousEl, currentEl);
        }

        if (resCompareFunction <= 0) {
          continue;
        }

        if (
          compareFunction === undefined &&
          previousEl.toString() <= currentEl.toString()
        ) {
          continue;
        }

        this[idxInner - 1] = currentEl;
        this[idxInner] = previousEl;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
