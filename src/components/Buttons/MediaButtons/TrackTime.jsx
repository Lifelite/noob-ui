import "./TrackTime.scss"

export const TrackTime = (props) => {
    const {
        totalTime,
        leftTime,
    } = props;
    return (
        <div className="track-time">
            <div className="track"></div>
            <div className="time">
                <div className="total-time">{totalTime}</div>
                <div className="last-time">{leftTime}</div>
            </div>
        </div>
    )
}