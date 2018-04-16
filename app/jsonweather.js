$(document).ready(function() {
    var lat;
    var long;
    //show weather
    showWeather();
  
    //get user location
    function showWeather() {
      var ipApi = "http://ip-api.com/json";
  
      //geting location data using ip-api
      $.getJSON(ipApi, function(json) {
        
        lat = json.lat;
        long = json.lon;
        
        //geting weather data using weather-api
        var weatherApi = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=ab942a3cfd636ab43addb4fb159c7d7a';
        $.getJSON(weatherApi, function(json) {
          console.log(json);
          //convert Kelvin default into farenheit and celcius
          var ktemp = json.main.temp;
          var ctemp = (ktemp - 273).toFixed(2);
          var ftemp = (ctemp * 9 / 5 + 32).toFixed(2);
          var mainWea = json.weather[0].main;
          //converting json to html
          var html = "";
          html += "<p><span>" + json.name + "</span>," + json.sys.country + "</p>";
          html += "<p>" + mainWea + "</p>";
          $("#wInfo").html(html);
          var tempid = $("#temp");
          tempid.html(ctemp + " &degC");
          //toggle temp unit
          var tcheck = false;
          tempid.click(function() {
            if (tcheck === false) {
              tempid.html(ftemp + " &degF");
              tcheck = true;
            } else {
              tempid.html(ctemp + " &degC");
              tcheck = false;
            }
          });
  

          //change icon according to weather
          var iconDiv = $(".icon");
  
          switch (mainWea) {
            case "Rain":
              iconDiv.toggleClass('rain');
              break;
  
            case "Clouds":
              iconDiv.toggleClass('cloud');
              break;
            case "Clear":
              iconDiv.toggleClass('clear');
              break;
            default:
              iconDiv.toggleClass('clear');
          }
  
        }); //getJSON weather-api function
      }); //getJSON ip-api function 
  
    }
  
  }); //document ready