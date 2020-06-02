'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let flag = 1;

    while (flag) {
      flag = 0;

      for (let i = 0; i < (this.length - 1); i++) {
        const current = this[i];

        if ((!compareFunction && compare(this[i + 1], this[i]))
        || (compareFunction && compareFunction(this[i + 1], this[i]) < 0)) {
          this[i] = this[i + 1];
          this[i + 1] = current;
          flag = 1;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;

function compare(a, b) {
  return ('' + a) < ('' + b);
}
