import PropTypes from "prop-types";

export const BasicAccordion = (props) => {
    const {
        children
    } = props;


    return (
        <>
            <div className="accordion">
                {children}
            </div>
        </>
    )
}

BasicAccordion.propTypes = {
    children: PropTypes.node,
}

// change classes:  flex, icon, answer