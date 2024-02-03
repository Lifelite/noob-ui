
import "./PlaybackButton.scss"
import PropTypes from "prop-types";
import {NEXT_ICON, PAUSE_ICON, PLAY_ICON, PREVIOUS_ICON} from "./functions/mediaButtonSVGProvider.js";
import {useEffect, useState} from "react";
export const PlaybackButton = (props) => {
    const {
        buttonType,
        onClick,
        color,
        id,
    } = props;

    const [buttonState, setButtonState] = useState(PLAY_ICON)

    useEffect(() => {
        switch (buttonType) {
            case "play": return setButtonState(PLAY_ICON);
            case "previous": return setButtonState(PREVIOUS_ICON);
            case "next": return setButtonState(NEXT_ICON);
            case "pause": return setButtonState(PAUSE_ICON);
        }
    }, [buttonType]);

    return (
        <>
            <button type={"button"}
                    onClick={onClick}
                    id={id}
                    className={"playback-button"}
            >
                    <div className="playback-button-icon">
                        <svg width="2rem" height="2rem" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d={buttonState}
                                fill={color}
                            />
                        </svg>
                    </div>
            </button>
        </>
    )
}

PlaybackButton.defaultProps = {
    buttonType: "play",
    onClick: Promise.resolve(),
    color: "white",
};

PlaybackButton.propTypes = {
    buttonType: PropTypes.string,
    onClick: PropTypes.any,
    color: PropTypes.string,
    status: PropTypes.any,
    id: PropTypes.string,
};