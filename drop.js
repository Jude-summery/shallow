function drop(array, n) {
    let result = []
    let resultIndex = -1
    let number = n == null ? 1 : (n >= 0 ? n : 0)
    let length = array == null ? 0 : array.length >>> 0

    for (let i = number; i < length; i++) {
        result[++resultIndex] = array[i]
    }
    return result
}

export default drop
