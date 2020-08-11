'use strict';

// const compar = (a, b) => {
//   const first = (a).toString();
//   const second = (b).toString();

//   if (first > second) {
//     return 1;
//   } else if (first === second) {
//     return 0;
//   } else {
//     return -1;
//   }
// };
const compar = (a, b) => {
  const first = String(a);
  const second = String(b);

  if (first > second) {
    return 1;
  } else if (first === second) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compar) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prevElem = this[i - 1];
        const nextElem = this[i];

        if (compareFunction(prevElem, nextElem) > 0) {
          this[i - 1] = nextElem;
          this[i] = prevElem;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
