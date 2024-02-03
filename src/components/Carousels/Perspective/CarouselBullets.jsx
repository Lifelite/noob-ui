import cx from "classnames";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import "./style.scss"

export const CarouselBullets = (props) => {
    const {
        bulletCall,
        active,
        id,
    } = props;

    useEffect(() =>{
        if (active) {
            setActiveClass("active")
        }else{
            setActiveClass("")
        }
    },[active])

    const [activeClass, setActiveClass] = useState("")



    return (
        <div className={cx("bullet", activeClass)} id={id} onClick={bulletCall} />
    )

}

CarouselBullets.propTypes = {
    bulletCall: PropTypes.func,
    active: PropTypes.bool,
    id: PropTypes.string,
}