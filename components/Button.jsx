import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-secondary border border-secondary p-3 rounded-full text-white hover:bg-background hover:text-secondary duration-200 ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
