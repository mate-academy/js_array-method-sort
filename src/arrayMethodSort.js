'use strict';

/**
 * Implement method Sort
 */

const compareStrings = (a, b) => {
  const stringFirst = String(b);
  const stringSecond = String(a);
  let res = 0;

  if (stringFirst < stringSecond) {
    res = 1;
  } else if (stringFirst > stringSecond) {
    res = -1;
  }

  return res;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(callback) {
    let myCallback;

    if (callback === undefined) {
      myCallback = compareStrings;
    } else {
      myCallback = callback;
    }

    let flag = false;

    do {
      flag = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (myCallback(this[i + 1], this[i]) < 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
          flag = true;
        }
      }
    } while (flag !== false);

    return this;
  };
}
module.exports = applyCustomSort;
