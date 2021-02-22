'use strict';

const compareAsString = (a, b) => {
  const stringA = a.toString();
  const stringB = b.toString();

  if (stringA > stringB) {
    return 1;
  } else if (stringA < stringB) {
    return -1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const currennt = this[i];

        if (compareFunction(prev, currennt) > 0) {
          count++;

          this[i - 1] = currennt;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
