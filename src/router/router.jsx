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
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {index: true, element: <Home/>, loader: WeatherInfo},
            {path: "CityDetails", element: <CityDetails/>},
        ],
    },
    {
        path: "*", element: <NotFound/>
    }
])

export default router