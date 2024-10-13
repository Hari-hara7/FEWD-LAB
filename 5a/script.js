document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "19fd5ddefe7aa522c72af9b61052dfb7";
    const fetchWeatherButton = document.getElementById("fetchWeather");
    const cityInput = document.getElementById("cityInput");
    const weatherResult = document.getElementById("weatherResult");

    fetchWeatherButton.addEventListener("click", function() {
        const city = cityInput.value;
        if (city.trim() === "") {
            alert("Please enter a city name.");
            return;
        }

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const temperature = data.main.temp;
                const weatherDescription = data.weather[0].description;
                const weatherOutput = `
                    <p>City: ${city}</p>
                    <p>Temperature: ${temperature}</p>
                    <p>Weather: ${weatherDescription}</p>
                `;
                weatherResult.innerHTML = weatherOutput;
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
                weatherResult.innerHTML = 'Weather data not available.';
            });
    });
});
