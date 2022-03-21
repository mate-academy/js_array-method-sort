'use strict';

function applyCustomSort() {
  function defaultSort(a, b) {
    const stringA = a.toString();
    const stringB = b.toString();

    if (stringA > stringB) {
      return 1;
    } else if (stringA === stringB) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let counter = 0;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const current = this[i];
        const prev = this[i - 1];

        if (compareFunction(prev, current) > 0) {
          counter++;
          this[i] = prev;
          this[i - 1] = current;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
