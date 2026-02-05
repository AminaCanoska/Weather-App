import "../scss/AirConditions.scss"
import "../scss/TodayForcast.scss";
import {useSelector} from "react-redux";


function AirConditions(){
    const {
          humidity,
          wind,

  } = useSelector((state) => state.currentCity);

    return (
        <section className="air-conditions">
        <h1>AIR CONDITIONS</h1>
        <p>Humidity: {humidity}</p>
        <p>Wind Speed: {wind?.speed} m/s</p>
        
        
        </section>
    )
}

export default AirConditions