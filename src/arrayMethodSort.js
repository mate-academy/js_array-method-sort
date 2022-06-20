'use strict';
/**
 * Implement method Sort
 */

function applyCustomSort() {
  const defaultFunction = (a, b) => {
    if (String(a) < String(b)) {
      return -1;
    };

    if (String(a) > String(b)) {
      return 1;
    };

    if (String(a) === String(b)) {
      return 0;
    }
  };

  [].__proto__.sort2 = function(compareFunction = defaultFunction) {
    // write code here

    let i = 0;

    do {
      for (let j = i; j < this.length; j++) {
        const changeHandler = (a, b) => {
          const temp = this[a];

          this[a] = this[b];
          this[b] = temp;
        };

        if (compareFunction(this[i], this[j]) < 0) {
          changeHandler(i, j);
        }

        if (compareFunction(this[i], this[j]) > 0) {
          changeHandler(j, i);
        }
      }
      i++;
    } while (i <= this.length);

    return this;
  };
}

module.exports = applyCustomSort;
