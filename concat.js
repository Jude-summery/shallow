function concat() {
    const result = [];
    let resultIndex = 0;
    for(let index in arguments){
        
        if(Object.prototype.toString.call(arguments[index]) == '[object Array]'){
            for(let argIndex in arguments[index]){
                result[resultIndex++] = arguments[index][argIndex]
            }
        } else {
          result[resultIndex++] = arguments[index]
        }        
    }
    return result
}