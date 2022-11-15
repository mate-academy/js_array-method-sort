'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(callback = compareFunction) {
    let continueProcess;

    do {
      continueProcess = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (callback(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          continueProcess = true;
        }
      }
    } while (continueProcess);

    return this;
  };
}

function compareFunction(a, b) {
  const stringA = a.toString();
  const stringB = b.toString();

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return 0;
  } else {
    return -1;
  }
}

module.exports = applyCustomSort;
