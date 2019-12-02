const button = document.querySelector('button');
const city = document.querySelector('#city');
const icon = document.querySelector('#icon');
const temp = document.querySelector('#temp');
const desc = document.querySelector('#desc');
let lang;

city.innerText = 'Please enable to acces your location or search for a city name!';
icon.style.display = "none";
temp.style.display = "none";
desc.style.display = "none";


if (navigator.language === 'hu-HU') {
    lang = 'hu';
    document.querySelector('input').setAttribute('placeholder', 'Írd be egy város nevét!');
    document.querySelector('button').innerText = 'Keresés';
    city.innerText = 'Engedélyezz hozzáférést a tartózkodási helyedhez vagy keress egy város neve alapján!';
} else {
    lang = 'en';
}

   function() => { navigator.geolocation.getCurrentPosition(position => {
        let lon = position.coords.longitude;
        let lat = position.coords.latitude;

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var weather = JSON.parse(xhr.responseText);

                console.log(weather)

                city.innerText = weather.name;
                temp.innerText = weather.main.temp + ' °C';
                desc.innerText = weather.weather[0].description;

                icon.style.display = "initial";
                temp.style.display = "initial";
                desc.style.display = "initial";



                if (weather.weather[0].icon === '01d') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/01d@2x.png");
                } else if (weather.weather[0].icon === '01n') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/01n@2x.png");
                } else if (weather.weather[0].icon === '02d') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/02d@2x.png");
                } else if (weather.weather[0].icon === '02n') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/02n@2x.png");
                } else if (weather.weather[0].icon === '03d') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/03d@2x.png");
                } else if (weather.weather[0].icon === '03n') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/03n@2x.png");
                } else if (weather.weather[0].icon === '04d') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/04d@2x.png");
                } else if (weather.weather[0].icon === '04n') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/04n@2x.png");
                } else if (weather.weather[0].icon === '09d') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/09d@2x.png");
                } else if (weather.weather[0].icon === '09n') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/09n@2x.png");
                } else if (weather.weather[0].icon === '10d') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/10d@2x.png");
                } else if (weather.weather[0].icon === '10n') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/10n@2x.png");
                } else if (weather.weather[0].icon === '11d') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/11d@2x.png");
                } else if (weather.weather[0].icon === '11n') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/11n@2x.png");
                } else if (weather.weather[0].icon === '13d') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/13d@2x.png");
                } else if (weather.weather[0].icon === '13n') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/13n@2x.png");
                } else if (weather.weather[0].icon === '50d') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/50d@2x.png");
                } else if (weather.weather[0].icon === '50n') {
                    icon.setAttribute("src", "http://openweathermap.org/img/wn/50n@2x.png");
                }
            }
        };

        xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=7acc8d6ed18a854281620e6f354390a6' + '&units=metric' + '&lang=' + lang);
        xhr.send();
    })
  };

    function (error) {
        if (error.code == error.PERMISSION_DENIED) {
            if (navigator.language === 'hu-HU') {
                city.innerText = 'Engedélyezz hozzáférést a tartózkodási helyedhez vagy keress egy város neve alapján!';
            } else {
                city.innerText = 'Please enable to acces your location or search for a city name!';
            }
            icon.style.display = "none";
            temp.style.display = "none";
            desc.style.display = "none";
        }
    });


button.addEventListener('click', () => {
    let input = document.querySelector('input').value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var weather = JSON.parse(xhr.responseText);

            console.log(weather)


            city.innerText = weather.name;
            temp.innerText = weather.main.temp + ' °C';
            desc.innerText = weather.weather[0].description;

            icon.style.display = "initial";
            temp.style.display = "initial";
            desc.style.display = "initial";



            if (weather.weather[0].icon === '01d') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/01d@2x.png");
            } else if (weather.weather[0].icon === '01n') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/01n@2x.png");
            } else if (weather.weather[0].icon === '02d') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/02d@2x.png");
            } else if (weather.weather[0].icon === '02n') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/02n@2x.png");
            } else if (weather.weather[0].icon === '03d') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/03d@2x.png");
            } else if (weather.weather[0].icon === '03n') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/03n@2x.png");
            } else if (weather.weather[0].icon === '04d') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/04d@2x.png");
            } else if (weather.weather[0].icon === '04n') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/04n@2x.png");
            } else if (weather.weather[0].icon === '09d') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/09d@2x.png");
            } else if (weather.weather[0].icon === '09n') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/09n@2x.png");
            } else if (weather.weather[0].icon === '10d') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/10d@2x.png");
            } else if (weather.weather[0].icon === '10n') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/10n@2x.png");
            } else if (weather.weather[0].icon === '11d') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/11d@2x.png");
            } else if (weather.weather[0].icon === '11n') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/11n@2x.png");
            } else if (weather.weather[0].icon === '13d') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/13d@2x.png");
            } else if (weather.weather[0].icon === '13n') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/13n@2x.png");
            } else if (weather.weather[0].icon === '50d') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/50d@2x.png");
            } else if (weather.weather[0].icon === '50n') {
                icon.setAttribute("src", "http://openweathermap.org/img/wn/50n@2x.png");
            }
        }
    };
    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + input + '&units=metric' + '&APPID=7acc8d6ed18a854281620e6f354390a6' + '&lang=' + lang);
    xhr.send();
});



