'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compFunc = compareStr) {
    let flag;

    do {
      flag = false;

      for (let i = 1; i < this.length; i++) {
        if (compFunc(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          flag = true;
        }
      }
    } while (flag);

    return this;
  };
}

function compareStr(a, b) {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  } else if (strA < strB) {
    return -1;
  } else {
    return 0;
  }
};

module.exports = applyCustomSort;
