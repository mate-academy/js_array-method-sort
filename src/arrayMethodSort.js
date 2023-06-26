'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const array = this;
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        const a = array[j];
        const b = array[j + 1];
        const compareValue = compareFunction
          ? compareFunction(a, b)
          : String(a).localeCompare(String(b));

        if (compareValue > 0) {
          [array[j], array[j + 1]] = [b, a];
        }
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;

// function applyCustomSort() {
//   [].__proto__.sort2 = function (compareFunction) {
//     const array = this;
//     const length = array.length;

//     for (let i = 0; i < length - 1; i++) {
//       for (let j = 0; j < length - 1 - i; j++) {
//         const a = array[j];
//         const b = array[j + 1];

//         if (compareFunction
//           ? compareFunction(a, b) > 0
//           : String(a) > String(b)) {
//           array[j] = b;
//           array[j + 1] = a;
//         }
//       }
//     }

//     return array;
//   };
// }
