/* eslint-disable no-unused-expressions */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2
    = function(compareFunction = sorting) {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {

          if (compareFunction(this[j], this[i]) < 0) {
            [this[i], this[j]] = [this[j], this[i]];
          } else if (compareFunction(this[j], this[i]) === true) {
            [this[i], this[j]] = [this[j], this[i]];
          }
        }
      }

      return this;
    };

  function sorting(a, b) {
    const areCyrillics = /[\u0400-\u04FF]+/;

    if (areCyrillics.test(a) && areCyrillics.test(b)) {
      return a < b;
    }

    return new Intl.Collator().compare(a, b);
  }
}

module.exports = applyCustomSort;
