'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let prv = 0;
    let nxt = 0;

    for (let n = 0; n < this.length; n++) {
      for (let i = 0; i < this.length - 1 - n; i++) {
        prv = this[i].toString();
        nxt = this[i + 1].toString();

        if (compareFunction) {
          if (compareFunction(prv, nxt) > 0) {
            const buff = this[i];

            this[i] = this[i + 1];
            this[i + 1] = buff;
          } else {
            continue;
          }
        } else if (this[i].toString() > this[i + 1].toString()) {
          const buff = this[i];

          this[i] = this[i + 1];
          this[i + 1] = buff;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
