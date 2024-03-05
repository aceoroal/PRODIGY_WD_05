function get_weather() {
    let api_key = "9b065b0a269c67223e1fbecdf35a8b3e";
    var city = document.getElementById('city_name');
    var city_name = city.value;

    let btn = document.getElementById('btn');
    // let city_name = "Mthatha";

    link = `http://api.openweathermap.org/data/2.5/weather?q=${city_name},5219&limit=1&appid=${api_key}`;


    var request = new XMLHttpRequest();
    request.open('GET', link, true);
    request.onload = function () {
        if (city_name != '') {
            

            var obj = JSON.parse(this.response);
            console.log(obj);

            document.getElementById('weather').innerHTML = obj.weather[0].description;
            document.getElementById('location').innerHTML = obj.name;
            // document.getElementById('temp').innerHTML = (obj.main.temp - 273.15);
            let the_temp = Math.round(obj.main.temp - 273.15) + '&deg;C';
            if (the_temp != '') {
                btn.classList.add('active');
            }
            document.getElementById('temp').innerHTML = Math.round(obj.main.temp - 273.15) + '&deg;C';
            document.getElementById('icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
        }
        else {
            btn.classList.remove('active');
        }
    }

    if (request.status == 200) {
        console.log("ERROR");
        btn.classList.remove('active');
    }
    request.send();
}

function refreshPage() {
    // Reload the current page
    location.reload();
  }

  let copy_right = document.getElementById('copy_right');
var year = new Date();
var current_year = year.getFullYear();

copy_right.innerHTML = '&copy; ' + current_year + ' | Anele Nkayi.'