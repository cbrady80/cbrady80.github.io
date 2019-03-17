//PRESTON IDAHO 5604473

// WEATHER SUMMARY
var weatherObject = new XMLHttpRequest
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=93513a5ecb45a4d44be23c0ee39c9db3', true);
weatherObject.send();
weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('high').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

    var  windChill = 35.74 + 0.6215 * weatherInfo.main.temp - 35.75 * Math.pow(weatherInfo.wind.speed, 0.16) 
                    + 0.4275 * weatherInfo.main.temp * Math.pow(weatherInfo.wind.speed, 0.16);
    windChill = Math.round(windChill);
    document.getElementById('windChill').innerHTML = windChill;

}

// FORECAST
var weatherForecast = new XMLHttpRequest
weatherForecast.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=93513a5ecb45a4d44be23c0ee39c9db3', true);
weatherForecast.send();
weatherForecast.onload = function() {

    var forecastInfo = JSON.parse(weatherForecast.responseText);
    console.log(forecastInfo);

    var listDate = [];
    var listTemp = [];
    var listIconCode = [];

    for(i = 0; i < forecastInfo.list.length; ++i) {
        time = forecastInfo.list[i].dt_txt;
        if (time.includes("18:00:00")) {

            //date
            var date = new Date(forecastInfo.list[i].dt * 1000);
            var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var findDate = weekday[date.getDay()] + "<br>" + month[date.getMonth()] + " " + date.getDate();
            listDate.push(findDate);

            //temp
            var temp = forecastInfo.list[i].main.temp_max;
            temp = Math.round(temp);
            listTemp.push(temp);

            //icon
            var iconCode = forecastInfo.list[i].weather["0"].icon;
            var icon_path = "https://openweathermap.org/img/w/" + iconCode + ".png";
            listIconCode.push(icon_path);
        }
        continue;
    }

    //Display forecast date
    document.getElementById('day1').innerHTML = listDate[0];
    document.getElementById('day2').innerHTML = listDate[1];
    document.getElementById('day3').innerHTML = listDate[2];
    document.getElementById('day4').innerHTML = listDate[3];
    document.getElementById('day5').innerHTML = listDate[4];

    //Display weather icon
    document.getElementById('weather_icon1').src = listIconCode[0];
    document.getElementById('weather_icon2').src = listIconCode[1];
    document.getElementById('weather_icon3').src = listIconCode[2];
    document.getElementById('weather_icon4').src = listIconCode[3];
    document.getElementById('weather_icon5').src = listIconCode[4];

    //Display temp
    document.getElementById('highTemp1').innerHTML = listTemp[0];
    document.getElementById('highTemp2').innerHTML = listTemp[1];
    document.getElementById('highTemp3').innerHTML = listTemp[2];
    document.getElementById('highTemp4').innerHTML = listTemp[3];
    document.getElementById('highTemp5').innerHTML = listTemp[4];

}