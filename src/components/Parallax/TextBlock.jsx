import cx from 'classnames'
import PropTypes from "prop-types";
import './TextBlock.scss'
export const TextBlock = (props) => {
    const {
        children,
        color,
        size,
        weight
    } = props;

    return (
        <span className={cx( color, size, weight )}>{children}</span>
    )
}

TextBlock.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    size: PropTypes.string,
    weight: PropTypes.string
}

TextBlock.defaultProps = {
    color: "primary",
    size: "h6",
    weight: "bold"
}