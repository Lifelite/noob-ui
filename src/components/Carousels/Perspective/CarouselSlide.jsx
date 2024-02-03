import cx from "classnames";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

export function CarouselSlide(props) {
    const {
        cardTitle,
        likes,
        id,
        slideNumber,
        image,
        imageAlt,
        likeAction,
        currentSlide,
    } = props

    const [slideState, setSlideState] = useState('proactivede')
    const [heartClicked, setHeartClicked] = useState(false)


    useEffect(() => {

        switch (currentSlide) {
            case slideNumber: {
                setSlideState('active')
                break
            }
            case (slideNumber - 1): {
                setSlideState('proactive')
                break
            }
            case (slideNumber + 1): {
                setSlideState('preactive')
                break
            }
            default: {
                if (slideNumber > currentSlide) {
                    setSlideState('preactivede')
                    break
                }
                if (slideNumber < currentSlide) {
                    setSlideState('proactivede')
                    break
                }
            }
        }

    }, [currentSlide])

    const onHeartClick = () => {
        if (heartClicked) {
            setHeartClicked(false)
            {
                likeAction()
            }
        } else if (!heartClicked) {
            setHeartClicked(true)
            {
                likeAction()
            }
        }
    }

    const heart = (heartClicked) ? <>&#9829;</> : <>&#9825;</>

    return (
        <>
            <div id={id} className={cx("slider-single", slideState)}>
                <img className="slider-single-image" src={image} alt={imageAlt}/>
                <h1 className="slider-single-title">{cardTitle}</h1>
                <a className="slider-single-likes" onClick={onHeartClick}>
                    <i>
                        {heart}
                    </i>
                    <p>{likes}</p>
                </a>
            </div>
        </>
    )
}

CarouselSlide.propTypes = {
    cardTitle: PropTypes.string,
    likes: PropTypes.number,
    id: PropTypes.string,
    slideNumber: PropTypes.number,
    image: PropTypes.node,
    imageAlt: PropTypes.string,
    likeAction: PropTypes.any,
    currentSlide: PropTypes.number,
}