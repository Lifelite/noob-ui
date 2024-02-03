import "./FlipCards.scss"
import {useState} from "react";
import PropTypes from "prop-types";

export function FlipCard(props) {
    const {
        background,
        children,
        frontButtonContent,
        backButtonContent,
        cardTitle,
        frontContent,
        backLeftCornerContent,
        backRightCornerContent,
    } = props

    const [flipState, setFlipState] = useState(false)

    const handleClickFlip = () => {
        flipState ? setFlipState(false) : setFlipState(true)
    }

    return (
        <div className="wrapper">
            <div className="flipcard">
                <div className={"flip-card-content"  + (flipState ? " flip" : "")}>
                    <div className="flipcard-front"
                         style={{backgroundImage: `url(${background})`}}>
                        <div className="flipcard-inner">
                            <h2>{cardTitle}</h2>
                            <div className="flipcard-subtext">{frontContent}</div>
                            <button type={"button"} onClick={handleClickFlip} className="button" aria-hidden="true">
                                {frontButtonContent}
                            </button>
                        </div>
                    </div>
                    <div className="flipcard-back">
                        <div className="flipcard-inner">
                            <div className="description">
                                {children}
                            </div>
                            <div className="back-left-corner">{backLeftCornerContent}</div>
                            <div className="back-right-corner">{backRightCornerContent}</div>
                            <button onClick={handleClickFlip} className="button return" aria-hidden="true">
                                {backButtonContent}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

FlipCard.defaultProps = {
    background: "https://en.m.wikipedia.org/wiki/File:React-icon.svg",
}

FlipCard.propTypes = {
    background: PropTypes.string,
    cardTitle: PropTypes.string.isRequired,
    children: PropTypes.node,
    frontButtonContent: PropTypes.node,
    backButtonContent: PropTypes.node,
    frontContent: PropTypes.node,
    backLeftCornerContent: PropTypes.node,
    backRightCornerContent: PropTypes.node,
}