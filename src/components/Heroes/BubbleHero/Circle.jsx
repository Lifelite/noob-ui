import "./HeroHeader.scss"
import {useRef} from "react";
import PropTypes from "prop-types";

export function Circle(props) {
    const {
        bubbleLifeTime
    } = props

    const circleRef = useRef(null)
    const side = (5 + Math.floor(Math.random() * 5)) + 'px';

    const delayValue = (Math.random() * bubbleLifeTime) + 's';

    return (
        <div
            className='circle'
            id='circle'
            ref={circleRef}
            style={{
                width: side,
                height: side,
                animationDelay: delayValue,
            }}
        ></div>
    )
}

Circle.propTypes = {
    bubbleLifeTime: PropTypes.number
}