async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '73743198eb38ff383be743ea7a1ec2da'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    const resultDiv = document.getElementById('weatherResult');
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    resultDiv.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>${data.main.temp}°C</strong></p>
      <p>${data.weather[0].description}</p>
      <img src="${iconUrl}" alt="Weather Icon" />
    `;
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
