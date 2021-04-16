import React from "react";
import cx from "classnames";
import { GoPrimitiveDot } from "react-icons/go";
import { useDate } from "../../../context/DateProvider";
import { useModal } from "../../../context/ModalProvider";
import { EPriority, ITask } from "../../../utilities/interfaces";

export interface IDayCardProps {
    taskData: {
        isFreeDay: boolean;
        content: ITask[] | [];
    }
    dayNumber: number;
    isSameMonth: boolean;
    isSameDay: boolean;
    isSunday: boolean;
}

const DayCard: React.FC<IDayCardProps> = ({
         taskData,
         dayNumber,
         isSameMonth,
         isSameDay,
         isSunday
    }) => {
    const { nextMonth, prevMonth, setContextChosenDay } = useDate();
    const { handleNavClickOpen } = useModal();

    const wrapperClassValues = cx("day_card_wrapper", {
        'same_day': isSameDay,
        'bg-gradient-to-b from-teal-200 via-teal-100 to-white': isSunday && !taskData.isFreeDay,
        'bg-teal-200': taskData.isFreeDay,
        'font-bold': isSameMonth,
        'opacity-25 font-base': !isSameMonth
    });
    const pickedHigh = taskData.content.some(el => el.priority === EPriority.HIGH);
    const pickedMedium = taskData.content.some(el => el.priority === EPriority.MEDIUM);
    const pickedLow = taskData.content.some(el => el.priority === EPriority.LOW);

    const handleDayCardClick = () => {
        if (!isSameMonth && dayNumber < 7) {
            nextMonth();
        }
        if (!isSameMonth && dayNumber > 22) {
            prevMonth();
        }
        if (isSameMonth) {
           handleNavClickOpen("day", "up");
           setContextChosenDay(dayNumber);
        }
    }
    return (
        <div className={wrapperClassValues} onClick={handleDayCardClick}>
            <div className="day_number">{dayNumber}</div>
            <div className="task_icon">
                { pickedHigh && <GoPrimitiveDot className="text-red-600" />}
                { pickedMedium && <GoPrimitiveDot className="text-yellow-600" />}
                { pickedLow && <GoPrimitiveDot className="text-green-600" />}
            </div>
        </div>
    );
};

export default DayCard;
