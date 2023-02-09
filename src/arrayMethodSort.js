'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const callbackNull = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else if (stringA === stringB) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(callback = callbackNull) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const next = this[i];

        if (callback(prev, next) > 0) {
          counter++;
          this[i - 1] = next;
          this[i] = prev;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
