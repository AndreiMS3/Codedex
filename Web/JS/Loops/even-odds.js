/*
begins with a for loop that iterates from 1 to 50.

If the iterator variable i is odd, use the continue keyword to skip this iteration. Otherwise, log the number to the Console.

If the iterator variable is equal to 42, log 42 to the Console and use the break keyword to exit the loop.  */

for (let i = 1; i <=50; i ++){
    if (i % 2 === 1){
        continue;
    }
    else if (i === 42){
        console.log(42);
        break;
    } else{
        console.log(i);
    }
}