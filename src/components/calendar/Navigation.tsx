import React from "react";
import { format } from "date-fns";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDate } from "../../context/DateProvider";
import { useModal } from "../../context/ModalProvider";

const Navigation: React.FC = () => {
    const { currentDate, nextMonth, prevMonth } = useDate();
    const { handleNavClickOpen } = useModal();

    return (
        <div className="navigation_wrapper">
            <div className="chevron_icon">
                <BsChevronLeft onClick={prevMonth}/>
            </div>
            <div className="flex cursor-pointer">
                <div
                    className="mr-3"
                    onClick={() => handleNavClickOpen("months", "down")}
                >
                    {format(currentDate, "MMMM")}
                </div>
                <div
                    onClick={() => handleNavClickOpen("years", "down")}
                >
                    {format(currentDate, "yyyy")}
                </div>
            </div>
            <div className="chevron_icon">
                <BsChevronRight onClick={nextMonth}/>
            </div>
        </div>
    );
};

export default Navigation;
