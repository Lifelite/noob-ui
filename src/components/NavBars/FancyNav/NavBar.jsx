import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger.jsx";
import "./NavBar.scss"

const NavBar = () => {

    // State of our Menu
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
    });
    // State of our button
    const [disabled, setDisabled] = useState(false);

    //Use Effect
    // useEffect(() => {
    //     //Listening for page changes.
    //     history.listen(() => {
    //         setState({ clicked: false, menuName: "Menu" });
    //     });
    // }, [location]);

    // Toggle menu
    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            });
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            });
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            });
        }
    };

    //Determine if out menu button should be disabled
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    };

    return (
        <header>
            <div className="nav_container">
                <div className="nav_wrapper">
                    <div className="inner-header">

                        <div className="menu">
                            <button disabled={disabled} onClick={handleMenu}>
                                {state.menuName}
                            </button>
                        </div>
                        <div className="logo">
                            <Link to="/">JH</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Hamburger state={state}/>
        </header>
    );
};

// NavBar.propTypes = {
//     history: PropTypes.object.isRequired
// }

export default NavBar;