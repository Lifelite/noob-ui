import PropTypes from "prop-types";
import {PacmanLoader} from "./PacmanLoader.jsx";
import "./FullPageLoader.scss"

export const FullPageLoader = (props) => {
    const {
        children,
        hidden,
    } = props
    return (
        <div className="full-page-loader" hidden={hidden}>
            <div className="loader-icon">
                {children}
            </div>
        </div>
    )
}

FullPageLoader.propDefaults = {
    children: <PacmanLoader />,
    hidden: true,
}

FullPageLoader.propTypes = {
    children: PropTypes.node,
    hidden: PropTypes.bool
}