'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let sortFunction = compareFunction;
    const records = this.map((item, i) => {
      return { val: item, key: String(item), ind: i };
    });

    const defaultComparator = (a, b) => {
      if (a > b) {
        return 1;
      }

      if (a < b) {
        return -1;
      }

      return 0;
    };

    if (sortFunction === undefined) {
      sortFunction = defaultComparator;
    }

    for (let i = 0; i < records.length; i++) {
      for (let j = 0; j < records.length - 1 - i; j++) {
        const result = sortFunction(records[j].key, records[j + 1].key);

        if (result > 0) {
          [records[j], records[j + 1]] = [records[j + 1], records[j]];
        }
      }
    }

    for (let i = 0; i < records.length; i++) {
      this[i] = records[i].val;
    }

    return this;
  };
}

module.exports = applyCustomSort;
