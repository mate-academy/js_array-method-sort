'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    let count;

    const compareAsString = (a, b) => {
      if (String(a) > String(b)) {
        return 1;
      } else if (String(a) === String(b)) {
        return 0;
      } else {
        return -1;
      }
    };

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction
          ? compareFunction(prev, current) > 0
          : compareAsString(prev, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
