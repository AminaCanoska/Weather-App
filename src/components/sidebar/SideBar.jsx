import Weather from "./Weather";
import Cities from "./Cities";
import DarkMode from "./DarkMode";
import "../../scss/SideBar.scss"

function SideBar(){
    return (
        <>
        <section className="side-bar">
        <Weather/>
        <Cities/>
        <DarkMode/>
        </section>
        </>
    )
}

export default SideBar