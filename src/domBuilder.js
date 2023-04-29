import { globalData } from "./meteo";

const locationNameEl = document.getElementById("location-name");
const currentConditionIconEl = document.getElementById("current-icon");
const currentConditionTextEl = document.getElementById("current-condition");
const currentTempEl = document.getElementById("current-temp");
const maxTempDay0 = document.getElementById("max-temp-day-0");
const minTempDay0 = document.getElementById("min-temp-day-0");



function buildWeatherData() {
    
    
}
 
function createCurrentWeatherDOM() {

    let locationName = globalData.location.name;
    let currentTempC = globalData.current.temp_c;
    let currentTempF = globalData.current.temp_f;
    let currentConditionText = globalData.current.condition.text;
    const currentConditionIconURL = `http:${globalData.current.condition.icon}`;
    let windKph = globalData.current.wind_kph;
    let windMph = globalData.current.wind_mph;
    
    
    locationNameEl.textContent = locationName;
    currentConditionIconEl.src = currentConditionIconURL
    currentConditionTextEl.textContent = currentConditionText;
    currentTempEl.textContent = currentTempC;
    maxTempDay0.textContent = `Hi: ${currentTempC}`;
    minTempDay0.textContent = `Low: ${currentTempC}`;

}
function createForecastDOM() {
    const dayCardsWrapper = document.getElementById("day-cards-wrapper");
    //const maxTempDay0 = document.getElementById("max-temp-day-0");
    globalData.forecast.forecastday.forEach((day, dayIndex) => {
        const dayCard = document.createElement("div");
        const dayName = document.createElement("h3");
        const maxTempEl = document.createElement("p");
        const minTempEl = document.createElement("p");
        const conditionIconEl = document.createElement("img");
        const ConditionTextEl = document.createElement("p");

        dayCard.classList.add('day-card');
        dayCard.classList.add(`${dayIndex}`);
        dayName.classList.add("day-name");
        maxTempEl.classList.add("max-temp");
        minTempEl.classList.add("min-temp");
        conditionIconEl.classList.add("condition-icon");

        let date = day.date;
        let maxTempC = day.day.maxtemp_c;
        let maxTempF = day.day.maxtemp_f;
        let minTempC = day.day.mintemp_c;
        let minTempF = day.day.mintemp_f;
        let conditionText = day.day.condition.text;
        let icon = `https:${day.day.condition.icon}`;
        let windKph = day.day.maxwind_kph;
        let windMph = day.day.maxwind_mph;

        dayName.textContent = date;
        maxTempEl.textContent = `Hi: ${maxTempC}`;
        minTempEl.textContent = `Low: ${minTempC}`;
        conditionIconEl.textContent = icon;
        ConditionTextEl.textContent = conditionText;
        conditionIconEl.setAttribute('src', icon);

        dayCard.append(dayName, maxTempEl, minTempEl, conditionIconEl, ConditionTextEl);
        dayCardsWrapper.appendChild(dayCard);
        
        //maxTempDay0.textContent = date;
    });
}
export function initDOM() {
    //buildWeatherData();
    createCurrentWeatherDOM();
    createForecastDOM();
}