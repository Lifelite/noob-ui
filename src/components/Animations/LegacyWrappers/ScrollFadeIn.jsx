import {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import './ScrollFadeIn.scss'

export default function ScollInFade(props) {
    const {
        children
    } = props

    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {children}
        </div>
    );
}

ScollInFade.propTypes = {
    children: PropTypes.node
}
