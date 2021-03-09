import React from "react";
import "./image.css";

export interface IImage {
  backgroundColor: string,
  label: string,
  icon: string,
  alt: string
}

export const ImageComponent: React.FC<IImage> = ({
  icon,
  alt,
  ...props
}: IImage) => (
    <image
      // src={icon} alt={alt} width="100%"
    />
  );
