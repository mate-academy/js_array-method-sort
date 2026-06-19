'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => {
      return `${a}` > `${b}` ? 1 : -1;
    }
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let o = i + 1; o < this.length; o++) {
        const mainItem = this[i];
        const checkItem = this[o];
        const doChange = compareFunction(mainItem, checkItem);

        if (doChange > 0) {
          const temp = mainItem;

          this[i] = checkItem;
          this[o] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
