const SCRIPTS = require("./scripts");
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)); 

// so what this does is best explained using this table:
// current | element | combine(current, element) = current
// 0       | 1       | 0 + 1 = 1
// 1       | 2       | 1 + 2 = 3
// 3       | 3       | 3 + 3 = 6
// 6       | 4       | 6 + 4 = 10

// this is how the below functions

console.log([1, 2, 3, 4].reduce((a, b) => a + b));

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}
console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));