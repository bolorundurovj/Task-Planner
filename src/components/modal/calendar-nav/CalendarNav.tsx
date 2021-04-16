import React, {useState} from "react";
import YearNavCells from "./YearNavCells";
import MonthNavCells from "./MonthNavCells";
import { Nav } from "../../../utilities/interfaces";

const CalendarNav: React.FC<{ nav: Nav }> = ({ nav }) => {
    const [calendarNav, setCalendarNav] = useState<Nav>(nav);

    const handleNavChange = (nav: Nav) => {
        setCalendarNav(nav)
    }

    return (
        <div className="h-full">
            { calendarNav === "years" && <YearNavCells setNav={handleNavChange} /> }
            { calendarNav === "months" && <MonthNavCells setNav={handleNavChange} /> }
        </div>
    );
};

export default CalendarNav;
