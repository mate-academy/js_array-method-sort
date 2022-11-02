'use strict';

function applyCustomSort() {
  function compareAsStrings(a, b) {
    const prev = a.toString();
    const current = b.toString();

    if (prev > current) {
      return 1;
    }

    if (prev < current) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let changeHappend;

    do {
      changeHappend = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          changeHappend = true;

          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (changeHappend);

    return this;
  };
}

module.exports = applyCustomSort;
