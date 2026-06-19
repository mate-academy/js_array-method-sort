'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (this.length < 2) {
      return this;
    }

    if (!compareFunction) {
      compareSymbols(this);

      return this;
    }

    compareCustom(this, compareFunction);

    return this;
  };
}

function compareCustom(items, callback) {
  let swaps = 0;

  for (let i = 1; i < items.length; i++) {
    const compareDiff = callback(items[i - 1], items[i]);

    if (compareDiff > 0) {
      const tempItem = items[i];

      items[i] = items[i - 1];
      items[i - 1] = tempItem;
      swaps++;
    }
  }

  if (swaps) {
    compareCustom(items, callback);
  };
}

function compareSymbols(items) {
  for (let a = 0; a < items.length; a++) {
    for (let b = a + 1; b < items.length; b++) {
      if (`${items[a]}` > `${items[b]}`) {
        const tempString = items[a];

        items[a] = items[b];
        items[b] = tempString;
      }
    }
  }
}

module.exports = applyCustomSort;
