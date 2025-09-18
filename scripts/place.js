const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;

const temperature = 26;
const conditions = "Clear";
const windSpeed = 14;
let windChill;

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)}°C`;
}
else {
    windChill = "N/A";
}

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
}

document.querySelector("#temperature").innerHTML = temperature;
document.querySelector("#conditions").innerHTML = conditions;
document.querySelector("#windspeed").innerHTML = windSpeed;
document.querySelector("#windchill").innerHTML = windChill;