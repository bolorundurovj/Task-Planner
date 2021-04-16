import React from "react";
import cx from "classnames";
import { AiOutlineDelete } from "react-icons/ai"
import { useDataStore } from "../../../context/DataProvider";
import { EPriority, EType, ITask } from "../../../utilities/interfaces";

interface ITaskListProps {
    dateKey: string;
    tasks: ITask[];
}

const TaskList: React.FC<ITaskListProps> = ({ dateKey, tasks }) => {
    const { dispatch } = useDataStore();

    const taskElement = (priority: string) => {
        return cx("task_list_element", {
            "to-red-300 border-red-300": priority === EPriority.HIGH,
            "to-yellow-300 border-yellow-300": priority === EPriority.MEDIUM,
            "to-green-300 border-green-300": priority === EPriority.LOW,
        });
    }

    const compare = (a: ITask, b: ITask) => {
        const priorityA = a.priority;
        const priorityB = b.priority;

        let comparison = 0;
        if (priorityA > priorityB) {
            comparison = 1;
        } else if (priorityA < priorityB) {
            comparison = -1;
        }
        return comparison;
    }

    const sortedList = tasks.sort(compare);

    return (
        <div>
            <ul>
                {
                    sortedList.map(el => {
                        const payload = {
                            dateKey,
                            id: el.id
                        }
                        return (
                            <li key={el.id} className={taskElement(el.priority)} >
                                <div className="break-all max-w-90p">{el.task}</div>
                                <AiOutlineDelete
                                    className="cursor-pointer"
                                    onClick={() => dispatch({ type: EType.RemoveTask, payload})}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default TaskList;
