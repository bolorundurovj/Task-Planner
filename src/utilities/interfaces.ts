export type Nav = "day" | "months" | "years";

export enum EPriority {
    HIGH = "A",
    MEDIUM = "B",
    LOW = "C",
}

export enum EType {
    AddTask,
    RemoveTask,
    ToggleFreeDay
}

export type Action = {
    type: EType.AddTask;
    payload: {
        dateKey: string;
        values: {
            task: string;
            priority: EPriority;
        }
    }
} | {
    type: EType.RemoveTask;
    payload: {
        dateKey: string;
        id: string;
    }
} | {
    type: EType.ToggleFreeDay;
    payload: {
        dateKey: string;
        isFreeDay: boolean;
    }
}

export interface ITask {
    id: string;
    task: string;
    priority: EPriority;
}

export interface IDataStore {
    [key: string]: {
        isFreeDay: boolean;
        content: ITask[];
    }
}
