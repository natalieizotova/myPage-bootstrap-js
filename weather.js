const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "fd04ef765cf0b319facc71207f2b8b38"
}
const input = document.querySelector('#input');
input.addEventListener('keypress', enter);

function enter(e) {
    if (e.keyCode===13) {
        getInfo(input.value);
    }
}
async function getInfo(data) {
    let res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`)
    const result = await res.json();
    displayResult(result);
}
function displayResult(result) {
    let city = document.querySelector('#city');
    city.textContent=`${result.name}, ${result.sys.country}`
    getOurDate();
    let temperature = document.querySelector('#temperature');
    temperature.innerHTML=`${Math.round(result.main.temp)}<span>°</span>`;
    let feelsLike = document.querySelector('#feelsLike');
    feelsLike.innerHTML=`<span>Feels like: </span>${Math.round(result.main.feels_like)}<span>°</span>`
    let conditions = document.querySelector('#conditions');
    conditions.textContent=`${result.weather[0].description}`
    let variation = document.querySelector('#variation');
    variation.innerHTML=`<span>Min: </span>${Math.round(result.main.temp_min)}<span>° </span> <span>Max: </span>${Math.round(result.main.temp_max)}<span>°</span>`

    function getOurDate() {
        let myDate = new Date();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let weekday = days[myDate.getDay()];
        let todayDate = myDate.getDate();
        let month = months[myDate.getMonth()];
        let year = myDate.getFullYear();
        let showDate = document.querySelector('#date');
        showDate.textContent = `${weekday}`+" "+`${todayDate}`+" "+`${month}`+" "+`${year}`

    }


}