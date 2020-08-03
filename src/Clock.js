import React, { useEffect, useState } from "react";

function getTime(hours, minutes, seconds) {
    var textTime = "";
    if(hours < 10) {
        textTime += "0";
    }
    textTime += `${hours}:`;
    if(minutes < 10) {
        textTime += "0";
    }
    textTime += `${minutes}:`;
    if(seconds < 10) {
        textTime += "0";
    }
    textTime += `${seconds}`;

    return textTime;
}

function Clock() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    var date = new Date();

    useEffect(() => {
        const interval = setInterval(() => {
            setHours(date.getHours());
            setMinutes(date.getMinutes());
            setSeconds(date.getSeconds());
        }, 1000);
        return () => clearInterval(interval);
    }, [date]);
    
    return (
        <h1>{getTime(hours, minutes, seconds)}</h1>
    );
}

export default Clock;