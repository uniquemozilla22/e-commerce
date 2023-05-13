"use client";
import React from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  icon?: any;
}

const InputComponent: React.FC<InputProps> = (props) => {
  return <input {...props} />;
};

export default InputComponent;
