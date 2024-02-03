import "./Footer.scss"

export const FooterBlob = () => {
    let size= `${2 + Math.random() * 4}rem`;
    let distance= `${6 + Math.random() * 4}rem`;
    let position= `${-5 + Math.random() * 110}%`;
    let time= `${2 + Math.random() * 2}s`;
    let delay= `${-1 * (2 + Math.random() * 2)}s`;


    return (
        <div className="footer-bubbles">
            <div
                className="footer-bubble"
                style={{
                    height: size,
                    width: size,
                    distance: distance,
                    left: position,
                    animationDuration: time,
                    animationDelay: delay,
                }}
            ></div>
        </div>
    )
}