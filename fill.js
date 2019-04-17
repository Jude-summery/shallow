function fill(array, value, start, end) {
    let result = []
    let length = array == null ? 0 : array.length >>> 0
    start = start || 0
    end = end && end < length ? end : length
    for(let i=0; i<length; i++){
        result[i] = array[i]
    }
    for(let i=start; i<end; i++){
        result[i] = value
    }
    return result
}

export default fill
