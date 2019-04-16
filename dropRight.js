function dropRight(array, n) {
    let result = []
    let resultIndex = -1
    let number = n == null ? 1 : (n >= 0 ? n : 0)
    let length = array == null ? 0 : array.length >>> 0
    let size = length - number > 0 ? length - number : 0

    for (let i = 0; i < size; i++) {
        result[++resultIndex] = array[i]
    }
    return result
}