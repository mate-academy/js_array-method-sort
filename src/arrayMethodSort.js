'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (arguments.length !== 0 && typeof compareFunction !== 'function') {
      throw new TypeError(compareFunction + ' is not a function');
    }

    let compare = compareFunction;

    if (arguments.length === 0) {
      compare = sortLikeString;
    }

    function sortLikeString(item1, item2) {
      return String(item1) > String(item2);
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
