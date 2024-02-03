'use strict';

/**
 * Implement method Sort
 */
// function applyCustomSort() {
//   [].__proto__.sort2 = function(compareFunction) {
//     // // write code here
//     for (let i = 0; i < this.length; i++) {
//       const elementFirst = this[i];
//       const elementLast = this[i + 1];
//     }
//   };
// }

function applyCustomSort() {
  function defaultCompare(a, b) {
    return String(a) > String(b);
  }

  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const tem = this[j];

          this[j] = this[i];
          this[i] = tem;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
