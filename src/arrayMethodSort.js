'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(passedFunction) {
    let compareFunction = passedFunction;

    function defaultCompare(prevelEment, currentElement) {
      const prevelEmentStr = '' + prevelEment;
      const currentElementStr = '' + currentElement;

      if (prevelEmentStr > currentElementStr) {
        return 1;
      } else if ((prevelEmentStr < currentElementStr)) {
        return -1;
      }

      return 0;
    }

    if (passedFunction === undefined) {
      compareFunction = defaultCompare;
    }

    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prevelEment = this[i - 1];
        const currentElement = this[i];

        if (compareFunction(prevelEment, currentElement) > 0) {
          this[i] = prevelEment;
          this[i - 1] = currentElement;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
