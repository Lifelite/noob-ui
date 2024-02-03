import {useEffect} from "react";
import {handleStaggerTo} from "../FancyNav/animations.js";
import PropTypes from "prop-types";
import "./style.scss";

export function BasicNav(props) {
    const {
        navItems,
    } = props;

    useEffect(() => {
        handleStaggerTo('.nav__item')
    }, [])


    return (
        <>
            <nav className="basic-nav">
                <ul className="basic-nav-list">
                    {
                        navItems.map((item, index) => (
                            <li key={index} id={`nav-link-${index}`} className="nav__item">
                                <a href={item.link}>
                                    {item.content}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}

BasicNav.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.object)
}