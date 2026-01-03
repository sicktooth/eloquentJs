const isEven = (num)=> {
    function calc() {
        if (num % 2 == 0){
            return console.log(true, 'even');
        } else return console.log(false,'odd')
        
    }
    if (Number.isInteger(num) && num > 0) {
        calc()
        // console.log(num, Number.isInteger(num)) this was me troubleshooting
    } else if (num < 0){
            num = num + 2;
            return calc();
        } else {
            num = num - 2;
            return calc();
        }; 
    
}
isEven(-9)

// const isEven = (N)=> {
//     let check;
//     const loop = () => {
//         if (N > 0) {
//             check = N + 2;
//             console.log(check);
//             check = N % 2;
//             if (check ==0) return console.log(true);
//                 else return console.log(false);
//         } else if (N < 0){
//             // return N = N + 2,
//             console.log('good');
            
//             // return null
//         } else {
//             return loop();
            
//         }
//     }
    
    
// }
// isEven(-1);

