import React from "react";

import {
  ModalProvider,
  ModalConsumer,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Modal
} from "./lib";

function App() {
  const MyModel = (
    <Modal width="80%" roundCorners>
      <ModalHeader closeButton>Add you personal information below</ModalHeader>
      <ModalBody>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <input style={{ padding: "10px", width: "350px" }} placeholder="Name" />
        <br />
        <input style={{ padding: "10px", width: "400px" }} placeholder="Age" />
      </ModalBody>
      <ModalFooter>
        <div>
          <button
            style={{ padding: "10px", float: "right" }}
            onClick={() => alert("Adding infor")}
          >
            Add Info
          </button>
          <button style={{ padding: "10px" }}>Cancel</button>
        </div>
      </ModalFooter>
    </Modal>
  );

  return (
    <ModalProvider>
      <div className="App">
        <h3>Some app content</h3>

        <ModalConsumer>
          {({ isOpen, openModal, closeModal }) => {
            return (
              <button
                onClick={() => {
                  isOpen && closeModal();
                  !isOpen && openModal(MyModel);
                }}
              >
                {isOpen ? "Close Modal" : "Open Modal"}
              </button>
            );
          }}
        </ModalConsumer>
      </div>
    </ModalProvider>
  );
}

export default App;
