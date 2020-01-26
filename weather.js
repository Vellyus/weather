const button = document.querySelector('button');
const city = document.querySelector('#city');
const icon = document.querySelector('#icon');
const temp = document.querySelector('#temp');
const desc = document.querySelector('#desc');
let lang;
const clockDiv = document.querySelector('.clock');
let myTimer; // var for the interval reset
let day;
let dayDiv = document.querySelector('.day');
let weather;

function getTime() {
    function pad(number) {
        if (number < 10) {
            return '0' + number;
        } else {
            return number;
        }
    }

    let now = new Date;
    day = now.getUTCDay();

    function getHH() {
        if (now.getUTCHours() + weather.timezone / 3600 > 24) {
            day += 1;

            return now.getUTCHours() + weather.timezone / 3600 - 24;
        } else if (now.getUTCHours() + weather.timezone / 3600 < 0) {
            day -= 1;

            return now.getUTCHours() + weather.timezone / 3600 + 24;
        } else { return now.getUTCHours() + weather.timezone / 3600 }
    }

    let hh = getHH();
    let mm = now.getUTCMinutes();
    let ss = now.getUTCSeconds();

    if (Number.isInteger((hh - 0.5))) {
        hh -= 0.5;
        mm += 30;
        if (mm > 60) {
            mm -= 60;
            hh += 1;
        }
    }
    hh = pad(hh);
    mm = pad(mm);
    ss = pad(ss);

    if (lang === 'hu') {
        if (day === 1) {
            day = 'Hétfő';
        } else if (day === 2) {
            day = 'Kedd';
        } else if (day === 3) {
            day = 'Szerda';
        } else if (day === 4) {
            day = 'Csütörtök';
        } else if (day === 5) {
            day = 'Péntek';
        } else if (day === 6) {
            day = 'Szombat';
        } else {
            day = 'Vasárnap';
        }
    } else {
        if (day === 1) {
            day = 'Monday';
        } else if (day === 2) {
            day = 'Tuesday';
        } else if (day === 3) {
            day = 'Wednesday';
        } else if (day === 4) {
            day = 'Thursday';
        } else if (day === 5) {
            day = 'Friday';
        } else if (day === 6) {
            day = 'Saturday';
        } else {
            day = 'Sunday';
        }
    }

    dayDiv.textContent = day;

    return `${hh}:${mm}:${ss}`;
}

function displayIcon() {
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

// Ask user to enable geolocation
city.innerText = 'Please enable to acces your location or search for a city name!';
icon.style.display = "none";
temp.style.display = "none";
desc.style.display = "none";

// Set language
if (navigator.language === 'hu') {
    lang = 'hu';
    document.querySelector('input').setAttribute('placeholder', 'Írd be egy város nevét!');
    document.querySelector('button').innerText = 'Keresés';
    city.innerText = 'Engedélyezz hozzáférést a tartózkodási helyedhez vagy keress egy város neve alapján!';
} else {
    lang = 'en';
}

// XHR by geolocation
navigator.geolocation.getCurrentPosition(function (position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            weather = JSON.parse(xhr.responseText);

            function tickClock() {
                clockDiv.textContent = getTime();
            }

            myTimer = setInterval(tickClock, 1000);

            // Display results
            city.innerText = weather.name;
            temp.innerText = weather.main.temp + ' °C';
            desc.innerText = weather.weather[0].description;

            icon.style.display = "initial";
            temp.style.display = "initial";
            desc.style.display = "initial";

            // Display Icon
            displayIcon();
        }
    };

    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=7acc8d6ed18a854281620e6f354390a6' + '&units=metric' + '&lang=' + lang);
    xhr.send();
},

    // If user disabled geolocation
    function (error) {
        if (error.code == error.PERMISSION_DENIED) {
            if (navigator.language === 'hu') {
                city.innerText = 'Engedélyezz hozzáférést a tartózkodási helyedhez vagy keress egy város neve alapján!';
            } else {
                city.innerText = 'Please enable to acces your location or search for a city name!';
            }
            icon.style.display = "none";
            temp.style.display = "none";
            desc.style.display = "none";
        }
    });

// Search button
button.addEventListener('click', () => {
    if (clockDiv.textContent !== '') {
        clearInterval(myTimer);
    }

    let input = document.querySelector('input').value;
    // XHR by search
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            weather = JSON.parse(xhr.responseText);

            function tickClock() {
                clockDiv.textContent = getTime();
            }

            myTimer = setInterval(tickClock, 1000);

            // Display results
            city.innerText = weather.name;
            temp.innerText = weather.main.temp + ' °C';
            desc.innerText = weather.weather[0].description;

            icon.style.display = "initial";
            temp.style.display = "initial";
            desc.style.display = "initial";

            // Display Icon
            displayIcon();
        }
    };
    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + input + '&units=metric' + '&APPID=7acc8d6ed18a854281620e6f354390a6' + '&lang=' + lang);
    xhr.send();
}
);





