const apiKey = "YOUR_API_KEY_HERE"; // replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return alert("Please enter a city name");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      document.getElementById("weatherResult").innerText = "City not found!";
      return;
    }

    const weather = `
      🌍 ${data.name}, ${data.sys.country}
      🌡 Temperature: ${data.main.temp}°C
      ☁ Condition: ${data.weather[0].description}
    `;

    document.getElementById("weatherResult").innerText = weather;
  } catch (error) {
    document.getElementById("weatherResult").innerText = "Error fetching weather data.";
  }
}
