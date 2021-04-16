import React from "react";
import { addDays, format, startOfWeek } from "date-fns";
import { useDate } from "../../context/DateProvider";

const WeekDays = () => {
    const { currentDate } = useDate();
    const fullWeekDayFormat = "iiii";
    const shortWeekDayFormat = "iii";
    const days = [];
    let startDate = startOfWeek(currentDate, {weekStartsOn: 1});

    for (let i = 0; i < 7; i++) {
        days.push(
            <div key={i}>
                <span className="hidden md:inline-block">
                    {format(addDays(startDate, i), fullWeekDayFormat)}
                </span>
                <span className="md:hidden">
                    {format(addDays(startDate, i), shortWeekDayFormat)}
                </span>
            </div>
        );
    }

    return <div className="grid grid-cols-7 text-center mb-3">{days}</div>;
};

export default WeekDays;
