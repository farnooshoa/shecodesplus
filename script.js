//date
function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let dayIndex = date.getDay();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = days[dayIndex];

    return `${day} ${hours}:${minutes}`;
}


let dateElement = document.querySelector("h3");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

//searchinput
function search(event) {
    event.preventDefault();
    let cityElement = document.querySelector("h1");
    let cityInput = document.querySelector("#city-input");
    cityElement.innerHTML = cityInput.value;
    //change information
    function changeInformation(response) {
        let temperature = Math.round(response.data.main.temp);
        let description = (response.data.weather[0].description);
        let humidity = (response.data.main.humidity);
        let wind = (response.data.wind.speed);
        let temeratureCity = document.querySelector("#temperature");
        let humidityCity = document.querySelector("#hum");
        let windCity = document.querySelector("#wind");
        let descriptionCity = document.querySelector("h4");
        temeratureCity.innerHTML = temperature;
        humidityCity.innerHTML = humidity;
        windCity.innerHTML = wind;
        descriptionCity.innerHTML = description;

    }
    let apiKey = "256a30f9fb5ee55039e6c546147b0e63";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(changeInformation);

}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

//current location

function showWeather(response) {
    let temperature = Math.round(response.data.main.temp);
    let description = (response.data.weather[0].description);
    let humidity = (response.data.main.humidity);
    let wind = (response.data.wind.speed);
    let temeratureCity = document.querySelector("#temperature");
    let humidityCity = document.querySelector("#hum");
    let windCity = document.querySelector("#wind");
    let descriptionCity = document.querySelector("h4");
    temeratureCity.innerHTML = temperature;
    humidityCity.innerHTML = humidity;
    windCity.innerHTML = wind;
    descriptionCity.innerHTML = description;

}


function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "256a30f9fb5ee55039e6c546147b0e63";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}`;
    axios.get(url).then(showWeather);
}
function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
}



let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);