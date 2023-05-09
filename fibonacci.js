#!/usr/bin/node


function fibs(num) {
    let array = [];
    if (num <= 1) {
        return [0]; 
    } 
    array[0] = 0; 
    array[1] = 1; 
    for (let i = 0; i < (num - 2); i++) {
        array[i + 2] = array[i] + array[i + 1]; 
    }
    return array; 
} 

function fibsRec(num, array = [0, 1]) {
    // base case - the times you need to add is now zero 
    if (num <= 1) {
        return [0];
    }
    if (num === 2) {
        return array;
    }
    array[array.length] = array[array.length - 1] + array[array.length - 2]; 
    return fibsRec(num - 1, array)
}

console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(6));


// function takes number
// base case 
// function call: add onto the array the next number in the sequence 
// function returns an array with that many numbers of fibonacci sequence 

