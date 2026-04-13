
function deepEqual(x , y) {
    let typeX = typeof x,
        typeY = typeof y;
    if (x == null || y == null) return false
    let keysX = Object.keys(x),
        keysY = Object.keys(y);
    if (x == y) return true
    if (typeX !== 'object' || typeY !== 'object') return false
    if (keysX.length !== keysY.length) return false
    for (let key of keysX) {
        if (!keysY.includes(key) || !deepEqual(x[key], y[key])) 
            return false;
    }
    
    return true

    
}

let names = {
    id: '1',
    name: 'Smaller'
}, 
    nullValue = null,
    string = 'babe';

console.log(deepEqual(string, names))

