import "../scss/TodayForcast.scss";
import { useRouteLoaderData } from "react-router-dom";


function TodayForcast(){
    let { forecast } = useRouteLoaderData("root");

    const todayForecasts = forecast?.list?.slice(0, 8) || [];

    return (
        <section className="today-forecast"> 
        <h5>TODAY FORCAST</h5>
        {todayForecasts.map((item, index) => (
            <div key={index}>
                <p>Time: {item.dt_txt}</p>
                <div>
                    <img 
                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} 
                        alt={item.weather[0].description} 
                    />
                </div>
                <p>Temperature: {Math.round(item.main.temp)}°C</p>
            </div>
        ))}
        </section>
    )
}


export default TodayForcast