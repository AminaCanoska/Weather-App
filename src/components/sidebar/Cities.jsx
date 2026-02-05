import { NavLink } from "react-router-dom";
function Cities(){
    return (
        <>
        <NavLink 
        to="CityDetails">
        <img src="icons/hamburger.png" alt="" />
        Cities
        </NavLink>
        </>
    )
}

export default Cities