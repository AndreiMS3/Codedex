
function randomNumberPromise()  {
    const randomNum = Math.floor(Math.random()* 10) + 1;

    return new Promise ((resolve, reject) => {
       if (randomNum < 5 ){
        resolve();
       } else {
        reject("The number is greater or equal to 5.");
       }
    });
}


const generateBtn = document.getElementById("generateButton");

generateBtn.addEventListener("click", randomNumberPromise);
