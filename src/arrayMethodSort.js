'use strict';

const defaultCallback = (a, b) => {
  const firstVariable = String(a);
  const secondVariable = String(b);

  if (firstVariable > secondVariable) {
    return 1;
  }

  if (firstVariable < secondVariable) {
    return -1;
  }

  return 0;
};

function applyCustomSort(callback = defaultCallback) {
  [].__proto__.sort2 = function (cusmotomCallback = callback) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        const result = cusmotomCallback(this[j], this[j + 1]);

        if (result > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
