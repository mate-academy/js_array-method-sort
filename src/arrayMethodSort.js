'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compFunc = arguments.length > 0 ? compareFunction
      : (a, b) => {
        const strA = String(a);
        const strB = String(b);

        return (strA > strB) ? 1 : (strA < strB) ? -1 : 0;
      };
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

module.exports = applyCustomSort;
