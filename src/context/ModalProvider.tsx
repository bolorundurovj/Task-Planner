import React, { useContext, useState } from "react";
import { getYear } from "date-fns";
import { useDate } from "./DateProvider";
import { Nav } from "../utilities/interfaces";

type Slide = "up" | "left" | "right" | "down";

interface IModalContext {
    open: boolean;
    closeModal: () => void;
    slide: Slide;
    navigation: Nav;
    handleNavClickOpen: (nav: Nav, slide: Slide) => void;
    handleDateNavClickClose: () => void;
}

const ModalContext = React.createContext<IModalContext | undefined>(undefined);

const ModalProvider: React.FC = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [slide, setSlide] = useState<Slide>("up");
    const [navigation, setNavigation] = useState<Nav>("years");
    const { setContextYear } = useDate();

    const handleNavOpen = (nav: Nav, slide: Slide) => {
        setSlide(slide);
        setNavigation(nav);
        setOpen(true);
    }

    const handleDateNavClose = () => {
        if (slide === "down" && navigation === "years") {
            setContextYear(getYear(new Date()));
        }
        setOpen(false);
    }

    const value = {
        open,
        slide,
        navigation,
        closeModal: () => setOpen(false),
        handleNavClickOpen: (nav: Nav, slide: Slide) => handleNavOpen(nav, slide),
        handleDateNavClickClose: handleDateNavClose,
    }
    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
};

const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useDate must be used within a Provider');
    }

    return context;
}

export { ModalProvider, useModal };
