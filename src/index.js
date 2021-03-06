 


function formatDate (timestamp){
let date = new Date (timestamp);
 let days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday"
 ];

 let day = days[date.getDay()];
 return `${day} ${formatHours(timestamp)}`;
 }
 function formatHours(timestamp){
    let date = new Date (timestamp);
    let hour = date.getHours();
 if (hour < 10){
   hour = "0".concat(hour);
 }
 let minutes = date.getMinutes();
 if (minutes <10){
   minutes = "0".concat(minutes);
 }
  return `${hour}:${minutes}` 
 }

 //Function to show the temperature 

 function showTemperature(response){
  let dateElement = document.querySelector("#date");
  let temperatureValue = document.querySelector("#temperature"); 
  let tempratureApi = Math.round(celciusDegrees);
  let currentCity = response.data.name;
  let forecastElement = document.querySelector("#forecast");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector ("#windy");
  let iconElement = document.querySelector("#icon");
  dateElement.innerHTML = formatDate(response.data.dt *1000);
  celciusDegrees = (response.data.main.temp)
  document.querySelector("#main-city").innerHTML = currentCity;
  temperatureValue.innerHTML = tempratureApi;
  forecastElement.innerHTML= response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute ("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
 }

 function displayForecast(response){
   let forecastHours = document.querySelector("#hours");
   forecastHours.innerHTML = null;
   let forecast = null;

   for (let index = 0; index < 6; index++) { 
     forecast = response.data.list[index];
     forecastHours.innerHTML += `
   <div class="col-2">
                <div class="hour">
                    ${formatHours(forecast.dt*1000)}
                </div>
            
                <img class="icon" src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"/>
                
                <div class="temperature">
                 
                    <strong>${Math.round(forecast.main.temp_max)}°C</strong> ${Math.round(forecast.main.temp_min)}°C
                </div>
        </div>
   `;

   }
   
   
 }

 function search(city) {
  let apiKey = "33591efff15ea7a06a20f804dfa7d7d9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}
 
 //Function to show the city 

 function cityWeather(event) {
   event.preventDefault();
   let apiKey = "33591efff15ea7a06a20f804dfa7d7d9";
   let cityValue = document.querySelector("#city-input");
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue.value}&units=metric&appid=${apiKey}`
   let displayedCity = document.querySelector("#main-city");
   displayedCity.innerHTML = cityValue.value;
  axios.get(apiUrl).then(showTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue.value}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
 }
 //functions most porpular cities link

 function popularCityNewyork(event){
   event.preventDefault();
   let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=new%20york&units=metric&appid=33591efff15ea7a06a20f804dfa7d7d9";
   axios.get(apiUrl).then(showTemperature);
 }
 function popularCityBerlin(event){
   event.preventDefault();
   let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric&appid=33591efff15ea7a06a20f804dfa7d7d9";
   axios.get(apiUrl).then(showTemperature);
 }
 function popularCityLondon(event){
   event.preventDefault();
   let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=33591efff15ea7a06a20f804dfa7d7d9";
   axios.get(apiUrl).then(showTemperature);
 }
 function popularCityParis(event){
   event.preventDefault();
   let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=33591efff15ea7a06a20f804dfa7d7d9";
   axios.get(apiUrl).then(showTemperature);
 }
  function popularCityMadrid(event){
   event.preventDefault();
   let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=madrid&units=metric&appid=33591efff15ea7a06a20f804dfa7d7d9";
   axios.get(apiUrl).then(showTemperature);
 }

 // function searchposition and currentlocaltion 

 function searchPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "33591efff15ea7a06a20f804dfa7d7d9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(showTemperature);
 }
 function getCurrentLocation(event){
     event.preventDefault();
      navigator.geolocation.getCurrentPosition(searchPosition); 
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
 let searchBar  = document.querySelector("#search-engine");
 searchBar.addEventListener("submit", cityWeather);

 //MostpopularcitiesLink Variables

 let linkMostPopularCitiesNy = document.querySelector("#popular-city-newyork");
 linkMostPopularCitiesNy.addEventListener("click",popularCityNewyork);
 let linkMostPopularCitiesBerlin = document.querySelector("#popular-city-berlin");
 linkMostPopularCitiesBerlin.addEventListener("click",popularCityBerlin);
 let linkMostPopularCitiesLondon = document.querySelector("#popular-city-london");
 linkMostPopularCitiesLondon.addEventListener("click",popularCityLondon);
 let linkMostPopularCitiesParis = document.querySelector("#popular-city-paris");
 linkMostPopularCitiesParis.addEventListener("click",popularCityParis);
 let linkMostPopularCitiesMadrid = document.querySelector("#popular-city-madrid");
 linkMostPopularCitiesMadrid.addEventListener("click",popularCityMadrid);
//let currentCity = position.type.name;
  
 //let CurrentdisplayedCity = document.querySelector("#main-city");
  //CurrentdisplayedCity.innerHTML = currentCity;

//Temperature conversion functions and variables 
function farenheitConversion(event){
 event.preventDefault();
let temperatureElement = document.querySelector("#temperature");
let farenheitTemperature = (celciusDegrees*9)/5+32;
temperatureElement.innerHTML = Math.round(farenheitTemperature);
 }
 function celciusConversion(event){
 event.preventDefault();
 let celciusElement = document.querySelector("#temperature")
 celciusElement.innerHTML = Math.round(celciusDegrees);
}
let celciusDegrees = null;

let farenheitDegrees = document.querySelector("#fahrenheit-link");
 farenheitDegrees.addEventListener("click",farenheitConversion);
let celciusValue = document.querySelector("#celsius-link");
celciusValue.addEventListener("click",celciusConversion);

search("Berlin");

