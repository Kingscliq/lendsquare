import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Alert = () => {
  return (
    <ToastContainer
      bodyStyle={{ fontFamily: '"Work Sans", sans-serif' }}
      position="top-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      icon
      pauseOnFocusLoss
      draggable
      pauseOnHover
      closeButton={NotifCloseIcon}
      theme="light"
      limit={1}
    />
  );
};

const NotifCloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 7.5L12 12M12 12L7.5 16.5M12 12L16.5 16.5M12 12L16.5 7.5"
      stroke="#999CA0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Alert;
