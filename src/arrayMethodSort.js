'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let temp;

    for (let i = 1; i < this.length; i++) {
      let j = i;

      do {
        if (compareFunction(this[j - 1], this[j]) > 0) {
          temp = this[j - 1];
          this[j - 1] = this[j];
          this[j] = temp;
        }
        j--;
      }
      while (j > 0);
    }

    return this;
  };
}

function compareAsString(prev, current) {
  const prevString = String(prev);
  const currentString = String(current);

  if (prevString > currentString) {
    return 1;
  } else if (prevString === currentString) {
    return 0;
  } else {
    return -1;
  }
}

module.exports = applyCustomSort;

/* To receive right results of sorting special sympols such as "ї", "ё" etc.
we should use the code written below (there are two options):

1)
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let temp;

    for (let i = 1; i < this.length; i++) {
      let j = i;

      do {
        if (compareFunction(this[j - 1], this[j]) > 0) {
          temp = this[j - 1];
          this[j - 1] = this[j];
          this[j] = temp;
        }
        j--;
      }
      while (j > 0);
    }

    return this;
  };
}

function compareAsString(prev, current) {
  const prevString = String(prev);
  const currentString = String(current);

  return prevString.localeCompare(currentString);
}

2)
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let temp;

    if (arguments.length < 1) {
      for (let i = 1; i < this.length; i++) {
        let j = i;

        do {
          if (this[j - 1].toString().localeCompare(this[j].toString()) > 0) {
            temp = this[j - 1];
            this[j - 1] = this[j];
            this[j] = temp;
          }
          j--;
        }
        while (j > 0);
      }
    } else {
      for (let i = 1; i < this.length; i++) {
        let j = i;

        do {
          if (compareFunction(this[j - 1], this[j]) > 0) {
            temp = this[j - 1];
            this[j - 1] = this[j];
            this[j] = temp;
          }
          j--;
        }
        while (j > 0);
      }
    }

    return this;
  };
} */
