import React from "react";
import "./Button.css";
import { IButton } from "./IButton";

export const Button: React.FC<IButton> = ({
  backgroundColor,
  src,
  alt,
  ...props
}: IButton) => {
  return (
    <button
      type="button"
      className="hex-button"
      style={{ backgroundColor }}
      {...props}
    >
      <img src={src} alt={alt} width="100%" />
    </button>
  );
};
