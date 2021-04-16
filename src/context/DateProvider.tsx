import React, {useContext, useState} from "react";
import {
    addDays,
    addMonths,
    addYears,
    setDate,
    setMonth,
    setYear,
    subDays,
    subMonths,
    subYears
} from "date-fns";

interface IDateContext {
    currentDate: Date;
    chosenDay: Date;
    setContextChosenDay: (dayNumber: number) => void;
    nextDay: () => void;
    prevDay: () => void;
    nextMonth: () => void;
    prevMonth: () => void;
    setContextMonth: (month: number) => void;
    nextYear: (amount: number) => void;
    prevYear: (amount: number) => void;
    setContextYear: (year: number) => void;
}

const DateContext = React.createContext<IDateContext | undefined>(undefined);

const DateProvider: React.FC = ({ children }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [chosenDay, setChosenDay] = useState(new Date());

    const value = {
        currentDate,
        chosenDay,
        setContextChosenDay: (dayNumber: number) => setChosenDay(setDate(currentDate, dayNumber)),
        nextDay: () => setChosenDay(addDays(chosenDay, 1)),
        prevDay: () => setChosenDay(subDays(chosenDay, 1)),
        nextMonth: () => setCurrentDate(addMonths(currentDate, 1)),
        prevMonth: () => setCurrentDate(subMonths(currentDate, 1)),
        setContextMonth: (month: number) => setCurrentDate(setMonth(currentDate, month)),
        nextYear: (amount: number) => setCurrentDate(addYears(currentDate, amount)),
        prevYear: (amount: number) => setCurrentDate(subYears(currentDate, amount)),
        setContextYear: (year: number) => setCurrentDate(setYear(currentDate, year)),
    }

    return (
        <DateContext.Provider value={value}>
            {children}
        </DateContext.Provider>
    );
};

const useDate = () => {
    const context = useContext(DateContext);
    if (context === undefined) {
        throw new Error('useDate must be used within a Provider');
    }

    return context;
}

export { DateProvider, useDate };
