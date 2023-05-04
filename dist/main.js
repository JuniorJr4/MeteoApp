/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domBuilder.js":
/*!***************************!*\
  !*** ./src/domBuilder.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initDOM\": () => (/* binding */ initDOM)\n/* harmony export */ });\n/* harmony import */ var _meteo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meteo */ \"./src/meteo.js\");\n\n\nconst locationNameEl = document.getElementById(\"location-name\");\nconst currentConditionIconEl = document.getElementById(\"current-icon\");\nconst currentConditionTextEl = document.getElementById(\"current-condition\");\nconst currentTempEl = document.getElementById(\"current-temp\");\nconst chanceOfRain = document.getElementById(\"chance-of-rain\");\n\nfunction getDayOfWeek(dateString) {\n  const daysOfWeek = [\n    \"Sunday\",\n    \"Monday\",\n    \"Tuesday\",\n    \"Wednesday\",\n    \"Thursday\",\n    \"Friday\",\n    \"Saturday\",\n  ];\n  const date = new Date(dateString);\n  const dayOfWeek = daysOfWeek[date.getDay()];\n  return dayOfWeek;\n}\n\nfunction createCurrentWeatherDOM() {\n  let locationName = _meteo__WEBPACK_IMPORTED_MODULE_0__.globalData.location.name;\n  let currentTempC = _meteo__WEBPACK_IMPORTED_MODULE_0__.globalData.current.temp_c;\n  let currentTempF = _meteo__WEBPACK_IMPORTED_MODULE_0__.globalData.current.temp_f;\n  const rainChance =\n    _meteo__WEBPACK_IMPORTED_MODULE_0__.globalData.forecast.forecastday[0].day.daily_chance_of_rain;\n  let currentConditionText = _meteo__WEBPACK_IMPORTED_MODULE_0__.globalData.current.condition.text;\n  const currentConditionIconURL = `http:${_meteo__WEBPACK_IMPORTED_MODULE_0__.globalData.current.condition.icon}`;\n  let windKph = _meteo__WEBPACK_IMPORTED_MODULE_0__.globalData.current.wind_kph;\n  let windMph = _meteo__WEBPACK_IMPORTED_MODULE_0__.globalData.current.wind_mph;\n\n  locationNameEl.textContent = `${locationName} Today`;\n  currentConditionIconEl.src = currentConditionIconURL;\n  currentConditionTextEl.textContent = currentConditionText;\n  currentTempEl.textContent = `${currentTempC}\\u2103`;\n  chanceOfRain.textContent = `Chance of rain: ${rainChance}%`;\n}\nfunction createForecastDOM() {\n  const dayCardsWrapper = document.getElementById(\"day-cards-wrapper\");\n  //const maxTempDay0 = document.getElementById(\"max-temp-day-0\");\n  dayCardsWrapper.innerHTML = \"\";\n  _meteo__WEBPACK_IMPORTED_MODULE_0__.globalData.forecast.forecastday.forEach((day, dayIndex) => {\n    if (dayIndex === 0) return;\n    const dayCard = document.createElement(\"div\");\n    const dayName = document.createElement(\"h3\");\n    const maxTempEl = document.createElement(\"p\");\n    const minTempEl = document.createElement(\"p\");\n    const conditionIconEl = document.createElement(\"img\");\n    const ConditionTextEl = document.createElement(\"p\");\n\n    dayCard.classList.add(\"day-card\");\n    dayCard.classList.add(`${dayIndex}`);\n    dayName.classList.add(\"day-name\");\n    maxTempEl.classList.add(\"max-temp\");\n    minTempEl.classList.add(\"min-temp\");\n    conditionIconEl.classList.add(\"condition-icon\");\n\n    let date = getDayOfWeek(day.date);\n    let maxTempC = day.day.maxtemp_c;\n    let maxTempF = day.day.maxtemp_f;\n    let minTempC = day.day.mintemp_c;\n    let minTempF = day.day.mintemp_f;\n    let conditionText = day.day.condition.text;\n    let icon = `https:${day.day.condition.icon}`;\n    let windKph = day.day.maxwind_kph;\n    let windMph = day.day.maxwind_mph;\n\n    dayName.textContent = date;\n    maxTempEl.textContent = `Hi: ${maxTempC}\\u2103`;\n    minTempEl.textContent = `Low: ${minTempC}\\u2103`;\n    conditionIconEl.textContent = icon;\n    ConditionTextEl.textContent = conditionText;\n    conditionIconEl.setAttribute(\"src\", icon);\n\n    dayCard.append(\n      dayName,\n      maxTempEl,\n      minTempEl,\n      conditionIconEl,\n      ConditionTextEl\n    );\n    dayCardsWrapper.appendChild(dayCard);\n\n    //maxTempDay0.textContent = date;\n  });\n}\n\nfunction initDOM() {\n  createCurrentWeatherDOM();\n  createForecastDOM();\n}\n\n\n//# sourceURL=webpack://meteoapp/./src/domBuilder.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _meteo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meteo */ \"./src/meteo.js\");\n\n(0,_meteo__WEBPACK_IMPORTED_MODULE_0__.init)();\n//console.log(globalData);\n\n//# sourceURL=webpack://meteoapp/./src/index.js?");

/***/ }),

/***/ "./src/meteo.js":
/*!**********************!*\
  !*** ./src/meteo.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocation\": () => (/* binding */ getLocation),\n/* harmony export */   \"globalData\": () => (/* binding */ globalData),\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _domBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domBuilder */ \"./src/domBuilder.js\");\n\nlet globalData;\n\nconst locationInput = document.querySelector(\"#location-input\");\n//const submitButton = document.querySelector(\"#submit\");\n\nasync function init() {\n  let data = await getWeather('paris');\n  globalData = data;\n  console.log(globalData);\n  (0,_domBuilder__WEBPACK_IMPORTED_MODULE_0__.initDOM)();\n  const submitButton = document.querySelector(\"#submit\");\n  submitButton.addEventListener(\"click\", handleSubmit);\n}\n\nasync function handleSubmit(e) {\n  e.preventDefault();\n  let data = await getLocation();\n  globalData = data;\n  console.log(data);\n  (0,_domBuilder__WEBPACK_IMPORTED_MODULE_0__.initDOM)();\n  return data;\n}\n\nasync function getLocation() {\n  let location = locationInput.value;\n  console.log(location);\n  let data = await getWeather(location);\n  locationInput.value = \"\";\n  return data;\n}\n\nasync function getWeather(location) {\n  const apiKey = \"ea81db988f014e72817121433232404\";\n  try {\n    const response = await fetch(\n      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=no`,\n      { mode: \"cors\" }\n    );\n    if (!response.ok) {\n      handleError(response.status);\n      \n    }\n    const data = await response.json();\n    //globalData = data;\n\n    return data; //use this to display data in the DOM\n  } catch (error) {\n    console.log(error);\n  }\n}\nfunction handleError(status) {\n  console.log(status);\n  alert(\"Location not found!\");\n  return;\n}\n\n\n//# sourceURL=webpack://meteoapp/./src/meteo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;