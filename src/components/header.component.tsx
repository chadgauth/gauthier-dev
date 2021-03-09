import React from "react";
import "./header.css";

export const HeaderComponent: React.FC<{ name:string, summary:string }> = ({
    name = "",
    summary = "",
}) => (
  <header>
    <div id="name">{{ name }}</div>
    <div id="summary">{{ summary }}</div>
  </header>
);
