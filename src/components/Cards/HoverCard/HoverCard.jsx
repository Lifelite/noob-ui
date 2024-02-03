import PropTypes from "prop-types";
import "./HoverCard.scss"

export function HoverCard(props) {
    const {
        children,
        title,
        titleSubtext,
        bodyText,
        image,
        imageAlt,
        id,
    } = props;

    return (
        <div className="hover-card" id={id}>
            <div className="hover-card-image">
                <img src={image} alt={imageAlt}/>
            </div>
            <div className="hover-card-details">
                <div className="hover-card-center">
                    <h1>{title}<br/><span>{titleSubtext}</span></h1>
                    <p>{bodyText}</p>
                    <ul>
                        {children}
                    </ul>
                </div>
            </div>
        </div>
    )
}

HoverCard.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    titleSubtext: PropTypes.string,
    bodyText: PropTypes.string,
    image: PropTypes.node.isRequired,
    imageAlt: PropTypes.string,
    id: PropTypes.string,
};