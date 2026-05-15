const SCRIPTS = require("./scripts");
function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
return passed;
}
console.log(filter(SCRIPTS, script => script.living));
/* okay, dear future self, this is a bit confusing, but here goes nothing... The thing that's gonna confuse you is the script => script.living part. this is an arrow function. where script is the argument and script.living is the value to be returned.
figure out the rest.. peace out, future self.
remember, it is pure cuz it does not modify the original array but creates a new one. also, it is higher-order because it takes a function as an argument (the test function).
*/
// below is what the above looks like or used normally
console.log(SCRIPTS.filter(script => script.direction == 'ttb'));