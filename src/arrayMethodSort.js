'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultSort = (a, b) => `${a}` > `${b}`;

  [].__proto__.sort2 = function(callback = defaultSort) {
    const typeSort = (index1, index2) => callback(
      this[index1], this[index2]) > 0;

    const changerFunc = (index1, index2) => {
      [this[index1], this[index2]] = [this[index2], this[index1]];
    };

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (typeSort(j, j + 1)) {
          changerFunc(j, j + 1);
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
