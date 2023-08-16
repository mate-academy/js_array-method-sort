'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    const newArray = this.slice();

    for (let i = 0; i < newArray.length - 1; i++) {
      for (let j = 0; j < newArray.length - i - 1; j++) {
        if (compareFunction ? compareFunction(newArray[j], newArray[j + 1]) > 0
          : String(newArray[j]) > String(newArray[j + 1])) {
          const temp = newArray[j];

          newArray[j] = newArray[j + 1];
          newArray[j + 1] = temp;
        }
      }
    }

    this.length = 0;
    newArray.forEach(item => this.push(item));

    return this;
  };
};

module.exports = applyCustomSort;
