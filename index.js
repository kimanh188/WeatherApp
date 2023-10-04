//HTML Inputs
const dataCity = document.getElementById("data-city");
const dataProvince = document.getElementById("data-province");
const dataDate = document.getElementById("data-date");
const dataIcon = document.getElementById("data-icon");
const dataWind = document.getElementById("data-wind");
const dataGrad = document.getElementById("data-grad");
const feelsLike = document.getElementById("data-feelslike");
const dataHumidity = document.getElementById("data-humidity");
const form = document.getElementById("cityForm");

//API Data
const weatherKey = "24f842938f574b9ea0f74414232508";
const city = "Berlin";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const city = event.target.elements.searchedCity.value;

  getData(city);
});

async function getData(city) {
  try {
    const rawData = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${city}`
    );

    const data = await rawData.json();

    console.log(data);

    const { name, country, localtime } = data.location;
    const { icon, text } = data.current.condition;
    const { wind_kph, feelslike_c, humidity, temp_c } = data.current;

    dataCity.innerText = name;
    dataProvince.innerText = country;
    dataDate.innerText = localtime;
    dataIcon.src = icon;
    dataIcon.alt = text;
    dataWind.innerText = wind_kph + "km/h";
    dataGrad.innerText = temp_c + "°C";
    feelsLike.innerText = feelslike_c + "°C";
    dataHumidity.innerText = humidity + "%";
  } catch (error) {
    dataCity.innerText = "No data found";
  }
}

getData(city);
