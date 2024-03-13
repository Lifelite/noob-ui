import PropTypes from "prop-types";
import "./style.scss"
import {useEffect, useState} from "react";

export function SimpleModal(props) {
    const {
        id,
        children,
        title,
        subtitle,
        text,
        isOpen,
        onClose,
        moreText,
        buttonText,
        onButtonClick,
    } = props;

    useEffect(() => {
        setIsModalOpen(isOpen);
    }, [isOpen]);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        onClose();
    };


    const [isModalOpen, setIsModalOpen] = useState(isOpen);

    //
    // const handleCopy = () => {
    //     navigator.clipboard.writeText(text + `\n` + moreText)
    // }
    if (!isModalOpen) {
        return null;
    }


    return (

        <div className="simple-modal" id={id}>
            <div className="simple-modal__content">
                <h2 className="heading-secondary">{title}</h2>
                <h3 className="heading-tertiary">{subtitle}</h3>
                <p className="simple-modal__text">
                    {text} <br/>
                    {moreText}
                </p>
                {children}
                <div className="simple-modal__button-group">
                    <button type="button" onClick={handleCloseModal} className="simple-modal__button">Close</button>
                    <button type="button" onClick={onButtonClick} className="simple-modal__button">{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

SimpleModal.defaultProps = {
    id: "popup-modal",
    hidden: true,
    buttonText: "Copy",
}

SimpleModal.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string,
    moreText: PropTypes.string,
    hidden: PropTypes.bool,
    onClick: PropTypes.func,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    buttonText: PropTypes.string,
    onButtonClick: PropTypes.func,
}