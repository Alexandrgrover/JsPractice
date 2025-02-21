'use strict'

function findVowel(str){
    const vowel = 'aeiouAEIOU'
    let counter = 0
    for(let i in str){
        if(vowel.includes(str[i])){
            counter++
        }
    }

    return counter
}