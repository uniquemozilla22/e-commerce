"use client";
import React from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  icon?: any;
}

const InputComponent: React.FC<InputProps> = (props) => {
  return (
    <div className="flex place-items-center bg-input-background dark:bg-input-dark-background p-2 rounded-sm">
      {props.icon && props.icon}
      <input
        className="bg-input-background dark:bg-input-dark-background p-2 w-full focus:outline-none"
        {...props}
      />
    </div>
  );
};

export default InputComponent;
