const main = document.getElementById('main');
const btnSearch = document.getElementById('btnSearch');
const img = document.getElementById('img')
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const max = document.getElementById('max');
const min = document.getElementById('min');
const description = document.getElementById('description');



//Funciones
function initApp() {
    console.log('OK')
    const urlAPI = urlConstructor('Santiago');
    fetchDataApi(urlAPI);
}


const fetchDataApi = async url => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    fillData(data);
}

const urlConstructor = ciudad => API = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=d50760e90e3d3bf52286d69202bee032`;

const fillData = weather => {
    img.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;
    cityName.textContent = weather.name;
    temperature.textContent = `${Math.round(weather.main.temp)}°`;
    max.textContent = `T° max: ${Math.round(weather.main.temp_max)}`;
    min.textContent = `T° min: ${Math.round(weather.main.temp_min)}`;
    description.textContent = weather.weather[0].description.toUpperCase();
    checkWeather(weather.weather[0].main);
}

// Busqueda manual
const searchWeather = (e) => {
    e.preventDefault();
    const inputCity = document.getElementById("inputCity");
    const newSearch = urlConstructor(inputCity.value);
    fetchDataApi(newSearch);
}

//Comprobar clima para background
const checkWeather = condition => {
    const weatherConditions = [
        {
            condition: 'Thunderstorm',
            img: 'http://imgfz.com/i/sHhVGvm.jpeg'
        },
        {
            condition: 'Drizzle',
            img: 'http://imgfz.com/i/aQDtExJ.jpeg'
        },
        {
            condition: 'Rain',
            img: 'http://imgfz.com/i/bc5HesR.jpeg'
        },
        {
            condition: 'Snow',
            img: 'http://imgfz.com/i/p5NecrJ.jpeg'
        },
        {
            condition: 'Clear',
            // img: 'http://imgfz.com/i/6ymVf9Q.jpeg'
            img: 'http://imgfz.com/i/FKjtwgH.jpeg'
        },
        {
            condition: 'Clouds',
            img: 'http://imgfz.com/i/yixtkWG.jpeg'
        }
    ]
    weatherConditions.forEach( element => {
        if(element.condition === condition){
            main.setAttribute('style', `background-image : url("${element.img}")`);
            // main.setAttribute('style', `background-position : 100%`)
        }
    } )
}

initApp();
btnSearch.addEventListener('click', searchWeather);