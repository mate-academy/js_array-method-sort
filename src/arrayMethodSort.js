'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = stringSort) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const currentValue = this[i];
        const prevValue = this[i - 1];

        if (callback(prevValue, currentValue) > 0) {
          count++;
          this[i - 1] = currentValue;
          this[i] = prevValue;
        }
      }
    }
    while (count > 0);

    return this;
  };
};

const stringSort = (a, b) => {
  const StringA = String(a);
  const StringB = String(b);

  if (StringA > StringB) {
    return 1;
  } else if (StringA === StringB) {
    return 0;
  } else {
    return -1;
  }
};

module.exports = applyCustomSort;
