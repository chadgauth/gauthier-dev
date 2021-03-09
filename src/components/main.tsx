import React from "react";

import "./header.css";
import { MainProps } from "./MainProps";

export const Header: React.FC<MainProps> = ({ description }: MainProps) => {
  return <main>{{ description }}</main>;
};
