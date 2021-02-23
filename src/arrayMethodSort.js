'use strict';

const compareAsString = (a, b) => {
  const stringPervious = a.toString();
  const stringCurrent = b.toString();

  if (stringPervious > stringCurrent) {
    return 1;
  } else if (stringPervious < stringCurrent) {
    return -1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let hasChanged = 0;

    do {
      hasChanged = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const currennt = this[i];

        if (compareFunction(prev, currennt) > 0) {
          hasChanged++;

          this[i - 1] = currennt;
          this[i] = prev;
        }
      }
    } while (hasChanged > 0);

    return this;
  };
}

module.exports = applyCustomSort;
