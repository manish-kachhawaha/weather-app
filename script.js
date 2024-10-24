const newLocation = document.getElementById('current-location');
const date = document.getElementById('current-date');
const temprature = document.getElementById('temprature-count');
const weatherType = document.getElementById('weather-type');


    


async function getWeatherData(city){
    
    const apiKey = "c87b7d9a3572acff4d9928849c51f2eb";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

const updateWeather =(thisCity)=>{
    getWeatherData(thisCity).then(data=>{
        newLocation.innerText = `${data.name} , ${data.sys.country}`
        // console.log(`${data.name} , ${data.sys.country}`)
        
        timestamp = data.dt;
        date.innerText = new Date(timestamp*1000).toDateString();
    
        temprature.innerText = data.main.temp;
    
        weatherType.innerText = data.weather[0].main;
    
    })
}



const searchWeather=()=>{
    let searchedCity;
    const locationInput = document.getElementById('location-input');
    locationInput.addEventListener("keydown", (event)=>{
    if(event.key==="Enter"){
        searchedCity = locationInput.value;
        console.log(searchedCity)
        if(searchedCity=='') searchedCity = "new delhi";
        updateWeather(searchedCity);
        locationInput.value='';
    }
})
}

updateWeather("new delhi");
searchWeather();