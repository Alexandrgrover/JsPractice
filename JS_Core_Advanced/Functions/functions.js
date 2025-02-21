function firstNonRecurring(str){
    let tmp = ''
    let arr = Array.from(str)

    for(let i = 0; i < arr.length; i ++){
        tmp = arr[i]
        arr.splice(i, 1)

        if (!arr.includes(tmp)){
            return tmp
        }
        else{
            arr.splice(i, 0, tmp)
        }

        if (i === arr.length - 1) return ''
    }
}