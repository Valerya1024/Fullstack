import { useEffect, useState, useRef } from "react";

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(()=> {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    function stop() {
        setIsRunning(false);
    }

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function reset() {
        setIsRunning(false);
        setElapsedTime(0);
    }

    function formatTime() {
        let hour = Math.floor(elapsedTime / (1000*60*60));
        let min = Math.floor(elapsedTime / (1000*60) % 60);
        let sec = Math.floor(elapsedTime / 1000 % 60);
        let milisec = Math.floor((elapsedTime % 1000)/10)

        hour = String(hour).padStart(2, "0");
        min = String(min).padStart(2, "0");
        sec = String(sec).padStart(2, "0");
        milisec = String(milisec).padStart(2, "0");

        return `${hour}:${min}:${sec}:${milisec}`
    }

    return (
        <div className="stopwatch-background">
        <div className="stopwatch">
            <div className="stopwatch-display">{formatTime()}</div>
            <div className="controls" >
                <button className="start-button" onClick={start}>Start</button>
                <button className="stop-button" onClick={stop}>Stop</button>
                <button className="reset-button" onClick={reset}>Reset</button>
            </div>
        </div>
        </div>
    )
}

export default Stopwatch;
