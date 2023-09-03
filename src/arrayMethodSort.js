'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (!compareFunction) {
      // eslint-disable-next-line no-param-reassign
      compareFunction = (a, b) => {
        if (a.toString() > b.toString()) {
          return 1;
        }

        if (a.toString() < b.toString()) {
          return -1;
        }

        if (a.toString() === b.toString()) {
          return 0;
        }
      };
    }

    for (let i = 0; i < this.length; i++) {
      let currentItem = this[i];
      let index = i;
      let callbackResult;

      for (let j = i; j < this.length; j++) {
        callbackResult = compareFunction(currentItem, this[j]);

        if (callbackResult > 0) {
          currentItem = this[j];
          index = j;
        }
      }

      this[index] = this[i];
      this[i] = currentItem;
    }

    return this;
  };
}

module.exports = applyCustomSort;
