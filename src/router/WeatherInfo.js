import { store } from "../store/store";

export async function WeatherInfo() {
    const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
    let lat, lon;
    const inputValue = store.getState().inputValue;
    /*
    Normalmente sì, usi useSelector per accedere allo stato in componenti React.
    Ma WeatherInfo non è un componente - è una loader function di React Router, che è una funzione asincrona normale (non React).
    Perché non puoi usare useSelector qui:
    
    - Gli hook (come useSelector) funzionano solo dentro componenti React o altri hook.
    - Una loader viene chiamata fuori dal ciclo di render di React, quindi non ha accesso agli hook.
    Quindi usi store.getState():
    - È il metodo diretto per "leggere" lo stato attuale dello store Redux.
    - Non si sottoscrive agli aggiornamenti (non re-renderizza quando cambia).
    - Perfetto per funzioni esterne come loader, middleware, etc.
     */

    try {
        const position = await new Promise((resolve, reject) => {
            if (!navigator.geolocation) reject("Geolocalizzazione non supportata");
            navigator.geolocation.getCurrentPosition(
                (pos) => resolve(pos.coords),
                (err) => reject(err)
            );
        });
        lat = position.latitude;
        lon = position.longitude;
    } catch (err) {
        console.log(err);
        // Gestione del caso di errore (quando la geolocalizzazione non è disponibile)
        const geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=Pordenone&limit=1&appid=${API_KEY}`);
        const geoData = await geoRes.json();
        lat = geoData[0].lat;
        lon = geoData[0].lon;
    }

    if(inputValue && inputValue !== ""){
        try{
            const newPosition = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=${API_KEY}`)
            const newPos = await newPosition.json();
            lat = newPos[0].lat;
            lon = newPos[0].lon;
            console.log("NEWPOSSSS:", newPos);
        }catch(err){
            console.log(err);
        }
    }

    // Fai la fetch per il meteo attuale
    const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const weatherData = await weatherRes.json();

    // Fai la fetch per le previsioni (5 giorni, 3 ore)
    const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
    const forecastData = await forecastRes.json();

    // Restituisci entrambi i dati insieme
    return { weather: weatherData, forecast: forecastData };
}




