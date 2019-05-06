function initial(array) {
    let result = []
    let resultIndex = -1
    let length = array == null ? 0 : array.length
    for(let i=0; i<length-1; i++){
        result[++resultIndex] = array[i]
    }
    return result
}

export default initial