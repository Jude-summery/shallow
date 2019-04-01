function compact(array) {
    let length = array == null? 0 : array.length >>> 0
    if(length){
        let result = []
        for(let index in array){
            if(array[index]){
                result.push(array[index])
            }
        }
        return result
    } else {
        return []
    }
}

export default compact
