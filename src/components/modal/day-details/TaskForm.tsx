import React from "react";
import { Field, Form, Formik } from "formik";
import cx from "classnames";
import RadioButton from "./RadioButton";
import { useDataStore } from "../../../context/DataProvider";
import { EPriority, EType } from "../../../utilities/interfaces";

const validateTaskName = (value: string) => {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
};

const TaskForm: React.FC<{ dateKey: string }> = ({ dateKey }) => {
    const { dispatch } = useDataStore();
    const initialValue = { task: "", priority: EPriority.LOW }

    return (
        <div>
            <Formik
                initialValues={ initialValue }
                onSubmit={(values, { resetForm }) => {
                    resetForm();
                    const payload = {
                        dateKey,
                        values
                    }
                    dispatch({ type: EType.AddTask, payload});
                }}
                validateOnBlur={false}
                validateOnChange={false}
            >
                {({
                      values,
                      errors,
                      // touched,
                      handleChange,
                      handleBlur,
                  }) => {
                    const inputClasses = cx("form_input focus:outline-none focus:bg-white", {
                        'bg-gray-200 border-gray-200': !errors.task,
                        'bg-red-100 border border-2 border-red-300': errors.task
                    });

                    return (
                        <Form autoComplete="off" className="mb-8  lg:mb-12">
                            <div className="flex justify-between mb-4 lg:mb-8">
                                <Field
                                    className={inputClasses}
                                    type="text"
                                    name="task"
                                    validate={validateTaskName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.task}
                                    placeholder="Add Task"
                                />
                                <button
                                    type="submit"
                                    className="form_submit_button hover:bg-gray-100 focus:outline-none"
                                >
                                    Add
                                </button>
                            </div>
                            <div>
                                <RadioButton value={EPriority.HIGH} checked={values.priority === EPriority.HIGH}>
                                    High
                                </RadioButton>
                                <RadioButton value={EPriority.MEDIUM} checked={values.priority === EPriority.MEDIUM}>
                                    Medium
                                </RadioButton>
                                <RadioButton value={EPriority.LOW} checked={values.priority === EPriority.LOW}>
                                    Low
                                </RadioButton>
                            </div>
                        </Form>
                    )
                }
                }
            </Formik>
        </div>
    );
};

export default TaskForm;
