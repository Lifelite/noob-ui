import {Circle} from "./Circle.jsx";
import {useRef} from "react";
import "./HeroHeader.scss"
import PropTypes from "prop-types";
export function Bubble(props) {
    const {
        bubbleLifeTime
    } = props

    const bubbleRef = useRef(null);

    const transformType = "rotate(" + Math.floor(Math.random() * 360) + "deg)";


    return (
        <div
            className="circle_container"
            ref={bubbleRef}
            style={{
                transform: transformType,
            }}
        >
            <Circle bubbleLifeTime={bubbleLifeTime} />
        </div>
    )
}

Bubble.propTypes = {
    bubbleLifeTime: PropTypes.number
}