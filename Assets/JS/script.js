var searchEl = $('#city-input');
var searching = $('#search');
var city = 'Boston' ;
let units = 'imperial';
const apiKey = "3844c5bd7e6c5d634485a1c3050b8f72&"
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?';
// var requestURL = ''
var requestURL = apiUrl + 'q=' + city + '&appid=' + apiKey + units
// console.log(requestURL)
//on button press
function searchSubmit (event){
    event.preventDefault();
    city = $("#city-input").val();
    console.log(city)
    requestURL = apiUrl + 'q=' + city + '&appid=' + apiKey + units;
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            
        })
    
    

};
function createCard(){

}
searching.on("click", searchSubmit);
console.log(city);
console.log(requestURL);

