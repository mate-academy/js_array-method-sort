'use strict';

// Função que adiciona um método de ordenação customizado ao Array
function applyCustomSort() {
  // Função de comparação padrão
  const defaultCompare = (a, b) => {
    const stringA = a !== undefined ? String(a) : undefined;
    const stringB = b !== undefined ? String(b) : undefined;

    // Regras de comparação para valores undefined e strings
    return stringA === undefined && stringB === undefined
      ? 0
      : stringA === undefined
        ? 1
        : stringB === undefined
          ? -1
          : stringA > stringB
            ? 1
            : stringA < stringB
              ? -1
              : 0;
  };

  // Adiciona o método sort2 ao protótipo de Array
  [].__proto__.sort2 = function (compareFunction = defaultCompare) {
    const arr = this;
    let item = arr[0];

    // Valida se compareFunction é uma função ou undefined
    if (
      compareFunction !== undefined &&
      typeof compareFunction !== 'function'
    ) {
      throw new TypeError(
        'A função de comparação deve ser uma função ou undefined',
      );
    }

    // Algoritmo de ordenação simples (bubble sort adaptado)
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (compareFunction(arr[i], arr[j]) > 0) {
          item = arr[i];
          arr[i] = arr[j];
          arr[j] = item;
        }
      }
    }

    // Retorna o array ordenado
    return arr;
  };
}

// Exporta a função para uso em outros arquivos
module.exports = applyCustomSort;
