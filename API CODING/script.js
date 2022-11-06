let weather = {
    "apiKey": "89c9a7d165051cda461c90e04d6e6314",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apiKey)

            .then((response) => response.json())
            .then((data) => this.displayWeather(data));

    },
    
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity, feels_like, temp_max, temp_min} = data.main;
        const {speed} = data.wind;
        const {country} =data.sys;

        console.log(name, icon, description, temp, humidity);
        document.querySelector(".city").innerText = name +", NB";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".temp").innerText = temp + "ºC";
        // precipitation is not available in the 2.5 version
        // document.querySelector(".precipitation").innerText ="Precipitation: " + precipitation + "%";
        document.querySelector(".speed").innerText = "Wind Speed: " + speed + " km/h";
        document.querySelector(".feels_like").innerText = "Feels like: " + feels_like + "ºC";
        document.querySelector(".maxTemp").innerText = "Max: " + temp_max + "ºC";
        document.querySelector(".minTemp").innerText = "Min: " + temp_min + "ºC";




    }
};

weather.fetchWeather("St. Stephen");
