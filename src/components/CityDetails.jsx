import { useSearchParams } from "react-router-dom"

function CityDetails(){
    //hook per leggere e modificare i parametri della query string (quelli dopo la ? nella URL)
    const [params] = useSearchParams();
    //ASSEGNO LA LATITUIDENE 
    const lat = Number(params.get("lat")); //--> search parameter
    //ASSEGNO LA LONGITUDINE
    const lon = Number(params.get("lon"));//--> search parameter
    return(
        <> 
        <h1>City Details</h1>
        <p>{lat}</p>
        <p>{lon}</p>
        </>
    )
}

export default CityDetails








