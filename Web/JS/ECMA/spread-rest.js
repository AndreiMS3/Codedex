/*Define a planVacation() function that returns a string array of destinations we plan to visit. It should accept at least two string arguments:
destinationOne
destinationTwo
Use the rest operator so the planVacation() function can have more arguments passed to it.

Then, execute the planVacation() function and log the results to the console.*/

const planVacation = (destinationOne, destinationTwo, ...moreDestionatios) => [destinationOne, destinationTwo, ...moreDestionatios];

console.log(planVacation("Madrid","Viena"));
