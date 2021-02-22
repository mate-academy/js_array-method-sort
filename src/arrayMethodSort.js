'use strict';

const compareAsStrings = (previous, next) => {
  const stringPrevious = String(previous);
  const stringNext = String(next);

  if (stringPrevious > stringNext) {
    return 1;
  }

  if (stringNext === stringPrevious) {
    return 0;
  } else {
    return -1;
  }
};

module.exports = function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = false;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          count++;
        }
      }
    } while (count !== false);

    return this;
  };
};
