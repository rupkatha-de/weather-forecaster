//api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
//ad5b95fa08cc13a16e21332b58d680b1
//"https://openweathermap.org/img/wn/"+icon+".png"

let weather = {
    apikey: "ad5b95fa08cc13a16e21332b58d680b1",
    fetchWeather: async function (city) {
        await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apikey
        ).then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        console.log(data);
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temperature").innerText = temp+"°C";
        document.querySelector(".humidity").innerText = "Humidity: "+humidity+"%";
        document.querySelector(".speed").innerText = "Wind Speed: "+speed+" km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+name+"')";
    },
    search: function () {
        let city = document.querySelector(".search-bar").value;
        this.fetchWeather(city);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".search").addEventListener("click", function () {
        weather.search();
    });
    
    addEventListener("keypress", (event) => {
        if (event.key == "Enter") {
            weather.search();
        }
    });
    
    
    weather.fetchWeather("London");
});
