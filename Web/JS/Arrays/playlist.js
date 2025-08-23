/** Remove the first and last elements.
Add one new element to end of the array.
Add two new elements to the beginning of the array. */

const musicPlaylist = [
  "Tom Sawyer",
  "Sabotage",
  "I Wanna Dance With Somebody",
  "Don't Speak",
  "Bulls On Parade",
  "Thriller",
  "The Breaks",
  "Brick",
  "Aeroplane Over the Sea",
  "Tubthumping"
];

musicPlaylist.pop();
musicPlaylist.shift();

musicPlaylist.unshift("Lights from the car");
musicPlaylist.push("Tell something back");

console.log(musicPlaylist);