'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let stepsCount = this.length - 1;
    let swapped;

    function compareElements(a, b, compareFunc) {
      return compareFunc
        ? compareFunc(a, b) > 0
        : a.toString() > b.toString();
    }

    do {
      swapped = false;

      for (let i = 0; i < stepsCount; i++) {
        if (compareElements(this[i], this[i + 1], compareFunction)) {
          [this[i + 1], this[i]] = [this[i], this[i + 1]];
          swapped = true;
        }
      }
      stepsCount--;
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
