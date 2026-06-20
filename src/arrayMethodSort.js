'use strict';

function applyCustomSort() {
  // Dodanie domyślnego parametru, gdy użytkownik nie poda swojego.
  // Imitujemy domyślne zachowanie metody .sort
  // sortowanie stringów z tablocy UTF - 16
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      const stringA = String(a);
      const stringB = String(b);

      return stringA < stringB ? -1 : stringA > stringB ? 1 : 0;
    },
  ) {
    for (let i = 0; i < this.length; i++) {
      let lead = i;

      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[j], this[lead]) < 0) {
          lead = j;
        }
      }
      // zamiana miejsc dwóch elementów w tabeli
      [this[i], this[lead]] = [this[lead], this[i]];
    }

    return this;
  };
}

applyCustomSort();

module.exports = applyCustomSort;
