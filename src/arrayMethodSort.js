'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    function sortLikeString(item1, item2) {
      return String(item1) > String(item2);
    }

    const compare = compareFunction || sortLikeString;

    if (typeof compare !== 'function') {
      throw new TypeError(compareFunction + ' is not a function');
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compare(this[i], this[j]) > 0 || this[i] === undefined) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
