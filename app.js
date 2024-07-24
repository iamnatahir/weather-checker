const url="https://api.openweathermap.org/data/2.5/weather?&appid=0b99dbbaa3708915cf85c450dac7bd50&units=metric&q=";

let btn=document.querySelector(".search button");
let search=document.querySelector(".search input");
let imgIcon=document.querySelector(".weather-image")
async function checkweather(name){
    const response=await fetch(url+name);
    const data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=Math.floor(data.main.temp)+"°C";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h"+"<br>Wind Speed";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%"+"<br>Humidity";


    if(data.weather[0].main=="Clouds"){
        imgIcon.src="images/clouds.png";
    }else if(data.weather[0].main=="Clear"){
        imgIcon.src="images/clear.png";
    }else if(data.weather[0].main=="Drizzle"){
        imgIcon.src="images/drizzle.png";
    }else if(data.weather[0].main=="Mist"){
        imgIcon.src="images/mist.png";
    }else if(data.weather[0].main=="Rain"){
        imgIcon.src="images/rain.png";
    }else if(data.weather[0].main=="Snow"){
        imgIcon.src="images/snow.png";
    }
}
btn.addEventListener("click",()=>{
    checkweather(search.value);
});


