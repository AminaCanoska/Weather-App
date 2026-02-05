import "../scss/Header.scss"
import { useDispatch } from "react-redux";
import { setInputValue } from "../store/InputValueSlice";
import { useNavigate } from "react-router-dom";

function Header(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInput = (e) => {
         if (e.key === "Enter") {
            const input = e.target.value;
            dispatch(setInputValue(input));
            console.log(input)
            navigate(`/?key=${input}`, {replace: true}) //riassegna loader alla route corrente 
        }
    }

    return (
        <>
        <nav className="nav-bar">
        <h3>SKYVIEW</h3>
        <input type="search" placeholder="Search for a city or location..." onKeyDown={handleInput}></input>

        </nav>
        </>
    )
}

export default Header


/*
Perché useEffect nel Header non andava bene?
useEffect è un hook che può essere chiamato solo nel corpo del componente (dove ci sono gli altri hook come useState, useDispatch).

Se lo metti dentro handleInput (un event handler), React dà errore perché viola le Rules of Hooks. Gli hook devono essere chiamati sempre allo stesso livello, non dentro funzioni, loop o condizioni.
Per dispatchare, basta chiamare dispatch(setInputValue(input)) direttamente nell'event handler - non serve useEffect.
 */