'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let count = 0;
    let prev = null;
    let now = null;

    if (!compareFunction) {
      do {
        count = 0;

        for (let i = 1; i < this.length; i++) {
          prev = String(this[i - 1]);
          now = String(this[i]);

          if (prev > now) {
            this[i - 1] = now;
            this[i] = prev;
            count++;
          }
        }
      } while (count > 0);

      for (let i = 0; i < this.length; i++) {
        if (!isNaN(this[i])) {
          this[i] = +this[i];
        }
      }
    } else {
      do {
        count = 0;

        for (let i = 1; i < this.length; i++) {
          prev = this[i - 1];
          now = this[i];

          if (compareFunction(prev, now) > 0) {
            this[i - 1] = now;
            this[i] = prev;
            count++;
          }
        }
      } while (count > 0);
    }

    return this;
  };
}

module.exports = applyCustomSort;
