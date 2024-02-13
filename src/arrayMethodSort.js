'use strict';

function compare(elementFirst, elementSecond) {
  if (String(elementFirst) < String(elementSecond)) {
    return -1;
  };

  if (String(elementFirst) > String(elementSecond)) {
    return 1;
  };

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compare) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        const elementFirst = this[j];
        const elementSecond = this[j + 1];

        if (compareFunction(elementFirst, elementSecond) > 0) {
          this[j] = elementSecond;
          this[j + 1] = elementFirst;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
