'use strict';

/**
 * Implement method Sort
 */
'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (this.length <= 1) {
      return this;
    }

    const compareFun =
      compareFunction || ((a, b) => (String(a) > String(b) ? 1 : -1));

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFun(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
