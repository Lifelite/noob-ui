import {useState} from "react";
import PropTypes from "prop-types";
import VisibilitySensor from "react-visibility-sensor";
import "./BounceIn.scss"

export default function BounceIn(props) {
    const {
        delay,
        visibilitySensorProps,
        children,
    } = props;

    const [visible, setVisible] = useState(false);

    function onVisibilitySensorChange(isVisible) {
        if (isVisible) {
            setVisible(true)
        }
    }

    return (
        <VisibilitySensor
            {...visibilitySensorProps}
            onChange={onVisibilitySensorChange}
        >
            <div
                className={visible ? 'bounce-in' : 'is-hidden'}
                style={{animationDelay: delay}}>
                    {children}
            </div>
        </VisibilitySensor>
    )
}

BounceIn.defaultProps = {
    delay: 0,
    visibilitySensorProps: {partialVisibility: true, offset: {bottom: 50}}
}

BounceIn.propTypes = {
    delay: PropTypes.number,
    visibilitySensorProps: PropTypes.shape({}),
    children: PropTypes.node,
}