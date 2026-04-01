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
array2= [1,2,3]
function arrayToList(array) {
    for (let index = array.length - 1; index >= 0; index--) {
        const element = array[index];
        list = {value: element, rest: list}
    }
    console.log(list)
    // lesson learnt... always find a pattern in the problem... rest is the same as value and rest. But the first value is constant
}

arrayToList(array2)