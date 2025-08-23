/*Inside a loop, to build the myDNA array by doing the following:

Get three random index numbers from dnaPieces with Math.floor() and Math.random().
Build a string of three letters by accessing the dnaPieces array elements with the three random index numbers.
Add this string to the myDNA array.
Lastly, log the myDNA array to the console */

const dnaPieces = ["A", "C", "G", "T"];
const myDNA = [];



for (let i = 0; i < 24; i++) {
    const pieceOne = Math.floor(Math.random() * dnaPieces.length);
    const pieceTwo = Math.floor(Math.random() * dnaPieces.length);
    const pieceThree = Math.floor(Math.random() * dnaPieces.length);
    
    myDNA.push(dnaPieces[pieceOne] + dnaPieces[pieceTwo] + dnaPieces[pieceThree]);
}

console.log(myDNA);