import React from "react";
import { addYears, eachYearOfInterval, format, getYear, subYears } from "date-fns";
import YearNav from "./YearNav";
import { useDate } from "../../../context/DateProvider";
import { Nav } from "../../../utilities/interfaces";

interface IYearNavProps {
    setNav: (nav: Nav) => void;
}

const YearNavCells: React.FC<IYearNavProps> = ({ setNav }) => {
    const { currentDate, setContextYear } = useDate();

    const subYearStart = subYears(currentDate, 5);
    const addYearEnd = addYears(currentDate, 6);
    const yearsArray = eachYearOfInterval({
        start: subYearStart,
        end: addYearEnd
    });

    const handleYearClick = (year: Date): void => {
        setContextYear(getYear(year));
        setNav("months");
    }

    return (
        <div className="calendar_nav_wrapper">
                <YearNav subYearStart={subYearStart} addYearEnd={addYearEnd} />
                { yearsArray.map((year, index) => (
                    <div
                        className="calendar_nav_cell hover:bg-gray-300 hover:bg-opacity-50"
                        key={index}
                        onClick={() => handleYearClick(year)}
                    >
                        {format(year, "yyyy")}
                    </div>
                ))}

        </div>
    );
};

export default YearNavCells;
