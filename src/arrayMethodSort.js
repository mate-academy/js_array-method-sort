'use strict';

/**
 * Implement method Sort
 */
const compareFunctionDefault = (item1, item2) => {
  const stringItem1 = `${item1}`;
  const stringItem2 = `${item2}`;

  if (stringItem1 === stringItem2) {
    return 0;
  }

  return stringItem1 < stringItem2 ? -1 : 1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = compareFunctionDefault) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const item = this[i];

          this[i] = this[j];
          this[j] = item;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
