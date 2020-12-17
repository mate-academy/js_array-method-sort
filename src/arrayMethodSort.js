'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compareAsStrings = (a, b) => {
      if (a.toString() > b.toString()) {
        return 1;
      } else if (a.toString() < b.toString()) {
        return -1;
      } else {
        return 0;
      }
    };

    let callback = compareFunction;

    if (callback === undefined) {
      callback = compareAsStrings;
    }

    let min;

    for (let i = 0; i < this.length; i++) {
      min = i;

      for (let j = i + 1; j < this.length; j++) {
        if (callback(this[min], this[j]) > 0) {
          min = j;
        }
      }

      if (min !== i) {
        [this[i], this[min]] = [this[min], this[i]];
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
