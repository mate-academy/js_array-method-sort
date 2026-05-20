'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const undefinedArr = [];

    for (let i = 0; i < this.length; ) {
      if (this[i] === null) {
        undefinedArr.unshift(...this.splice(i, 1));
      }

      if (typeof this[i] === 'undefined') {
        undefinedArr.push(...this.splice(i, 1));
      } else {
        this[i] = this[i].toString();
        i++;
      }
    }

    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i < this.length; i++) {
        let result;

        if (i + 1 < this.length) {
          if (compareFunction) {
            result = compareFunction(this[i], this[i + 1]);
          }

          if (!compareFunction) {
            if (this[i] > this[i + 1]) {
              result = 1;
            }
          }
        }

        if (result > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
        }
      }
    }

    for (let i = 0; i < undefinedArr.length; i++) {
      if (undefinedArr[i] === null || typeof undefinedArr[i] === 'undefined') {
        this.push(undefinedArr[i]);
      }
    }

    for (let i = 0; i < this.length; i++) {
      if (!isNaN(Number(this[i]))) {
        this[i] = Number(this[i]);
      }
    }

    return this;
  };
}

const awesomeArr = [
  'a',
  'b',
  undefined,
  'c',
  'a',
  1,
  null,
  undefined,
  's',
  2,
  11,
];

applyCustomSort(awesomeArr);

awesomeArr.sort2();
// console.log([3, 12, 2, 11].sort2());
// console.log([3, 12, 2, 11].sort());
// console.log(awesomeArr.sort2());
// console.log(awesomeArr.sort2((a, b) => a < b));

module.exports = applyCustomSort;
