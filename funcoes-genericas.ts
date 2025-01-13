function getArray<T>(...items : T[] ) : T[] {
    return new Array<T>().concat(items);
}

let vetor = getArray<number>(1,2,3,4,5);
