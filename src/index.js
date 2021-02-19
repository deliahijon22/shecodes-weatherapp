 

 let currentDate = new Date ();
 function formatDate (date){
 let days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday"
 ];
 let currentDay = days[date.getDay()];
 let currentHour = date.getHours();
 if (currentHour < 10){
   currentHour = "0".concat(currentHour);
 }
 let currentMinutes = date.getMinutes();
 if (currentMinutes <10){
   currentMinutes = "0".concat(currentMinutes);
 }
 let formattedDate = `${currentDay} ${currentHour}:${currentMinutes}`;
 return formattedDate;
 }
 
 let dateElement = document.querySelector("#date");
 dateElement.innerHTML = formatDate(currentDate);
 

 function showTemperature(reponse){
  let temperatureValue = document.querySelector("#temperature"); 
  let tempratureApi = Math.round(reponse.data.main.temp);
  let currentCity = reponse.data.name;
  document.querySelector("#main-city").innerHTML = currentCity;
  temperatureValue.innerHTML = tempratureApi;

 }
 
 function cityWeather(event) {
   event.preventDefault();
   let apiKey = "33591efff15ea7a06a20f804dfa7d7d9";
   let cityValue = document.querySelector("#city-input");
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue.value}&units=metric&appid=${apiKey}`
   let displayedCity = document.querySelector("#main-city");
   displayedCity.innerHTML = cityValue.value;
  axios.get(apiUrl).then(showTemperature);
 }
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
//let currentCity = position.type.name;
  
 //let CurrentdisplayedCity = document.querySelector("#main-city");
  //CurrentdisplayedCity.innerHTML = currentCity;

 //function farenheitConversion(event){
    //event.preventDefault();
  //let farenheitValue = document.querySelector("#temperature")
  //farenheitValue.innerHTML = "⛅️ 30.2";
 //}

 //function celciusConversion(event){
  //event.preventDefault();
  //let celciusValue = document.querySelector("#temperature")
  //celciusValue.innerHTML = "⛅️ -1";
//}
 
 //let farenheitDegrees = document.querySelector("#fahrenheit-link");
 //farenheitDegrees.addEventListener("click",farenheitConversion);
//let celciusDegrees = document.querySelector("#celsius-link");
 //celciusDegrees.addEventListener("click",celciusConversion);



