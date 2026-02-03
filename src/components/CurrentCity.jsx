import "../scss/CurrentCity.scss";
import { useLoaderData } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCity } from "../store/CurrentCitySlice";

function CurrentCity(){
   const dispatch = useDispatch();
   const weatherData = useLoaderData();
   console.log("weatherData:", weatherData);
   
    const {
    name,
    temp,
    feelsLike,
    minTemp,
    maxTemp,
    description,
    icon,

  } = useSelector((state) => state.currentCity);
  
  useEffect(() => {
    if(weatherData){
        dispatch(setCity({
            name: weatherData.weather.name,
            lat: weatherData.weather.coord.lat,
            lon: weatherData.weather.coord.lon,
            temp : weatherData.weather.main.temp,
            feelsLike: weatherData?.weather?.main?.feels_like,
            minTemp: weatherData.weather.main.temp_min,
            maxTemp: weatherData.weather.main.temp_max,
            humidity: weatherData.weather.main.humidity,
            wind: weatherData.weather.wind,
            description: weatherData.weather.weather[0].description,
            icon: weatherData.weather.weather[0].icon
        }));
    }
  }, [weatherData, dispatch]); 
   

     return (
         <section className="current-city"> 
         <div className="current-city-details">
         <h1>{name}</h1>
         <p>Temperature: {Math.round(temp)}°C</p>
         <p>Feels like: {Math.round(feelsLike)}°C</p>
         <p>MIN: {minTemp}°C</p>
         <p>MAX: {maxTemp}°C</p>   
      
        </div>
        <div>
            {icon && description && (
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
                )} 

        </div>
        </section>
    )
}

export default CurrentCity 