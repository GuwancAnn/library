import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  const [innerModalOpen, setInnerModalOpen] = useState(false);

  const handleInnerModalClose = () => {
    setInnerModalOpen(false);
  };

  const handleOuterClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return isOpen ? (
    <div className="modal-overlay" onClick={handleOuterClick}>
      <div className="modal">
        <h2>Outer Modal</h2>
        <button onClick={() => setInnerModalOpen(true)}>
          Open Inner Modal
        </button>
        <button onClick={onClose}>Close Outer Modal</button>
        {innerModalOpen && (
          <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            <div className="modal">
              <h2>Inner Modal</h2>
              <button onClick={() => setInnerModalOpen(false)}>
                Close Inner Modal
              </button>
              <button onClick={() => console.log("Action inside Inner Modal")}>
                Action Button
              </button>
              <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
                <div className="modal">
                  <h2>Inner Inner Modal</h2>
                  <button onClick={handleInnerModalClose}>
                    Close Inner Inner Modal
                  </button>
                  <button
                    onClick={() =>
                      console.log("Action inside Inner Inner Modal")
                    }
                  >
                    Action Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : null;
};
export default Modal;
