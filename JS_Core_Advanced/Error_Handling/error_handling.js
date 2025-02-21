function divideNumbers(a, b){
    if(b === 0){
        throw new Error("Second number = 0!")
    }
    else return a / b
}

try{
    console.log(divideNumbers(3, 0))
}
catch(error){
    console.error(error.message)
}