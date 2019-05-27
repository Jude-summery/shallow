function lastIndexOf(array, value, fromIndex) {
    let result = -1
    let length = array == null ? 0 : array.length
    let index = length
    if (fromIndex !== undefined) {
        index = index < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1)
    }
    /**
     * 之前的写法
     * fromIndex = fromIndex == null ? length - 1 : fromIndex
     * 并没有考虑到fromIndex < 0的情况
     * 和fromIndex大于数组长度的情况
     */
    
    for(let i = index; i >= 0 ; i--){
        if(array[i] === value) {
            result = i
            break
        }
    }
    return result
}

export default lastIndexOf