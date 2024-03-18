/** @format */

function refreshWeather(response) {
  console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector("#current-temp-value");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector(".weather-app-city");
  cityElement.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "0aodcba46dd4t713dd6b4d55b3f2bd07";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Manteca");