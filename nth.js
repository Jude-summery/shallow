function nth(array, n){
    const length = array == null ? 0 : array.length
    if(!length){
        return
    }
    // let index = n > 0 ? n : length + n
    n += n < 0 ? length : 0
    return array[n]
}

export default nth