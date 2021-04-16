import React from 'react';
import Navigation from "./Navigation";
import WeekDays from "./WeekDays";
import MonthCells from "./month-cells/MonthCells";

const Calendar = () => {
    return (
        <div className="font-body h-screen p-3 lg:p-6 grid grid-rows-main">
            <Navigation />
            <WeekDays />
            <MonthCells />
        </div>
    );
};

export default Calendar;
