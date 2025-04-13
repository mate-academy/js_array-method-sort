'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // Usar uma variável separada para a função de comparação efetiva
    const effectiveCompare = typeof compareFunction === 'function'
      ? compareFunction
      : (a, b) => {
          const aStr = String(a);
          const bStr = String(b);
          if (aStr < bStr) return -1;
          if (aStr > bStr) return 1;
          return 0;
        };

    // Resto da implementação permanece igual
    const elementsInfo = [];
    for (let i = 0; i < this.length; i++) {
      const hasOwn = Object.hasOwn(this, i);
      elementsInfo.push({
        value: hasOwn ? this[i] : undefined,
        isHole: !hasOwn
      });
    }

    // Algoritmo de ordenação
    for (let i = 0; i < elementsInfo.length; i++) {
      for (let j = 0; j < elementsInfo.length - i - 1; j++) {
        const a = elementsInfo[j].value;
        const b = elementsInfo[j + 1].value;
        if (effectiveCompare(a, b) > 0) {
          const temp = elementsInfo[j];
          elementsInfo[j] = elementsInfo[j + 1];
          elementsInfo[j + 1] = temp;
        }
      }
    }

    // Reconstrução do array
    for (let i = 0; i < this.length; i++) {
      delete this[i];
    }

    for (let i = 0; i < elementsInfo.length; i++) {
      const info = elementsInfo[i];
      if (!info.isHole) {
        this[i] = info.value;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
