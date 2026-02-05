import { createBrowserRouter} from 'react-router-dom';
import Error from "../components/errorManagement/Error"
import Home from "../components/Home";
import CityDetails from "../components/CityDetails";
import NotFound from "../components/errorManagement/NotFound"
import {WeatherInfo} from "./WeatherInfo"
import Layout from '../pages/Layout';

const router = createBrowserRouter([
    {
        path:"/",
        id: "root",
        element: <Layout/>,
        errorElement: <Error/>,
        loader: WeatherInfo,
        children: [
            {index: true, element: <Home/>},
            {path: "CityDetails", element: <CityDetails/>},
        ],
    },
    {
        path: "*", element: <NotFound/>
    }
])

export default router

/*
1️⃣ Le route sono un albero

Non è solo “navigazione”: è una gerarchia.
Ogni nodo dell’albero può avere un loader

il loader appartiene alla route
non ai componenti React

👉 questa è la chiave che sblocca tutto
Il loader gira prima del render

Quando cambi pagina:
React Router decide quali route servono
esegue i loader di quelle route
poi renderizza i componenti con i dati pronti

Per questo a volte “sembra asincrono ma poi va”.
I dati non “scendono” automaticamente

Il loader del layout:
non passa props
non propaga dati
Ogni componente deve chiedere esplicitamente:

useLoaderData() → il mio loader
useRouteLoaderData(id) → loader di un padre

Il modello corretto (prima ancora del codice)

Quando usi React Router con i loader, devi pensare così:
Ogni route rappresenta una “pagina logica”
e il suo loader fornisce i dati necessari a quella pagina.
Non ai componenti.
Alla route.
Prima decidi chi è il proprietario dei dati

Domanda fondamentale:

👉 Chi “possiede” quei dati?

Nel tuo caso:

i dati meteo servono a più pagine
non sono specifici di Home o CityDetails
quindi appartengono al layout

Conclusione naturale:
➡️ loader sul layout

Il layout: cosa DEVE e cosa NON DEVE fare
✔️ Cosa fa il layout
definisce la struttura (header, footer, outlet)
può usare i dati
ma non è obbligato

Come un figlio ottiene i dati (logica corretta)

Un figlio non riceve props
Un figlio non eredita dati

Un figlio chiede i dati alla route padre con: const weather = useRouteLoaderData("root");


Perché questa logica è potente

Con questo approccio ottieni:

🔁 1 fetch solo, anche cambiando pagina
📦 dati condivisi in modo esplicito
🧩 nessun prop drilling
🧠 codice leggibile: sai sempre da dove arrivano i dati
*/