

const car = {};

car.model = "Tesla";
car.year = "2024";
car.color = "red";
car.used = false;

if(car.used === true){
   console.log("I'm looking for a " + car.year + " " + car.model + " that is used");
} else{
    console.log("I'm looking for a " + car.year + " " + car.model + " that is new");
}

