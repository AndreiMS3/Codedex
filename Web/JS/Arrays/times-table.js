/**create the following variables:

A multiple variable that should be set to an integer above 0.
A numbers array of integers 0 through 9.
Then, use a for loop to iterate through the 
numbers array and multiply a given number by multiple each time. Then, print the results to the console. */

let multiple = 9;
let numbers = [0,1,2,3,4,5,6,7,8,9];

for (let i = 0; i< numbers.length; i ++){
    result = multiple * i;
    console.log(multiple + " x " + i + " = "  + result);
}