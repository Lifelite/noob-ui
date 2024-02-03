import {useRef, useEffect} from "react";
import {gsap} from "gsap";
import {Link} from "react-router-dom";
import "./NavBar.scss"

import {
    staggerText,
    staggerReveal,
    fadeInUp,
    handleHover,
    handleHoverExit,
    handleOptionReturn,
    handleOption,
    staggerRevealClose
} from "./animations.js";

import blog from "../../../images/blog.jpeg";
import linkedin from "../../../images/linkedin.jpeg";
import github from "../../../images/github.jpeg";
import partytime from "../../../images/partytime.jpeg";
import admin from "../../../images/admin.webp";
import PropTypes from "prop-types";

const other = [
    {name: "Blog", image: blog, url: "/blog"},
    {name: "LinkedIn", image: linkedin, url: "https://www.linkedin.com/in/jeremyhuntsman/"},
    {name: "GitHub", image: github, url: "https://github.com/lifelite"},
    {name: "Random Tool!", image: partytime, url: "/y2k-texting-translator"},
    {name: "Admin", image: admin, url: "/admin"}
];

const Hamburger = (props) => {
    const {
        state
    } = props


    // Create variables of dom nodes
    let menuLayer = useRef(null);
    let reveal1 = useRef(null);
    let reveal2 = useRef(null);
    let optionBackground = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let info = useRef(null);

    useEffect(() => {
        // If the menu is open, and we click the menu button to close it.
        if (state.clicked === false) {
            // If menu is closed, and we want to open it.

            staggerRevealClose(reveal2, reveal1);
            // Set menu to display none
            gsap.to(menuLayer, {duration: 1, css: {display: "none"}});
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            // Set menu to display block
            gsap.to(menuLayer, {duration: 0, css: {display: "block"}});
            //Allow menu to have height of 100%
            gsap.to([reveal1, reveal2], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            staggerReveal(reveal1, reveal2);
            fadeInUp(info);
            staggerText(line1, line2, line3);
        }
    }, [state]);

    return (
        <div ref={el => (menuLayer = el)} className='hamburger-menu'>
            <div
                ref={el => (reveal1 = el)}
                className='menu-secondary-background-color'></div>
            <div ref={el => (reveal2 = el)} className='menu-layer'>
                <div
                    ref={el => (optionBackground = el)}
                    className='menu-option-background'></div>
                <div className='nav_container'>
                    <div className='nav_wrapper'>
                        <div className='menu-links'>
                            <nav>
                                <ul className="menu-links-list">
                                    <li className="menu-links-list-item">
                                        <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line1 = el)}
                                            to='/professional'>
                                            Professional
                                        </Link>
                                    </li>
                                    <li className="menu-links-list-item">
                                        <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line2 = el)}
                                            to='/personal'>
                                            Personal
                                        </Link>
                                    </li>
                                    <li className="menu-links-list-item">
                                        <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line3 = el)}
                                            to='/contact-me'>
                                            Contact me
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div ref={el => (info = el)} className='info'>
                                <h3>About this site...</h3>
                                <p>
                                    While this site is partially to showcase my skillset, it&#39;s also my playground.
                                    It will be continuously updated and improved from what you see today.  Some call it
                                    &#34;scope-creep&#34;, I prefer to call it &#34;being Agile&#34;.
                                    Any &#34;bugs&#34; found on this website are actually features, obviously.
                                </p>
                            </div>
                            <div className='options'>
                                Other Links:
                                {other.map(el => (
                                    <Link
                                        className="options-item"
                                        to={el.url}
                                        key={el.name}
                                        onMouseEnter={() => handleOption(el.image, optionBackground)}
                                        onMouseOut={() => handleOptionReturn(optionBackground)}>
                                        {el.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Hamburger.propTypes = {
    state: PropTypes.any
}

export default Hamburger;