/**For this exercise, create three objects for three farm animals: pig, sheep, and dog.

Each object should have the following properties:

A .name, set to a string.
A .type, set to a string of either "pig", "sheep", or "dog".
An .age, set to an integer.
A .makeSound() method that returns a string of the sound it makes (specific to the animal).
The .makeSound() method should return a string featuring the other properties, and looks like the following:

Benny is a 10 year old dog that goes woof! */

const pig = {
    name: "Benny",
    type: "pig",
    age: 5,
    makeSound(){
        console.log(pig.name + " is a " + pig.age + " year old " + pig.type + " that goes oink!");
    }
}

const sheep= {
    name: "Mary",
    type: "sheep",
    age: 10,
    makeSound(){
        console.log(sheep.name + " is a " + sheep.age + " year old " + sheep.type + " that goes baaaah!");
    }
}

const dog ={
    name: "Gus",
    type: "dog",
    age: 3,
    makeSound(){
        console.log(dog.name + " is a " + dog.age + " year old " + dog.type + " that goes woof!");
    }
}

pig.makeSound();
sheep.makeSound();
dog.makeSound();
