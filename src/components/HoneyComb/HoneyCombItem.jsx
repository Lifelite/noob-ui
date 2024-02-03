import PropTypes from "prop-types";
import "./HoneyComb.scss"
export function HoneyCombItem(props) {
    const {
        backgroundURL,
        title,
        subtitle,
        style,
        id,
        link,
        titleId,
        subtitleId,
        linkTarget,
    } = props

    const background = `url(${backgroundURL})`

    return (
        <li className="honeycomb-item" id={id}>
            <div className="honeycomb-item-in">
                <div className='honeycomb-item-image'
                     style={{
                         backgroundImage: background,
                         style
                     }}></div>

            </div>
            <div className="honeycomb-item-out">
                <a className="honeycomb-item-link" target={linkTarget} href={link}>
                    <h1 id={titleId} className="honeycomb-item-title">{title}</h1>
                    <p id={subtitleId} className="honeycomb-item-subtitle">{subtitle}</p>
                </a>
            </div>
        </li>
    )
}

HoneyCombItem.defaultProps = {
    style: null,
    id: null,
    titleId: null,
    subtitleId: null,
    link: "#",
    linkTarget: "_blank"
}

HoneyCombItem.propTypes = {
    backgroundURL: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    style: PropTypes.any,
    id: PropTypes.string,
    link: PropTypes.string,
    titleId: PropTypes.string,
    subtitleId: PropTypes.string,
    linkTarget: PropTypes.string,
}