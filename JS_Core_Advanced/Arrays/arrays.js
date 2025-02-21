function sumNumber(arr){
    let sum = 0
    for(let i in arr){
        sum += arr[i] ** 2
    }

    return sum
}