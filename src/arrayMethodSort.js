'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compairingStrings = (a, b) => {
    if (`${a}` > `${b}`) {
      return 1;
    } else if (`${a}` === `${b}`) {
      return 0;
    }

    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = compairingStrings) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prevElem = this[i - 1];
        const currentElem = this[i];

        if (compareFunction(prevElem, currentElem) > 0) {
          this[i] = prevElem;
          this[i - 1] = currentElem;

          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
