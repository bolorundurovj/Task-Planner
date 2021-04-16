import React from "react";
import { format } from "date-fns";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDate } from "../../../context/DateProvider";

interface IYearNavProps {
    subYearStart: Date;
    addYearEnd: Date;
}

const YearNav: React.FC<IYearNavProps> = ({ subYearStart, addYearEnd }) => {
    const { nextYear, prevYear } = useDate();

    return (
        <div className="calendar_nav">
            <div className="chevron_icon">
                <BsChevronLeft onClick={() => prevYear(12)}/>
            </div>
            <div>
                <div>{format(subYearStart, "yyyy")} - {format(addYearEnd, "yyyy")}</div>
            </div>
            <div className="chevron_icon">
                <BsChevronRight onClick={() => nextYear(12)}/>
            </div>
        </div>
    );
};

export default YearNav;
