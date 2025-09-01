const apiKey = "X"; 



async function fetchWeather() {
  let searchInput = document.getElementById("search").value;
  const weatherDataSection = document.getElementById("weather-data");
  weatherDataSection.style.display = "block";


  if (searchInput == "") {
    weatherDataSection.innerHTML = `
      <div>
        <h2>Empty Input!</h2>
        <p>Please try again with a valid <u>city name</u>.</p>
      </div>
    `;
    return;
  }

  async function getLonAndLat() {
    
    const geocodeURL = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&limit=1&appid=${apiKey}`;
    const response = await fetch(geocodeURL);
    if (!response.ok) {
      console.log("Bad response! ", response.status);
      return;
    }

    const data = await response.json();
    if (data.length == 0) {
      weatherDataSection.innerHTML = `
        <div>
          <h2>Invalid Input: "${searchInput}"</h2>
          <p>Please try again with a valid <u>city name</u>.</p>
        </div>
      `;
      return;
    } else {
      return data[0];
    }
  }

  async function getWeatherData(lon, lat) {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(weatherURL);

    if (!response.ok) {
      console.log("Bad response! ", response.status);
      return;
    }

    const data = await response.json();
    return data; 
  }

  
  const geocodeData = await getLonAndLat();
  if (!geocodeData) return;

  const data = await getWeatherData(geocodeData.lon, geocodeData.lat);

  weatherDataSection.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" 
         alt="${data.weather[0].description}" width="100" />
    <div>
      <h2> 📍 ${data.name}</h2>
      <p>🌡️ <strong> Temperature:</strong>  ${Math.round(data.main.temp - 273.15)}°C</p>
      <p>🌥️ <strong> Description:</strong>  ${data.weather[0].description}</p>
      <p>💧 <strong>Humidity:</strong>  ${data.main.humidity}%</p>
      <p>💨 <strong>Wind Speed:</strong>  ${data.wind.speed} m/s</p>
      <p>⚖️ <strong>Pressure:</strong>  [${data.main.pressure} hPa]</p>
      <p>🌅 <strong>Sunrise:</strong>  ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
      <p>🌇 <strong>Sunset:</strong>  ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
    </div>
  `;

  document.getElementById("search").value = "";
}
//Función para que al pulsar "Enter" se ejecute la búsqueda.
document.getElementById("search").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    fetchWeather();
  }}) ;

let timeoutId;

/*Función para obtener sugerencias de ciudades desde la API de OpenWeatherMap
 - Recibe el texto del input.
 - Si el texto está vacío, retorna sin hacer nada.
 - Construye la URL de la API de geocodificación directa con el texto, un límite de 5 resultados y la API key.
*/
async function fetchSuggestions(text) {
    if (!text) return;
    const geocodeURL = `https://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=${apiKey}`;
    const response = await fetch(geocodeURL);
    if (!response.ok) return;
    const cities = await response.json();
    showSuggestions(cities);
}
/*Función para mostrar las sugerencias en el DOM
 - Recibe un array de ciudades de la función fetchSuggestions.
 - Vacía el contenido previo de la lista de sugerencias.
 - Crea un nuevo elemento <ul>.
 - Por cada ciudad del array genera un nuevo elemento <li> con su nombre. 
 - Si se hace click en una sugerencia, se actualiza el input con el nombre de la ciudad y se vacía la lista de sugerencias.
*/
function showSuggestions(cities) { 
    const suggestionsList =  document.getElementById("suggestions");
    suggestionsList.innerHTML = "";
    const ul = document.createElement("ul");
    suggestionsList.appendChild(ul);
    cities.forEach(city => {
        const listItem = document.createElement("li");
        listItem.textContent = `${city.name}, ${city.state ? city.state + ', ' : ''}${city.country}`;
        ul.appendChild(listItem);
        listItem.addEventListener("click", () => {
            document.getElementById("search").value = city.name;
            suggestionsList.innerHTML = "";
        });
    });
}  

/* Evento input que aplica un delay a la busqueda, llama al metodo showSuggestions para mostrar
las sugerencias y finalmente llama a fetchSuggestions para obtener las sugerencias de la API.
*/
document.getElementById("search").addEventListener("input", function(event) {
  clearTimeout(timeoutId); 
  const text = event.target.value;
  // Delay de 750ms antes de hacer la búsqueda
  timeoutId = setTimeout(() => {
    fetchSuggestions(text);
  }, 750); 
  
});    

