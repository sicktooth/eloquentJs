/*
let bWidth = 5;
let size = 5;
let j, 
    i,
    calcSpaceNeeded = bWidth - 1; // this is for the total space needed for no. of # inputed
// loop for the height  
for (i = 1; i <= size; i++) {
    // loop for the width 
    for (j = ''; j.length < (bWidth + calcSpaceNeeded); j+='# ') {}
    // Below is responsible for the full board arrangement...
    if (i % 2 != 0) {
        console.log(' ' + j); 
    } else {
        console.log(j)
    }
}
*/
const chessBoard = function(width, height) {
    let j, 
        i,
        calcSpaceNeeded = width - 1; // this is for the total space needed for no. of # inputed
    // loop for the height  
    for (i = 1; i <= height; i++) {
        // loop for the width 
        for (j = ''; j.length < (width + calcSpaceNeeded); j+='# ') {}
        // Below is responsible for the full board arrangement...
        if (i % 2 != 0) {
            console.log(' ' + j); 
        } else {
            console.log(j)
        }
    }
}
chessBoard(4,8);