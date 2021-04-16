import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDate } from "../../../context/DateProvider";


const MonthNav: React.FC = ({ children }) => {
    const { nextYear, prevYear } = useDate();

    return (
        <div className="calendar_nav">
            <div className="chevron_icon">
                <BsChevronLeft onClick={() => prevYear(1)}/>
            </div>
                {children}
            <div className="chevron_icon">
                <BsChevronRight onClick={() => nextYear(1)}/>
            </div>
        </div>
    );
};

export default MonthNav;
