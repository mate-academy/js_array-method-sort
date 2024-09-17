'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const isHole = (index, array) => {
      const values = Object.values(array.slice(index, index + 1));

      return values.length === 0;
    };
    let iterationIsNeeded = true;

    while (iterationIsNeeded) {
      iterationIsNeeded = false;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const previousIndex = i - 1;
        const current = this[i];
        let switchElements = false;

        if (typeof compareFunction === 'function') {
          switchElements = compareFunction(previous, current) > 0;
        } else {
          if (
            isHole(previousIndex, this)
            || (!previous && current)
            || `${previous}` > `${current}`
          ) {
            switchElements = true;
          }
        }

        if (switchElements) {
          const tempContainer = previous;

          this[i - 1] = current;
          this[i] = tempContainer;
          iterationIsNeeded = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
