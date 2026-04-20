'use strict';

// function applyCustomSort() {
//   [].__proto__.sort2 = function (compareFunction) {
//     let callback = compareFunction;

//     if (callback === undefined) {
//       callback = (elem1, elem2) => (String(elem1) > String(elem2) ? 1 : -1);
//     }

//     for (let i = 0; i < this.length - 1; i++) {
//       for (let e = i + 1; e < this.length; e++) {
//         if (callback(this[i], this[e]) > 0) {
//           [this[i], this[e]] = [this[e], this[i]];
//         }
//       }
//     }

//     return this;
//   };
// }

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let callback = compareFunction;

    if (callback === undefined) {
      callback = (elem1, elem2) => (String(elem1) > String(elem2) ? 1 : -1);
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let e = i + 1; e < this.length; e++) {
        if (callback(this[i], this[e]) > 0) {
          [this[i], this[e]] = [this[e], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
