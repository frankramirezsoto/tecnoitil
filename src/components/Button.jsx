import React from "react";

const Button = ({ name, link, onClick, className }) => {
  return (
    <a
      className={`text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l 
      focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium .
      rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 cursor-pointer
      ${className}`}
      onClick={onClick}
      href={link}
    >
      {name}
    </a>
  );
};

export default Button;
