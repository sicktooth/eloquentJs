const SCRIPTS = require("./scripts");
function map(array, transform) {
let mapped = [];
for (let element of array) {
mapped.push(transform(element));
}
return mapped;
}
let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]
/* the diff b/w filter and map is that filter checks if the element passes a test while map just transforms the element into something else. Still pure! */

// below is what the above looks like or used normally
console.log(SCRIPTS.filter(s => s.direction == "rtl").map(s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]