import { toggleTheme } from "../../store/themeSlice";
import { useDispatch } from "react-redux";

function DarkMode(){
    const dispatch = useDispatch();
    return(
        <div>
        <img src="icons/dark-mode.png"></img>
        <button type="button" onClick={() => dispatch(toggleTheme())}> Dark</button> 
        </div>
    )
}
export default DarkMode