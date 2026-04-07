let least = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
},
list = {},
array2= [1,2,3];
function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        // console.log(node.value, node.rest);
        if (undefined ?? node.value){
            array.push(node.value);
        }
        // there will definitely be an undefined value at the end of the list cuz if checked.. rest ended somewhere and it's an empty object... so it will be undefined. lesson learnt... always check for undefined values in the end of the loop to avoid errors.
    }
    return console.log(array);
    
}
function arrayToList(array) {
    for (let index = array.length; index > 0; index--) {
        const element = array[index - 1];
        list = {value: element, rest: list}
    }
    return list;
    // lesson learnt... always find a pattern in the problem... rest is the same as value and rest. But the first value is constant
}

arrayToList(array2)
listToArray(list)