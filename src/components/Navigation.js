import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <span> </span>
      <Link to="/about">about</Link>
    </div>
  );
};
