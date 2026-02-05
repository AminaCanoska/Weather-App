import CityForcast from "./CityForcast";
import TodayForcast from "./TodayForcast";
import AirConditions from "./AirConditions";
import WeeklyForcast from "./WeeklyForcast";

function Home(){
    return (
        <>
        <CityForcast/>
        <TodayForcast/>
        <AirConditions/>
        <WeeklyForcast/>
        </>
    )
}

export default Home 