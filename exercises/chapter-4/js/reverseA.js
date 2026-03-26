import range from './sumOfRange.js'
let genArray = (range(1,20,2));
function reverseArray(array) {
    let newArray = [];
    for (let index = array.length - 1; index >= 0; index--) {
        const element = array[index];
        newArray.push(element);
    }
    return newArray;
    
}
function reverseArrayInPlace(array) {
    let newArray = [];
    for (let index = array.length - 1; index >= 0; index--) {
        const element = array[index];
        newArray.push(element);
    }
    return newArray;
}
console.log(genArray.reverse());
let newArray1 = reverseArray(genArray);
console.log(reverseArray(genArray), reverseArrayInPlace(newArray1));