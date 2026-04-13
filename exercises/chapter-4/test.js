/*
function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

let array0 = [
  {nam:'beam'},
  {cast:'cast'},
  {bean:'name'},
  {numbs:[1,2,3]},
  {job: {
    title:'developer',
    company:'google'
  }}
]
let array = [1,2,3]
// console.log('nam' in array0)
'nam' in array0[0] ? console.log('lets go') : console.log('no go')

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]).toFixed(4));
let journal = [];
function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
"touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts","beer"], true);

let names = {
    id: '1',
    name: 'Smaller'
}, 
    nullValue = null,
    string = 'babe';
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
deepEqual(string, names)
*/
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ??
      find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}
console.log(findSolution(14));
// → (((1 * 3) + 5) * 3)