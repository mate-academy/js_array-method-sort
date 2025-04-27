function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const a = this[i];
        const b = this[j];

        let result;
        if (compareFunction) {
          result = compareFunction(a, b);
        } else {
          // Спочатку порівнюємо через toLowerCase
          const aLower = String(a).toLowerCase();
          const bLower = String(b).toLowerCase();
          
          if (aLower < bLower) {
            result = -1;
          } else if (aLower > bLower) {
            result = 1;
          } else {
            // Якщо однакові — порівнюємо оригінальні для правильного порядку великої/малої букви
            if (String(a) < String(b)) {
              result = -1;
            } else if (String(a) > String(b)) {
              result = 1;
            } else {
              result = 0;
            }
          }
        }

        if (result > 0) {
          const temp = this[i];
          this[i] = this[j];
          this[j] = temp;
        }
      }
    }
    return this;
  };
}

module.exports = applyCustomSort;




