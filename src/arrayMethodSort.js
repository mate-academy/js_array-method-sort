'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = deafult) {
    for (let i = 0; i < this.length - 1; i++) {
      let temp = 0;
      const result = compareFunction(this[i], this[i + 1]);

      if (result >= 1) {
        temp = this[i + 1];
        this[i + 1] = this[i];
        this[i] = temp;
        i = -1;
      }
    }

    return this;
  };
}

const deafult = (a, b) => {
  const firstElem = String(a);
  const secondElem = String(b);

  return firstElem > secondElem;
};

module.exports = applyCustomSort;
