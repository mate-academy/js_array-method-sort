'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = strCompare) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const reserve = this[i];

          this[i] = this[j];
          this[j] = reserve;
        }
      }
    }

    return this;
  };

  const strCompare = (a, b) => {
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
}

module.exports = applyCustomSort;
