import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import CalendarNav from "./calendar-nav/CalendarNav";
import DayDetails from "./day-details/DayDetails";
import { useModal } from "../../context/ModalProvider";
import ModalClose from "./ModalClose";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    const { slide } = useModal();
    return <Slide direction={slide} ref={ref} {...props} />;
});

const Modal = () => {
    const { open, navigation, closeModal, slide } = useModal();
    return (
        <div>
            <Dialog
                fullScreen
                open={open} onClose={closeModal}
                TransitionComponent={Transition}
            >
                <ModalClose />
                { slide === "down" && <CalendarNav nav={navigation} /> }
                { slide === "up" && <DayDetails /> }
            </Dialog>
        </div>
    );
};

export default Modal;
