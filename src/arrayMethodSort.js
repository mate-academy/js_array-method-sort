'use strict';

/**
 * Implement method Sort
 */

// function applyCustomSort() {
//   [].__proto__.sort2 = function(compareFunction) {
//     for (let i = 0; i < this.length; i++) {
//       for (let j = 0; j < this.length - i - 1; j++) {
//         const mappedValue = compareFunction
//           ? compareFunction(this[j], this[j + 1])
//           : this[j] - this[j + 1];

//         if (mappedValue > 0) {
//           const temp = this[j];

//           this[j] = this[j + 1];
//           this[j + 1] = temp;
//         }
//       }
//     }

//     return this;
//   };
// }

// module.exports = applyCustomSort;
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareDefaultFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        const left = this[j];
        const right = this[j + 1];

        const compareResult = compareFunction(left, right);

        if (compareResult > 0) {
          this[j] = right;
          this[j + 1] = left;
        }
      }
    }

    return this;
  };
}

const compareDefaultFunction = (a, b) => String(a) > String(b);

module.exports = applyCustomSort;
