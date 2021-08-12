'use strict';

const compareStrings = (a, b) => {
  const firstElement = a.toString();
  const secondElement = b.toString();

  if (firstElement > secondElement) {
    return 1;
  }

  if (secondElement > firstElement) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let loopExit;

    while (!loopExit) {
      const lastIndex = this.length - 1;

      loopExit = true;

      for (let i = 0; i < lastIndex; i++) {
        const currentItem = this[i];
        const nextItem = this[i + 1];

        if (compareFunction(currentItem, nextItem) > 0) {
          this[i] = nextItem;
          this[i + 1] = currentItem;
          loopExit = false;
        }
      }
    };

    return this;
  };
}

module.exports = applyCustomSort;
