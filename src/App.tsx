import React from 'react';
import './styles/main.css';
import Calendar from "./components/calendar/Calendar";
import Modal from "./components/modal/Modal";
import { DateProvider } from "./context/DateProvider";
import { ModalProvider } from "./context/ModalProvider";
import { DataProvider } from "./context/DataProvider";

function App() {
  return (
      <DateProvider>
          <ModalProvider>
            <DataProvider>
                <Calendar />
                <Modal />
            </DataProvider>
           </ModalProvider>
      </DateProvider>
  );
}

export default App;
