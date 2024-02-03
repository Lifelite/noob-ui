import {Children, useState} from "react";
import {CarouselBullets} from "./CarouselBullets.jsx";
import {CarouselSlide} from "./CarouselSlide.jsx";
import {CarouselArrows} from "./CarouselArrows.jsx";
import PropTypes from "prop-types";
import "./style.scss"

export function PerspectiveCarousel(props) {
    const {
        children,
        showArrows,
        showBullets,
        repeat,
    } = props;

    const [currentSlide, setCurrentSlide] = useState(0)

    const bulletCall = (e) => {
        const bulletNumber = e.target.id.slice(16)
        setCurrentSlide(parseInt(bulletNumber))
    }

    let childArray = []
    if (showBullets) {

        Children.forEach(children, (child) => {
            childArray.push(child.id)
        })
    }

    const handleSlideArrow = (e) => {
        if (e.target.className === "slider-left") {
            if (repeat) {
                if (currentSlide === 0) {
                    setCurrentSlide(childArray.length - 1)
                } else {
                    setCurrentSlide(currentSlide - 1)
                }
            } else {
                setCurrentSlide(currentSlide - 1)
            }
        }
        if (e.target.className === "slider-right") {
            if (repeat) {
                if (currentSlide === (childArray.length - 1)) {
                    setCurrentSlide(0)
                } else {
                    setCurrentSlide(currentSlide + 1)
                }
            } else {
                setCurrentSlide(currentSlide + 1)
            }
        }

    }


    const slidesMapped = children.map((child, index) =>
        <CarouselSlide
            key={index}
            id={"slide" + index}
            slideNumber={index}
            currentSlide={currentSlide}
            {...child.props}
        />
    )

    return (
        <div className="perspective-carousel">
            <div className="slider-container">
                <CarouselArrows
                    leftActive={currentSlide !== 0 && showArrows || repeat}
                    rightActive={currentSlide !== (childArray.length - 1) && showArrows || repeat}
                    arrowCall={handleSlideArrow}
                />
                <div className="slider-content">
                    {slidesMapped}
                </div>
                <div className="bullet-container">

                    {childArray.map((id, index) =>
                        <CarouselBullets
                            id={"carousel-bullet-" + index}
                            bulletCall={bulletCall}
                            key={index}
                            active={currentSlide === index}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

PerspectiveCarousel.propTypes = {
    children: PropTypes.node,
    showArrows: PropTypes.bool,
    showBullets: PropTypes.bool,
    repeat: PropTypes.bool
}