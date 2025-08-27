/*Create a drakePicTwo variable that selects the <img> element with the id of "drake-pic-2".
Create another variable called heading that selects the <h1> heading element with an id of "heading-2".
Change the image source of the drakePicTwo variable to this link: "https://i.imgur.com/RGbh6zY.png".
Change the text of the heading variable to say "Learn By Doing".*/

const drakePicTwo = document.getElementById("drake-pic-2");
const heading = document.getElementById("heading-2");

drakePicTwo.src = "https://i.imgur.com/RGbh6zY.png";
heading.innerText = "Learn by doing";