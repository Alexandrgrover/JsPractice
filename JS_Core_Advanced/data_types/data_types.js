function sumNumber(arr){
    let sum = 0
    for(let i in arr){
        sum += arr[i] ** 2
    }

    return sum
}

const arr = [1, 2, 3]
console.log(sumNumber(arr))