import React from "react";
import { formatISO } from "date-fns";
import DayDetailsNav from "./DayDetailsNav";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import FreeDaySwitch from "./FreeDaySwitch";
import { useDate } from "../../../context/DateProvider";
import { useDataStore } from "../../../context/DataProvider";

const DayDetails = () => {
    const { chosenDay } = useDate();
    const { getDayData } = useDataStore();
    const dateKey = formatISO(chosenDay, { representation: 'date' });
    const dayData = getDayData(dateKey);

    return (
        <div className="p-4 lg:p-8">
            <DayDetailsNav />
            <FreeDaySwitch dateKey={dateKey} isFreeDay={dayData.isFreeDay} />
            <TaskForm dateKey={dateKey} />
            <TaskList dateKey={dateKey} tasks={dayData.content} />
        </div>
    );
};

export default DayDetails;
