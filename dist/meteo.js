import { initDOM } from "./domBuilder";
export let globalData;

const locationInput = document.querySelector("#location-input");
//const submitButton = document.querySelector("#submit");

export async function init() {
  let data = await getWeather('paris');
  globalData = data;
  console.log(globalData);
  initDOM();
  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", handleSubmit);
}

async function handleSubmit(e) {
  e.preventDefault();
  let data = await getLocation();
  globalData = data;
  console.log(data);
  initDOM();
  return data;
}

export async function getLocation() {
  let location = locationInput.value;
  console.log(location);
  let data = await getWeather(location);
  locationInput.value = "";
  return data;
}

async function getWeather(location) {
  const apiKey = "ea81db988f014e72817121433232404";
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=no`,
      { mode: "cors" }
    );
    if (!response.ok) {
      handleError(response.status);
      
    }
    const data = await response.json();
    //globalData = data;

    return data; //use this to display data in the DOM
  } catch (error) {
    console.log(error);
  }
}
function handleError(status) {
  console.log(status);
  alert("Location not found!");
  return;
}
