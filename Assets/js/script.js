var searchEl = $('#city-input');
var searching = $('#search');
var todaysEl = $('#todaysWeather');
var forecastEl = $('#forecastContainer');
var city = '';
let units = 'imperial';
var rForecast;
var rWeather;
const apiKey = "3844c5bd7e6c5d634485a1c3050b8f72";
const apiUrl = 'https://api.openweathermap.org/data/2.5/';
const iconurl = 'https://openweathermap.org/img/wn/';
//5 day forecast
var fore = 'forecast?'
//current weather
var weat = 'weather?'
// var requestURL = ''
var forecastRequestURL = apiUrl + fore + 'q=' + city + '&units=' + units + '&appid=' + apiKey
var weatRequestURL = apiUrl + weat + 'q=' + city + '&units=' + units + '&appid=' + apiKey
// console.log(requestURL)
//on button press
function searchSubmit(event) {
    event.preventDefault();
    forecastEl.html("");
    city = $("#city-input").val();
    // console.log(city)
    previous = $('prevSearch')
    searchedBtn = $('<button>')
    searchedBtn.text(city)
    searchedBtn.addClass('searched')
    searchedBtn.attr('id', )
    // searchedBtn.on('click', '.searched')
        //todays weather forecast
        weatRequestURL = apiUrl + weat + 'q=' + city + '&units=' + units + '&appid=' + apiKey;
    console.log(weatRequestURL);
    fetch(weatRequestURL)
        .then(function (response2) {
            return response2.json();
        })
        .then(function (data2) {
            //addtional function creation stuff
            rWeather = data2;
            console.log(rWeather)
            curIcon = iconurl + rWeather.weather[0].icon+"@2x.png"
            console.log(curIcon);
            dayTitle = $('<div>');
            dayTitle.text("Today's Weather");
            todaysTemp = $("<div>");
            todaysHumitdy = $('<div>')
            todaysWind = $('<div>');
            todaysIcon = $('<img>')
            todaysIcon.attr('src', curIcon)
            todaysEl.addClass('col-12 col-md-6 col-lg-2 card');
            todaysTemp.text("Temp: "+ rWeather.main.temp + " F")
            todaysHumitdy.text("Humidity: "+rWeather.main.humidity)
            todaysWind.text("Wind: "+rWeather.wind.speed +" mph")
            todaysEl.append(dayTitle, todaysTemp, todaysHumitdy, todaysWind, todaysIcon);
        })  

    forecastRequestURL = apiUrl + fore + 'q=' + city + '&units=' + units + '&appid=' + apiKey;
    fetch(forecastRequestURL)
        .then(function (response1) {
            return response1.json();
        })
        .then(function (data1) {
            // 5 day forecast fetch functional stuff
            console.log(data1)
            rForecast = data1;
            var i = 0
            for (let x = 0; x < 5; x++) {
                createCard(x, i)
                i += 8
            }
        })
};
function createCard(x, i) {
    //add container div
    var cur = $('#day ' + x);
    var titl = "day" + x;
    var containerEl = $('<div>');
    containerEl.addClass('col-12 col-md-6 col-lg-2 card');
    //add card class and dayID from x
    containerEl.attr('id', titl);
    forecastEl.append(containerEl);
    var Dte = $('<h4>');
    var temperature = $('<h4>');
    var Humid = $('<h4>');
    var windy = $('<h4>');
    var iconic = $('<img>');
    foreIcon = iconurl + rForecast.list[i].weather[0].icon+"@2x.png";
    iconic.attr('src', foreIcon)
    tdt = new Date(rForecast.list[i].dt * 1000).toLocaleDateString("en-US")
    temperature.text(rForecast.list[i].main.temp);
    Humid.text(rForecast.list[i].main.humidity);
    windy.text(rForecast.list[i].wind.speed);
    Dte.text(tdt);
    
    // iconic.attr('src','curicon')

    //  iconic.text(rForecast.list[i].main.)
    containerEl.append(Dte, temperature, Humid, windy, iconic);


}


searching.on("click", searchSubmit);
console.log(city);
// console.log(forecastRequestURL);
// console.log(weatRequestURL);

