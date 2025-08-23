/*write a conditional statement with the following logic:

If our characters array includes an element with the value "Waldo", do this:
Save the index of the "Waldo" element in a new variable called waldoIndex.
Then use console.log() to display "Found Waldo at index {indexNumber}!" (e.g., "Found Waldo at index 3").
Else, log "Not found" to the console */

const characters = [
  "The Wally Watchers",
  "Wilma",
  "Fritz",
  "Wizard Whitebeard",
  "Odlaw",
  "Waldo",
  "Woof"
];

if (characters.includes("Waldo")){
    let waldoIndex = characters.indexOf("Waldo");
    console.log("Found Waldo at index " + waldoIndex);
} else{
    console.log("Not found");
}