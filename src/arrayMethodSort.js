'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        const elementFirst = this[j];
        const elementSecond = this[j + 1];

        if (compareFunction) {
          if (compareFunction(elementFirst, elementSecond) >= 1) {
            this[j] = elementSecond;
            this[j + 1] = elementFirst;
          }
        } else {
          if (`${elementFirst}` < `${elementSecond}`) {
            continue;
          } else {
            this[j] = elementSecond;
            this[j + 1] = elementFirst;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
