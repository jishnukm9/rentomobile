import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Modal from 'react-modal';



// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function ModalWindow({children,closeModal,open,height='auto'}) {

  const customStyles = {
    content: {
      position:'fixed',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:'80%',
      height:height,
    },
  };
  
  
  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={open}
        // onAfterOpen={afterOpenModal}
        onRequestClose={()=> closeModal((val)=>(!val))}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        {/* <button onClick={()=> closeModal((val)=>(!val))}>close</button> */}
        {children}
      </Modal>
    </div>
  );
}

