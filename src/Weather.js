import React, { useEffect, useState } from "react";

let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "999e9d4ebb46eddf2a1fe603a420065e";
let city ="Atlanta,US";

function Weather() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    let api = `${apiUrl}?q=${city}&appid=${apiKey}&units=imperial`;
    fetch(api).then(response => response.json()).then(data => {
      setWeather(data);
    })
  });

  let imgurl = `http://openweathermap.org/img/wn/${weather && weather.weather[0].icon}@2x.png`; 

  return (
    <div id="weather">
      <h2>It is currently {weather && weather.main.temp}° with {weather && weather.weather[0].description} in Atlanta, GA.</h2>
      <img height="150px" src={imgurl} alt={weather && weather.weather[0].main}/>
    </div>
  );
}

export default Weather;