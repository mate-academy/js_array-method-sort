'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const haveArgs = arguments.length > 0;
    const isCyrillic = (/^[\u0400-\u04FF]+$/).test(this);

    for (let iReverse = this.length - 1; iReverse >= 0; iReverse--) {
      for (let i = 0; i < iReverse; i++) {
        const current = this[i];
        const next = this[i + 1];

        if ((haveArgs && compareFunction(current, next) > 0)
        || (!haveArgs && !isCyrillic && `${current}` > `${next}`)
        || (!haveArgs && isCyrillic && current > next)) {
          this[i] = next;
          this[i + 1] = current;
        }
      }
    }

    return this;
  };
};

module.exports = applyCustomSort;
