
/* create a while loop that runs as long as the guess and the luckyNumber are not equal. 
Each time, print the incorrect number and then print the luckyNumber outside the loop. */
let luckyNumber = 3;

let guess = Math.floor(Math.random() * 10) + 1;

while (guess !== luckyNumber){
    console.log("Nope, it isn't " + guess);
    guess = Math.floor(Math.random() * 10) + 1;
}
console.log("My lucky number is " + luckyNumber +"!");
