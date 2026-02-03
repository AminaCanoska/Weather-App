export async function WeatherInfo() {
    const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
    let lat, lon;

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

    // Fai la fetch per il meteo attuale
    const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const weatherData = await weatherRes.json();

    // Fai la fetch per le previsioni (5 giorni, 3 ore)
    const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
    const forecastData = await forecastRes.json();

    // Restituisci entrambi i dati insieme
    return { weather: weatherData, forecast: forecastData };
}




