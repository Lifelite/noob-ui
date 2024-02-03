import PropTypes from "prop-types";
import './Button.scss'

export default function FancyAnimatedButton(props) {
    const {
        children,
        onClick,
        id,
    } = props


    return (
        <button
            className="fancy"
            onClick={onClick}
        >
            <span className="button-top"></span>
            <span id={id} className="button-text">{children}</span>
            <span className="button-bottom"></span>
            <span className="button-bottom2"></span>
        </button>
    )
}

FancyAnimatedButton.defaultProps = {
    type: 'primary-button',
    onClick: () => Promise.resolve(),
}

FancyAnimatedButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    id: PropTypes.string,
}