// 1 
function convertToNumber (str){
    return Number(str) + 7
}

console.log(convertToNumber('123'))

// 2

function checkFalsy (inp) {
    return inp == false ? 'invalid' : 'valid'
}
 
console.log(checkFalsy('0'))

// 3

function oddNUmbers(arr) {
    // return arr.filter((ele) => ele % 2 !== 0 ? ele : '')

    let odd = []
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0 ){
            continue
        }else{
            odd.push(arr[i])
        }
    }

    return odd
}

console.log(oddNUmbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


//4

function evenNumber (arr) {
    return arr.filter((ele) => ele % 2 === 0 ? ele : '')
}

console.log(evenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// 5

function merge (arr1, arr2) {
    return [...arr1, ...arr2]
}

console.log(merge([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]))

// 6

function days (num){
    switch(num){
        case 1 :
            return 'Saturday'
            break;
        case 2 :
            return 'Sunday'
            break;
        case 3 :
            return 'monday'
            break;
        case 4 :
            return 'tuesday'
            break;
        case 5 :
            return 'Wednesday'
            break;
        case 6 :
            return 'Thursday'
            break;
        case 7 :
            return 'friday'
            break;
        default : 
            return 'inter your day ? '
    }
}

console.log(days(1))

// 7

function lengthOfArray (arr){
    let length = arr.map((ele, index) => index + 1)
    return length
}

console.log(lengthOfArray(['h', 'abs', 'and', 'hello']))

// 8

function divisible (num){
    return num % 3 === 0 && num % 5 === 0 ? 'Divisible by both' : 'not divisible by both' 
} 

console.log(divisible(15))

// 9

let power = (num) =>  num ** 2

console.log(power(5))

// 10

function destructures (obj){
    return `${obj.name} is ${obj.age} years old` && null
}

console.log(destructures({name : 'hsni', age: '21'}))

// 11

function sumOfNums (...nums) {
    return nums.reduce((acc, current) => acc + current)
}

console.log(sumOfNums(1,2,3,4,5))

// 12

//?????????????????? dont know the answer

// 13 

function compair (arr) {
    return arr.reduce((acc, current) => acc > current ? acc : current )
}

console.log(compair([100,2,10,4,20,6]))

// 14

function keys(obj){
    return Object.keys(obj)
}

console.log(keys({name: 'hsni', age: 10}))

// 15 

function splitStr (str){
    return str.trim().split(' ')
}

console.log(splitStr('  hsni hsni hsni hsni   '))


