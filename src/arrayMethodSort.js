'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let fn = (a, b) => String(a) > String(b);

    if (arguments.length) {
      fn = compareFunction;
    };

    [...this].forEach((item, index) => {
      for (let i = index + 1; i < this.length; i++) {
        if (fn(this[index], this[i]) > 0) {
          [this[index], this[i]] = [this[i], this[index]];
        }
      };
    });

    return this;
  };
};

module.exports = applyCustomSort;
