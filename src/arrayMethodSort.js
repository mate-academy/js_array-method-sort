'use strict';

/**
 * Implement method Sort
 */
const compare = (a, b) => {
  if (String(a) > String(b)) {
    return 1;
  } else if (String(a) < String(b)) {
    return -1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = compare) {
    let temp;

    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i < this.length; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          temp = this[i];
          this[i] = this[i + 1];
          this[i + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
