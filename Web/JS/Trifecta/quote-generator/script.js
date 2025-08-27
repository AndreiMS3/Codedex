const quoteList = [
  "Some doors only open from the inside. Breath is a way of accessing that door.",
  "What has to be taught first, is the breath.",
  "Remember the blue sky. It may at times be obscured by clouds, but it is always there.",
  "In the midst of movement and chaos, keep stillness inside of you.",
  "We can't control the sea, but we can learn how to surf the waves.",
  "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
  "To understand the immeasurable, the mind must be extraordinarily quiet, still."
];

const colors = ["#e81416", "#ffa500", "#faeb36", "#79c314", "#487de7", "#4b369d", "#70369d"];

/*create the following variables:

A wrapperDiv variable that selects the <div> element with an id of "wrapper".
A quoteText variable that selects the <p> paragraph element with an id of "quote-text".
A quoteButton variable that selects the <button> element with an id of "quote-button". */
const wrapperDiv = document.getElementById("wrapper");
const quoteText = document.getElementById("quote-text");
const quoteButton = document.getElementById("quote-button");


/*Use the .addEventListener() method on the quoteButton variable. Pass a "click" string along with a function that does the following:

Create a randomIndex from the quoteList array, using Math.floor() and Math.random().
Use the randomIndex to get a random quote from the quoteList array and save to a randomQuote variable.
Change the text of the quoteText variable to the value of the randomQuote variable.
Use the randomIndex again to change the background color of the wrapperDiv variable to something from the colors array*/

quoteButton.addEventListener("click",function() {
    const randomIndex = Math.floor(Math.random() *quoteList.length);
    const randomQuote = quoteList[randomIndex];
    quoteText.innerText = randomQuote;
    wrapperDiv.style.backgroundColor = colors[randomIndex];
})