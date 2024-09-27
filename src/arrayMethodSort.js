'use strict';

function compareAsStrings(a, b) {
  const stringA = a.toString();
  const stringB = b.toString();

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return 0;
  } else {
    return -1;
  };
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    for (let i = 1; i < this.length; i++) {
      const current = this[i];
      let previous = i - 1;

      while (previous >= 0 && compareFunction(current, this[previous]) < 0) {
        this[previous + 1] = this[previous];
        previous--;
      };

      this[previous + 1] = current;
    };

    return this;
  };
};

module.exports = applyCustomSort;
