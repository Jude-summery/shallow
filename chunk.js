function chunk(array, size) {
    size = Math.max(size, 0);
    if(array && Object.prototype.toString.call(array) == '[object Array]'){
        let result = [];
        for(let i = 0; i < array.length; i+=size){
            let piece = array.slice(i, i+size);
            result.push(piece)
        }
        return result
    } else {
        throw new Error('请传入数组')
    }
}

export default chunk
