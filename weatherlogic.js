document.addEventListener('DOMContentLoaded', function () {
    const weathercard1 = document.getElementById('cityweathercard1');
    const weathercard2 = document.getElementById('cityweathercard2');
    const cityname = document.getElementById('cityin');


const options = {
    method: 'GET',
    headers: {

    'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'

    }

};
    
const getweather = (city)=>{
    cityname.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then (response => response.json())
    .then ((response) => {
        console.log(response)

        // The fetch function is called with the URL and options.
        // The first .then() block is used to process the response. It takes the response object and converts its body to JSON using .json().
        // The second .then() block takes the parsed JSON data as response and executes a callback function.
        // Inside this callback function, the code logs the response to the console. Typically, this is where you would handle and use the retrieved data, such as updating HTML elements with weather information.

        // Update the IDs below to match your HTML
        const feels_like = document.getElementById('feels_like');
        const humidity = document.getElementById('humidity');
        const max_temp = document.getElementById('max_temp');
        const min_temp = document.getElementById('min_temp');
        const sunrise = document.getElementById('sunrise');
        const sunset = document.getElementById('sunset');
        const temp = document.getElementById('temp');
        const wind_degrees = document.getElementById('wind_degrees');
        const wind_speed = document.getElementById('wind_speed');

        // Update the innerHTML of the elements
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        max_temp.innerHTML = response.max_temp;
        min_temp.innerHTML = response.min_temp;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
        temp.innerHTML = response.temp;
        wind_degrees.innerHTML = response.wind_degrees;
        wind_speed.innerHTML = response.wind_speed;

    })
    .catch(err => console.error(err));

}

const cityin = document.getElementById('cityin');
const submitbtn = this.getElementById('.submit');

submit.addEventListener("click", (e)=>{
    getweather(cityin.value)
});

});


// The options object is configured with the method 'GET' and headers including the API key and host.
// When the fetch function is called to make a request to the specified API endpoint, it includes these headers. This is a standard way of passing necessary information for authentication and specifying the target server.

// In summary, API keys and hosts are essential components in making authenticated and authorized requests to APIs, allowing applications to securely interact with external services. 