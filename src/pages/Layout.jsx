import Header from "../components/Header";
import SideBar from "../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import "../scss/DarkTheme.scss"
import "../scss/main.scss"

   //TODO: INVECE DI INSERIRE LE classi "is-dark" e "settled" 

function Layout(){
    const isDark = useSelector(state => state.theme.isDark);

    return (
        <> 
        <div className={isDark ? "is-dark" : "settled"}>
        <Header/>
        <SideBar/>
        <Outlet/>
        </div>
        </>
    )
}

export default Layout