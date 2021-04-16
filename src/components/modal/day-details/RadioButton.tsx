import React from 'react';
import cx from "classnames";
import { Field } from "formik";
import { EPriority } from "../../../utilities/interfaces";

interface IRadioProps {
    value: EPriority;
    checked: boolean;
}

const RadioButton: React.FC<IRadioProps> = ({ value, checked, children}) => {
    const labelClassNames = cx("relative, inline-flex items-center mr-6 font-semibold lg:mr-8 lg:text-2xl cursor-pointer", {
        "text-red-600": value === EPriority.HIGH,
        "text-yellow-600": value === EPriority.MEDIUM,
        "text-green-600": value === EPriority.LOW,
    })

    const radioClassNames = cx("radio_button", {
        "border-red-600": value === EPriority.HIGH,
        "border-yellow-600": value === EPriority.MEDIUM,
        "border-green-600": value === EPriority.LOW,
        "radio_button_checked": checked,
        "bg-red-600": checked && value === EPriority.HIGH,
        "bg-yellow-600": checked && value === EPriority.MEDIUM,
        "bg-green-600": checked && value === EPriority.LOW,
    })

    return (
        <label className={labelClassNames}>
            <Field
                className="opacity-0 absolute"
                type="radio"
                name="priority"
                value={value}
            />
            <div className={radioClassNames} />
            {children}
        </label>
    );
};

export default RadioButton;
