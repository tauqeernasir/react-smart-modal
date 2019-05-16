# react-easy-modal

Plug-and-play React (portal, hooks and context API) based very elegant, fast and minimal modal.

# Summary

This package uses `Context API` for managing state of modal. It provides access to modal from anywhere in the app using `Provider` and `Consumer`. Just wrap your app with `ModalProvider` and access `isOpen: Boolean, openModal: Function, closeModal: Function` using `ModalConsumer` and manage modals easily.

Additionally, this package also provides `Modal, ModalHeader, ModalBody and ModalFooter` React Components. You can use these components to create your modals. But it's completely optional, you can also pass your own custom built modal components as well.

```
NOTE: Custom modals will not support any default styles, you'll need to do that yourself.
```

# Installation

```bash
# using node package manager
$ npm install --save react-easy-modal

# using yarn package manager
$ yarn add react-easy-modal
```

# Usage

Add another root element beside your `root` or `app` element and name it `'portal'`. It will be used by the portal to insert modal in tree. See an example below

```
<div id='app'></div>
<div id='portal'></div>
```

Once done, follow the rest of the guide.

```jsx
import React from "react";

import {
  ModalProvider,
  ModalConsumer,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Modal
} from "react-easy-modal";

import MyModal from "./MyModal";

function App() {
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

// in MyModal.jsx

const MyModal = () => {
  return (
    <Modal width="80%" roundCorners>
      <ModalHeader closeButton>Add you personal information below</ModalHeader>
      <ModalBody>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <input style={{ padding: "10px", width: "350px" }} placeholder="Name" />
        <br />
        <input style={{ padding: "10px", width: "350px" }} placeholder="Age" />
      </ModalBody>
      <ModalFooter>
        <div>
          <button
            style={{ padding: "10px", float: "right" }}
            onClick={() => alert("Adding info")}
          >
            Add Info
          </button>
          <button style={{ padding: "10px" }}>Cancel</button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default MyModal;
```

# Modal Customization

If you choose to use provided `Modal` by this package. You can customize it in various ways.

## &lt;Modal /&gt;

| props        |            type             | default |
| ------------ | :-------------------------: | ------: |
| width        | css compatible (e.g. px, %) |     60% |
| height       | css compatible (e.g. px, %) |   400px |
| roundCorners |           boolean           |   false |

## &lt;ModalHeader /&gt;

| props     |                 type                  | default |
| --------- | :-----------------------------------: | ------: |
| bg        | css compatible color (e.g hex or rbg) |   white |
| textColor | css compatible color (e.g hex or rbg) |   Black |

## &lt;ModalFooter /&gt;

| props |                 type                  | default |
| ----- | :-----------------------------------: | ------: |
| bg    | css compatible color (e.g hex or rbg) |   white |

## &lt;ModalBody /&gt;

| props    |                 type                  | default |
| -------- | :-----------------------------------: | ------: |
| bg       | css compatible color (e.g hex or rbg) |   white |
| padding  |      css compatible (e.g. px, %)      |    20px |
| overflow |         css compatible value          |    auto |
