import {useEffect} from "react";
import {handleEaseIn, handleFadeIn, handleStaggerIn} from "../../NavBars/FancyNav/animations.js";
import PropTypes from "prop-types";
import "../../../pages/Personal/Personal.scss";

export function BoxesHero(props) {
    const {
        heroImage,
        title,
        subtitle,
        imageAlt,
    } = props;

    useEffect(()=>{
        handleFadeIn('.personal-hero-title')
        handleStaggerIn('.boxes__box')
        handleEaseIn('.boxes__image')
    },[])


    return (
        <>
            <div className="personal-hero">
                <div className="personal-hero__item">
                    <h1 className="personal-hero-title">{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
                <div className="personal-hero__item">

                    <div className="boxes">
                        <div><img className="boxes__image" src={heroImage} alt={imageAlt}/></div>
                        <div className="boxes__box"></div>
                        <div className="boxes__box"></div>
                        <div className="boxes__box"></div>
                        <div className="boxes__box"></div>
                        <div className="boxes__box"></div>
                        <div className="boxes__box"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

BoxesHero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    heroImage: PropTypes.node,
    imageAlt: PropTypes.string,
}