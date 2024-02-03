import PropTypes from "prop-types";
import "./BasicAccordion.scss"
import {useState} from "react";

export function BasicAccordionItem(props) {
    const {
        children,
        id,
        title,
    } = props;

    const [slideOpen, setSlideOpen] = useState("")

    const handleSlideOpen = () => {
        if (slideOpen === "open") {
            setSlideOpen("")
        } else {
            setSlideOpen("open")
        }
    }

    return (
        <>
            <div className={"accordion-item" + ` ${slideOpen}`} id={id}>
                <div className="accordion-link" onClick={handleSlideOpen}>
                    <div className="accordian-flex">
                        <h3>{title}</h3>
                        {/*<ul>*/}
                        {/*    <li>#Figma</li>*/}
                        {/*    <li>#Sketch</li>*/}
                        {/*    <li>#Adobe</li>*/}
                        {/*    <li>#Invision</li>*/}
                        {/*    <li>#Protopie</li>*/}
                        {/*</ul>*/}
                    </div>
                    <i className="accordian-icon ion-md-arrow-forward">+</i>
                    <i className="accordian-icon ion-md-arrow-down">-</i>
                </div>
                <div className="accordion-answer">
                    <p> {children}</p>
                </div>
                {/*<hr/>*/}
            </div>
        </>
    )
}

BasicAccordionItem.propTypes = {
    children: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string
};