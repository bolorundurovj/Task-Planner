import React from "react";
import { IoMdClose } from "react-icons/io";
import { useModal } from "../../context/ModalProvider";

const ModalClose = () => {
    const { handleDateNavClickClose } = useModal();

    return (
        <div
            className="modal_close_wrapper"
            onClick={handleDateNavClickClose}
        >
            <IoMdClose className="text-gray-600 text-xl lg:text-3xl" />
        </div>
    );
};

export default ModalClose;
