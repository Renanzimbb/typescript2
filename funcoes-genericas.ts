function getArray<T>(...items : T[] ) : T[] {
    return new Array<T>().concat(items);
}

let vetor = getArray<number>(1,2,3,4,5);


//A função atua como um template, baseado em um tipo T qualquer, recebendo uma lista de valores do tipo determinado e retornando os elementos no formato de um array. 
//Note ainda que o número de parâmetros é variável, devido ao uso de reticências, e que internamente os valores fornecidos são concatenados no array de retorno. 
//    Ao final, temos uma chamada com a passagem de valores numéricos, os quais são transformados em um array de number.
