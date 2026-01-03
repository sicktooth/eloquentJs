let loop;
for (loop = 1; loop <= 100; loop++){
    if (loop % 3 == 0 && loop % 5 == 0){
        console.log('fizzBuzz')
    } else if (loop % 3 == 0){
        console.log('fizz');
    } else if (loop % 5 == 0){
        console.log('buzz')
    } else {
        console.log (loop)
    }
}
