import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { format } from "date-fns";
import { useDate } from "../../../context/DateProvider";

const DayDetailsNav = () => {
    const { chosenDay, nextDay, prevDay } = useDate();

    return (
        <div className="flex justify-between text-xl lg:text-4xl mb-4 lg:mb-8">
            <div className="chevron_icon">
                <BsChevronLeft onClick={prevDay}/>
            </div>
            <div>
               <div className="hidden w-2/5 md:flex md:space-x-4">
                   <div>{format(chosenDay, "eeee")}</div>
                   <div>{format(chosenDay, "do")}</div>
                   <div>{format(chosenDay, "MMMM")}</div>
               </div>
               <div className="flex space-x-2 w-2/5 md:hidden">
                   <div>{format(chosenDay, "eee")}</div>
                   <div>{format(chosenDay, "do")}</div>
                   <div>{format(chosenDay, "MMM")}</div>
                </div>
            </div>
            <div className="chevron_icon">
                <BsChevronRight onClick={nextDay}/>
            </div>
        </div>
    );
};

export default DayDetailsNav;
