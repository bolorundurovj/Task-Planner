import {v4 as uuidv4} from "uuid";
import { Action, EType, IDataStore } from "../utilities/interfaces";

const initialState: IDataStore = {};

export const tasksReducer = (state = initialState, action: Action): IDataStore => {
    switch (action.type) {
        case EType.AddTask:  {
            const newTask = {
                id: uuidv4(),
                ...action.payload.values,
            };
            const prevFreeDayState = (state[action.payload.dateKey] && state[action.payload.dateKey].isFreeDay) ?? false;
            const prevContentState = (state[action.payload.dateKey] && state[action.payload.dateKey].content) ?? [];
            return {
                ...state,
                [action.payload.dateKey]: {
                    isFreeDay: prevFreeDayState,
                    content: [...prevContentState, newTask]
                }
            }
        }
        case EType.RemoveTask:
            const prevFreeDayState = (state[action.payload.dateKey] && state[action.payload.dateKey].isFreeDay) ?? false;
            return {
            ...state,
            [action.payload.dateKey]: {
                isFreeDay: prevFreeDayState,
                content : state[action.payload.dateKey].content.filter((task) => task.id !== action.payload.id),
            }
        };
        case EType.ToggleFreeDay:
            const prevContentState = (state[action.payload.dateKey] && state[action.payload.dateKey].content) ?? [];
            return {
                ...state,
                [action.payload.dateKey]: {
                    isFreeDay: action.payload.isFreeDay,
                    content: prevContentState
                }
            }
        default: return state;
    }
};
