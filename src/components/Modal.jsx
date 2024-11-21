import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90vw] h-[90vh] p-6 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-[3rem] me-5"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <div className="overflow-y-auto h-[calc(100%-3rem)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
