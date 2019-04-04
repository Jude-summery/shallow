function difference(array, values) {
    const result = []
    let resultIndex = 0
    outer:
    for(let i = 0 ; i < array.length; i++){
        for(let j = 0; j < values.length; j++) {
            if(array[i] == values[j]){
                continue outer
            }
        }
        result[resultIndex++] = array[i]
    }
    return result;
}

export default difference
