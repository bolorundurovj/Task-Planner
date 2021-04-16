import React from "react";
import {
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    formatISO,
    getDate,
    isSameDay,
    isSameMonth,
    isSunday,
    startOfMonth,
    startOfWeek
} from "date-fns";
import DayCard from "./DayCard";
import { useDate } from "../../../context/DateProvider";
import { useDataStore } from "../../../context/DataProvider";
import { IDataStore } from "../../../utilities/interfaces";

const MonthCells = () => {
    const { currentDate } = useDate();
    const { getMonthData } = useDataStore();
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, {weekStartsOn: 1});
    const endDate = endOfWeek(monthEnd, {weekStartsOn: 1});

    const monthDays = eachDayOfInterval({
        start: startDate,
        end: endDate
    })
    const isoMonthDays = monthDays.map(date => formatISO(date, {representation: "date"}));
    const monthData: IDataStore = getMonthData(isoMonthDays);
    return (
        <div className="grid grid-cols-7 grid-rows-days gap-2 lg:gap-4">
            {
               monthDays.map((day) => {
                   const dayNumber = getDate(day);
                   let dateKey = formatISO(day, {representation: "date"});
                   return (
                       <DayCard
                           key={dateKey}
                           taskData={monthData[dateKey]}
                           dayNumber={dayNumber}
                           isSameMonth={isSameMonth(day, monthStart)}
                           isSameDay={isSameDay(day, new Date())}
                           isSunday={isSunday(day)}
                       />
                   )
               })
            }
        </div>
    );
};

export default MonthCells;
