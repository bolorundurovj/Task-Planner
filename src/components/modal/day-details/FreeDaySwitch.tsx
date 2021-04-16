import React from 'react';
import { useDataStore } from "../../../context/DataProvider";
import { EType } from "../../../utilities/interfaces";

interface ICheckboxProps {
    dateKey: string;
    isFreeDay: boolean;
}

const FreeDaySwitch: React.FC<ICheckboxProps> = ({ dateKey, isFreeDay }) => {
    const { dispatch } = useDataStore();

    const handleChange = (checked: boolean) => {
        const payload = {
            dateKey,
            isFreeDay: checked
        }
        dispatch({ type: EType.ToggleFreeDay, payload })
    }

    return (
        <div className="free_day_wrapper lg:mb-8">
            <input
                    type="checkbox"
                    name="free-day"
                    className="free_day_checkbox"
                    checked={isFreeDay}
                    onChange={e => handleChange(e.target.checked)}
                />
            <label className="checkbox_label">{}</label>
        </div>


    );
};

export default FreeDaySwitch;
