const range = (start, end, step = -1)=> {
    let array = [];
    step = Math.abs(step)
    if (start > end) {
        for (let index = start; index >= end; index-= step) {
            array.push(index)
        }
        return array;
    } else {
        for (let index = start; index <= end; index+= step) {
            array.push(index)
        }
        return array;
    }
    
    //lesson learnt... you can also compare other variables
    // introduced math.abs() method to store all step variables as positive values... negative values does not work in for loops.
}
const sum = (numbers)=> {
    // console.log(numbers[0]);
    let results = 0;
    
    for (let number of numbers) {
        results += number;
       
    }
     return results;
    
}
console.log(sum(range(1,10,2)))