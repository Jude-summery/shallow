function pull(array, ...arg) {
    const result = []
    const length = array == null ? 0 : array.length
    const argLength = arg == null ? 0 : arg.length
    let resultIndex = -1
    if(!length) {
        return
    }
    outer: for(let i = 0; i < length; i++){
        for(let j = 0; j < argLength; j++){
            if(array[i] == arg[j]){
                continue outer
            }
        }
        result[++resultIndex] = array[i]
    }

    return result
}

export default pull
