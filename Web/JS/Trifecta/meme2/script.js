const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png"
];

const captionsArray = [
    "Me logging into work from home at 8:59 like a professional.",
    "Me after writing one line of code: ‘Am I a software engineer now?’",
    "When you google one error and fix it: ‘Is this mastery?’",
    "When you push to production without testing and it breaks."
];
/*Select the <img> image element with an id of "random-meme" and store it in a variable.
Select the <h2> heading element with an id of "random-caption" and store that in a variable.
Select the <button> element with an id of "generator-button" and store it in a variable. */

const randomMeme = document.getElementById("random-meme");
const randomCaption = document.getElementById("random-caption");
const generatorButton = document.getElementById("generator-button");

generatorButton.addEventListener("click", function(){
    randomIndex = Math.floor(Math.random() * memeArray.length);
    randomIndex2 = Math.floor(Math.random() * captionsArray.length);

    randomMeme.src = memeArray[randomIndex];
    randomCaption.innerText = captionsArray[randomIndex2];
})
