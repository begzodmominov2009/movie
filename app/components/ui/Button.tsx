import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${className} rounded-full cursor-pointer 
        bg-white text-sm text-black font-medium`}
    >
      {children}
    </button>
  );
};

export default Button;
