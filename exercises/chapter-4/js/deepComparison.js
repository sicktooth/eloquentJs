
// function deepEqual(x , y) {
//     let typeX = typeof(x),
//         typeY = typeof(y);
//     console.log(typeX, typeY, x ,y)

//     if ((x == null || undefined) || (y == null || undefined)) {
//         return console.log('cannot work on null or undefined value')
//     } else {

//         let deeds0 = Object.keys(x),
//             deeds1 = Object.keys(y);
//         console.log(deeds0, deeds1)

//         if (typeX && typeY == 'object') {
//             console.log(deeds0, deeds1)

//             if (deeds0 === deeds1) {
//                 return true
//             } else console.log('news flash')
        
//         } else if (typeX === typeY) {
//             return true
            
//         } else return false
//     }

    
// }
function deepEqual(x, y) {
    if (x === y) return true;

    if (x == null || y == null) return false;

    if (typeof x !== 'object' || typeof y !== 'object') {
        return false;
    }

    let keysX = Object.keys(x);
    let keysY = Object.keys(y);

    if (keysX.length !== keysY.length) return false;

    for (let key of keysX) {
        if (!keysY.includes(key) || !deepEqual(x[key], y[key])) {
            return false;
        }
    }

    return true;
}

let names = {
    id: '1',
    name: 'Smaller'
}, 
    nullValue = null,
    string = 'babe';

console.log(deepEqual(names, names))

