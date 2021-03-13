'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  const compareAsStrings = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else if (stringA < stringB) {
      return -1;
    } else {
      return 0;
    }
  };

  [].__proto__.sort2 = function(callback = compareAsStrings) {
    let prev;
    let current;
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        prev = this[i - 1];
        current = this[i];

        if (callback(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;

// const compareAsStrings = (a, b) => {
//   const stringA = String(a);
//   const stringB = String(b);

//   if(stringA > stringB) {
//     return 1;
//   } else if (stringA < stringB) {
//     return -1;
//   }
//   return 0;
// }

// numbers.sort = function(callback = compareAsStrings) {
//   let prev;
//   let current;
//   let count;

//     do {
//       count = 0;

//       for (let i = 0; i < this.length; i++) {
//         prev = this[i - 1];
//         current = this[i];
//         if (callback(prev, current) > 0) {
//           if (prev > current) {
//             this[i - 1] = current;
//             this[i] = prev;
//             count++;
//           }
//         }
//       }
//     } while (count > 0)
// }

// const result = numbers.sort((a,b) => a - b);

// console.log(sort(result));
