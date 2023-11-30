'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let o = i + 1; o < this.length; o++) {
        const mainItem = this[i];
        const checkItem = this[o];
        let doChange;

        if (typeof compareFunction === 'function') {
          doChange = compareFunction(mainItem, checkItem);
        } else {
          doChange = `${mainItem}` > `${checkItem}`;
        }

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
