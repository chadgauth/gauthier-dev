import React from "react";
import "./button.css";
import { ButtonProps } from "./ButtonProps.interface";

// eslint-disable-next-line import/prefer-default-export
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  backgroundColor,
  label,
  src,
  alt,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
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
