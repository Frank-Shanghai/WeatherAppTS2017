define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OpenWeatherAppKey = "e5a5b82f4ad41f1978ed64d3e580efbd";
    function getWeatherWithZipCode() {
        var zipcode = $('#zip-code-input').val();
        var queryString = 'http://api.openweathermap.org/data/2.5/weather?zip='
            + zipcode + ',us&appid=' + OpenWeatherAppKey + '&units=imperial';
        $.getJSON(queryString, function (results) {
            showWeatherData(results);
        }).fail(function (jqXHR) {
            $('#error-msg').show();
            $('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
        });
        return false;
    }
    exports.getWeatherWithZipCode = getWeatherWithZipCode;
    function showWeatherData(results) {
        if (results.weather.length) {
            $('#error-msg').hide();
            $('#weather-data').show();
            $('#title').text(results.name);
            $('#temperature').text(results.main.temp);
            $('#wind').text(results.wind.speed);
            $('#humidity').text(results.main.humidity);
            $('#visibility').text(results.weather[0].main);
            var sunriseDate = new Date(results.sys.sunrise * 1000);
            $('#sunrise').text(sunriseDate.toLocaleTimeString());
            var sunsetDate = new Date(results.sys.sunset * 1000);
            $('#sunset').text(sunsetDate.toLocaleTimeString());
        }
        else {
            $('#weather-data').hide();
            $('#error-msg').show();
            $('#error-msg').text("Error retrieving data. ");
        }
    }
});
//# sourceMappingURL=weather.js.map