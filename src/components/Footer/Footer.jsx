import "./Footer.scss"
import PropTypes from "prop-types";
import {FooterBlob} from "./FooterBlob.jsx";

export function Footer(props) {
    const {
        bubbleCount,
        children,
    } = props;


    const bubbleHandler = () => {
        let bubbleArray = [];
        for (let i = 0; i < bubbleCount; i++) {
            bubbleArray.push(i);
        }
        return bubbleArray;
    };

    const bubbles = bubbleHandler()


    return (
        <div className="footer-wrapper">
            <div className="footer-animated">
                {bubbles.map((id, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <FooterBlob bubbleCount={bubbleCount} id={'gloop' + id} key={index}/>
                ))}
                <div className="footer-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

Footer.defaultProps = {
    bubbleCount: 128,
}

Footer.propTypes = {
    bubbleCount: PropTypes.number,
    children: PropTypes.node,
}