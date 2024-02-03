import './Parallax.scss'
import {TextBlock} from "./TextBlock.jsx";
import ScrollInFade from "../Animations/LegacyWrappers/ScrollFadeIn.jsx";
import FancyAnimatedButton from "../Buttons/FancyAnimatedButton.jsx";
import {useNavigate} from "react-router-dom";

export function Parallax() {

    const navigate = useNavigate()
    const handleClick = (e) => {
        let directionId = e.target.id;
        switch (directionId) {
            case "professional-button-link": navigate("/professional")
            break;
            // eslint-disable-next-line no-fallthrough
            case "personal-button-link": navigate("/personal")
            break;
            // eslint-disable-next-line no-fallthrough
            case "contact-button-link": navigate("/contact-me")
            break;
            // eslint-disable-next-line no-fallthrough
            default: navigate("/professional")
        }
        // add page transition

    }

    return (
        <div className="parallax">
            <div className="parralax-wrapper" id="parallax-layer-div">
                <div className="parralax-layer" id="transitionblock"></div>
                <div className="parralax-layer" id="atlantabackground"></div>
                <div className="parralax-layer" id="jeremy"></div>
                <div className="parralax-layer" id="name"></div>
                <div className="parralax-layer" id="atlantaforeground"></div>
                <div className="parralax-layer" id="enterprise"></div>
                <div className="parralax-layer" id="deathstar"></div>
                <div className="parralax-layer" id="starback"></div>
            </div>
            <div className="intro">
                <ScrollInFade>
                    <TextBlock color="primary" size="large">
                        Hi, I&#39;m Jeremy Huntsman...
                    </TextBlock>
                </ScrollInFade>
                <ScrollInFade>
                    <div className="intro-body">
                        <TextBlock color="primary" size="h2" weight="normal">
                            a man of many talents and hobbies, but a Lead Quality Engineer by trade.
                        </TextBlock>
                        <TextBlock color="primary" size="h2" weight="normal">
                            This website serves as a place to house my project portfolio, showcase my
                            resume, and overall just provide a window into my life and career.
                        </TextBlock>
                        <TextBlock color="primary" size="h2" weight="normal">
                            I plan on consistently updating and improving this website as I learn and experiment
                            more with full stack development.  Thanks for stopping by!
                        </TextBlock>
                    </div>
                </ScrollInFade>
                <ScrollInFade>
                    <div className="button-cluster">
                        <FancyAnimatedButton id="professional-button-link" onClick={handleClick}>Professional</FancyAnimatedButton>
                        <FancyAnimatedButton id="personal-button-link" onClick={handleClick}>Personal</FancyAnimatedButton>
                        <FancyAnimatedButton id="contact-button-link" onClick={handleClick}>Contact</FancyAnimatedButton>
                    </div>
                </ScrollInFade>
            </div>

        </div>
    )
}