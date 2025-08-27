/* create a variable that selects the element with the id of "stone".

Next, create a randomNumber variable 
to use Math.floor() and Math.random() to generate a random number between 1 and 9.

Then, use an if/else if/else conditional statement that changes the .style.backgroundColor 
property according to the value of randomNumber. */

const stone = document.getElementById("stone");

randomNumber = Math.floor(Math.random()* 9) +1;

if (randomNumber === 1){
    stone.style.backgroundColor = "red" ;
} else if(randomNumber === 2){
    stone.style.backgroundColor = "orange";
}else if(randomNumber === 3){
    stone.style.backgroundColor = "yellow";
}else if(randomNumber === 4){
    stone.style.backgroundColor = "green";
}else if(randomNumber === 5){
    stone.style.backgroundColor = "blue";
}else if(randomNumber === 6){
    stone.style.backgroundColor = "#4169e1";
}else if(randomNumber === 7){
    stone.style.backgroundColor = "#00008b";
}else if(randomNumber === 8){
    stone.style.backgroundColor = "purple";
}else {
    stone.style.backgroundColor = "black";
}