import CurrentCity from "./CurrentCity";


function CityForcast(){

    const city = {
        name: "San Francisco",
        date: "01/01/2026",
        temperature: 33, 
        condition: "Windy"
    }
  
    return (
        <CurrentCity city={city}/>
    )
}

export default CityForcast