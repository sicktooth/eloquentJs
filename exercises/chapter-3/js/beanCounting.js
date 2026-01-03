const countBs = (strg = '') => {
    
    check = /B/g;
    if (strg.match(check)){
        console.log(strg.match(check).length);
    }
    

}
countBs('BBL girls B are Bae');


const countChar = (strg = '', char = '') => {
    let check = new RegExp(char, 'g');
    if (strg.match(check)){
        console.log(strg.match(check).length);
    }
    /* OR
    if (check.exec(strg)){
        console.log(check.exec(strg).length);}
    */
}
countChar('kakkerlak', 'k');

