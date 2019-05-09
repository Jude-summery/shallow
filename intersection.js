function intersection() {
    let result = []
    let resultIndex = -1
    let argLength = arguments == null ? 0 : arguments.length
    if(argLength){
        outer: for(i=0; i<arguments[0].length; i++){
            inner: for(let j=1; j<argLength; j++){
                if(arguments[j].indexOf(arguments[0][i]) == -1) {
                    continue outer
                } else {
                    continue inner
                }
            }
            result[++resultIndex] = arguments[0][i]
        }
        
    }
    return result
}

export default intersection
