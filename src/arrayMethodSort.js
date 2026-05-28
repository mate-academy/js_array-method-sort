'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    let verify = false;

    if (compareFunction) {
      do {
        verify = false;

        for (let i = 0; i < this.length; i++) {
          const tmp = this[i];

          if (compareFunction(this[i], this[i + 1]) > 0) {
            this[i] = this[i + 1];
            this[i + 1] = tmp;
            verify = true;
          }
        }
      } while (verify === true);
    } else {
      do {
        verify = false;

        for (let i = 0; i < this.length; i++) {
          const tmp = this[i];

          if (String(this[i]) > String(this[i + 1])) {
            this[i] = this[i + 1];
            this[i + 1] = tmp;
            verify = true;
          }
        }
      } while (verify === true);
    }

    return this;
  };
}

module.exports = applyCustomSort;
