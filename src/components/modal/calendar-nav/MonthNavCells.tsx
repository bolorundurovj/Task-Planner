import React from "react";
import { eachMonthOfInterval, endOfYear, format, getYear, startOfYear } from "date-fns";
import MonthNav from "./MonthNav";
import { useDate } from "../../../context/DateProvider";
import { useModal } from "../../../context/ModalProvider";
import { Nav } from "../../../utilities/interfaces";

interface IYearNavProps {
    setNav: (nav: Nav) => void;
}

const MonthNavCells: React.FC<IYearNavProps> = ({ setNav }) => {
    const { currentDate, setContextMonth, setContextYear } = useDate();
    const { closeModal } = useModal();

    const yearStart = startOfYear(currentDate);
    const yearEnd = endOfYear(currentDate);
    const monthsArray = eachMonthOfInterval({
        start: yearStart,
        end: yearEnd,
    });
    const fullMonthFormat = "MMMM";
    const shortMonthFormat = "MMM";

    const handleMonthClick = (month: number): void => {
        setContextMonth(month);
        closeModal();
    }

    const handleYearClick = () => {
        setContextYear(getYear(new Date()));
        setNav("years");
    }

    return (
        <div className="calendar_nav_wrapper">
            <MonthNav>
                <div onClick={handleYearClick}>
                    {format(currentDate, "yyyy")}
                </div>
            </MonthNav>
            { monthsArray.map((month, index) => (
                <div
                    className="calendar_nav_cell hover:bg-gray-300 hover:bg-opacity-50"
                    key={index}
                    onClick={() => handleMonthClick(index)}
                >
                    <span className="hidden md:inline-block">
                        {format(month, fullMonthFormat)}
                    </span>
                    <span className="md:hidden">
                        {format(month, shortMonthFormat)}
                    </span>
                </div>
            ))}

        </div>
    );
};

export default MonthNavCells;
