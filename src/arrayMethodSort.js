'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (prev, curr) =>
    (String(prev) > String(curr))) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;

// function applyCustomSort() {
//   [].__proto__.sort2 = function(compareFunction = (a, b) => {
//     a.toString();
//     b.toString();

//     if (a < b) {
//       return -1;
//     } else if (a === b) {
//       return 0;
//     } else if (a > b) {
//       return 1;
//     }
//   }) {
//     let sortedArray = [];

//     for (let i = 0; i < this.length; i++) {
//       if (this[i + 1] !== undefined) {
//         if (compareFunction(this[i], this[i + 1]) === -1) {
//           sortedArray.push(this[i]);
//         } else if (compareFunction(this[i], this[i + 1]) === 0) {
//           sortedArray.push(this[i]);
//         } else if (compareFunction(this[i], this[i + 1]) === 1) {
//           sortedArray.push(this[i]);
//         }
//       } else {
//         sortedArray.push(this[i]);
//       }
//     }

//     return sortedArray;
//   };
// }
