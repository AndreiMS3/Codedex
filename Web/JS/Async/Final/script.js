const apodContainer = document.getElementById("apod-container");


// Define fetchAPOD() function.
async function fetchAPOD(date) {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`);
    if(!response.ok) { 
        apodContainer.innerHTML = "An error occured while fetching the data.";
        throw new Error ("Something went wrong while fetching");
    }
    const data = await response.json();
    apodContainer.innerHTML = `
      <img id="apod-image" src="${data.url}" alt="${data.title}" width="600">
      <div id="apod-info">
          <h2 id="apod-title">${data.title}</h2>
          <p>${data.explanation}</p>
      </div>
     `;

    
}



document.getElementById("birthdayForm").addEventListener("submit", 
  function (event) {
  event.preventDefault();
  const birthday = document.getElementById("birthday").value;
  const errorMessage = document.getElementById("error-message");
  const minDate = new Date("1995-06-16");

  if (new Date(birthday) < minDate) {
    errorMessage.textContent = "Invalid entry: Please enter a date on or after June 16, 1995.";
    apodContainer.innerHTML = "";
  } else {
    errorMessage.textContent = "";
    fetchAPOD(birthday);
  }
});