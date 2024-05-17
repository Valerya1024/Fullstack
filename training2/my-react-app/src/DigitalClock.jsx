import { useEffect, useState } from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    })

    function formatTime() {
        let hour = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const meridiem = hour > 12? "PM":"AM"

        hour = hour % 12 || 12;

        return `${padZero(hour)}:${padZero(min)}:${padZero(sec)} ${meridiem}`
    }

    function padZero(num) {
        return (num < 10? "0":"")+num;
    }

    return(<div className="clock-background">
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    </div>);
}

export default DigitalClock;