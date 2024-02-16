
import "./style.scss"
export function IconButton(props) {
    const {
        color,
        onClick,
        hoverAnimation,
        icon,
        text,
        id,
    } = props;

    // fill, pulse, close, raise, up, slide, offset


    return (
        <>
            <button onClick={onClick} id={id} className={"icon-button" + "__" + hoverAnimation}>
                <img src={icon} alt="button icon" />
                <span>{text}</span>
            </button>
        </>
    )
}