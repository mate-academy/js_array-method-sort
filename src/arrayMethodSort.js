'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    function compare(a, b) {
      const aIsUndefined = a === undefined;
      const bIsUndefined = b === undefined;

      if (aIsUndefined && !bIsUndefined) {
        return 1;
      }

      if (!aIsUndefined && bIsUndefined) {
        return -1;
      }

      if (aIsUndefined && bIsUndefined) {
        return 0;
      }

      const firstValue = String(a);
      const secondValue = String(b);

      const len = Math.min(firstValue.length, secondValue.length);

      for (let i = 0; i < len; i++) {
        const codeA = firstValue.charCodeAt(i);
        const codeB = secondValue.charCodeAt(i);

        if (codeA < codeB) {
          return -1;
        }

        if (codeA > codeB) {
          return 1;
        }
      }

      if (firstValue.length < secondValue.length) {
        return -1;
      }

      if (firstValue.length > secondValue.length) {
        return 1;
      }

      return 0;
    }

    const usedFunctiom =
      typeof compareFunction === 'function' ? compareFunction : compare;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (usedFunctiom(this[j], this[j + 1]) > 0) {
          const compValue = this[j];

          this[j] = this[j + 1];
          this[j + 1] = compValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
