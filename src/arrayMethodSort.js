'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (callback) {
    // write code here\\
    const compareFn =
      typeof callback === 'function'
        ? callback
        : (a, b) => {
            const A = String(a);
            const B = String(b);
            const len = Math.min(A.length, B.length);

            for (let i = 0; i < len; i++) {
              const codeA = A.charCodeAt(i);
              const codeB = B.charCodeAt(i);

              if (codeA !== codeB) {
                return codeA - codeB;
              }
            }

            if (A.length === B.length) {
              return 0;
            }

            return A.length - B.length;
          };

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFn(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
