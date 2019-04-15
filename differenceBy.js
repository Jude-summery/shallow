function differenceBy(array, values, iteratee) {
    let result = []
    let resultIndex = 0
    let arrayLength = array == null ? 0 : array.length >>> 0
    let valuesLength = values == null ? 0 : values.length >>> 0

    if(!iteratee){
        outer: for(let i=0; i<arrayLength; i++){
            for(let j=0; j<valuesLength; j++){
                if(array[i] == values[j]){
                    continue outer
                }
            }
            result[resultIndex++] = array[i]
        }
    }

    if(typeof iteratee == 'function'){
        outer: for(let i=0; i<arrayLength; i++){
            let arrayItemIterated = iteratee(array[i])
            for(let j=0; j<valuesLength; j++){
                let valuesItemIterated = iteratee(values[j])
                if(arrayItemIterated == valuesItemIterated){
                    continue outer
                }
            }
            result[resultIndex++] = array[i]
        }
    }

    if(typeof iteratee == 'string'){
        outer: for(let i=0; i<arrayLength; i++){
            for(let j=0; j<valuesLength; j++){
                if(array[i][iteratee] == values[j][iteratee]){
                    continue outer
                }
            }
            result[resultIndex++] = array[i]
        }
    }

    return result
}