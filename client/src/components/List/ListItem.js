import React from "react";
import "./style.css"; 

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
