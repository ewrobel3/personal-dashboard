import React, { useEffect, useState } from "react";

function Calendar() {

    const [day, setDay] = useState("");

    var date = new Date();

    useEffect(() => {
        const interval = setInterval(() => {
            setDay(date.toDateString());
        }, 1000);
        return () => clearInterval(interval);
    }, [date]);


    return (
        <div id="calendar">
            <div id="week">
                <div id="days">
                    <div id="Sunday" className="day">
                        Sunday
                    </div>
                    <div id="Monday" className="day">
                        Monday
                    </div>
                    <div id="Tuesday" className="day">
                        Tuesday
                    </div>
                    <div id="Wednesday" className="day">
                        Wednesday
                    </div>
                    <div id="Thursday" className="day">
                        Thurday
                    </div>
                    <div id="Friday" className="day">
                        Friday
                    </div>
                    <div id="Saturday" className="day">
                        Saturday
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calendar;