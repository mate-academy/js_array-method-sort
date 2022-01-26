'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sorting) {
    for (let i = 0; i < this.length - 1; i++) {
      let sorted = true;

      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
          sorted = false;
        }
      }

      if (sorted) {
        break;
      }
    }

    return this;
  };
}

function sorting(item1, item2) {
  if ('' + item1 > '' + item2) {
    return 1;
  }

  if ('' + item1 < '' + item2) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
