import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { tasksReducer } from "../reducer";
import { Action, ITask, IDataStore } from "../utilities/interfaces";

interface IDataContent {
    isFreeDay: boolean;
    content: ITask[] | [];
}

interface IDataContext {
    store: IDataStore;
    dispatch: React.Dispatch<Action>;
    getMonthData: (isoMonthDates: string[]) => IDataStore;
    getDayData: (isoDate: string) => IDataContent;
}

const DataContext = createContext<IDataContext | undefined>(undefined);

const DataProvider: React.FC = ({ children }) => {
    const [store, dispatch] = useReducer(tasksReducer, {}, () => {
        const localData = localStorage.getItem("dataList");
        return localData ? JSON.parse(localData) : {};
    });

    const handleMonthData = (isoMonthDates: string[]) => {
        const monthData: IDataStore = isoMonthDates
            .reduce((obj, key) => ({...obj, [key]: store[key]  ?? { isFreeDay: false, content: [] }}), {});
        return monthData;
    }

    const handleDayData = (isoDate: string) => {
        return store[isoDate] ?? { isFreeDay: false, content: [] };
    }

    const value = {
        store,
        dispatch,
        getMonthData: (isoMonthDates: string[]) => handleMonthData(isoMonthDates),
        getDayData: (isoDate: string) => handleDayData(isoDate),
    }

    useEffect(() => {
        localStorage.setItem("dataList", JSON.stringify(store));
    }, [store]);

    return (
        <DataContext.Provider value={value}>
            { children }
        </DataContext.Provider>
    );
};

const useDataStore = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useTask must be used within a Provider');
    }

    return context;
}

export { DataProvider, useDataStore };
