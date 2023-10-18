'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const callback = compareFunction
      || ((prevElem, elem) => String(elem) < String(prevElem));

    for (let i = 1; i < this.length; i++) {
      for (let j = 0; j < i; j++) {
        const element = this[i];
        const prevElement = this[j];

        if (callback(prevElement, element) > 0) {
          this[j] = element;
          this[i] = prevElement;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
