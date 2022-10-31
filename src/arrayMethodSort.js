'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let internalExternalSwitchFunc = compareFunction;

    if (internalExternalSwitchFunc === undefined) {
      internalExternalSwitchFunc = (a, b) => {
        if (`${a}` > `${b}`) {
          return 1;
        } else if (`${a}` === `${b}`) {
          return 0;
        }

        return -1;
      };
    }

    // for (let i = 0; i < this.length; i++) {
    //   for (let j = i + 1; j < this.length; j++) {
    //     if (internalExternalSwitchFunc(this[i], this[j]) > 0) {
    //       const temp = this[i];
    //       this[i] = this[j];
    //       this[j] = temp;
    //     }
    //   }
    // }

    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prevElem = this[i - 1];
        const currentElem = this[i];

        if (internalExternalSwitchFunc(prevElem, currentElem) > 0) {
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
