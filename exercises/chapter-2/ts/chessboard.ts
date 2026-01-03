
const createChessBoard = function(width:number, height:number) {
    let j:string, 
        i:number,
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
createChessBoard(4,8)