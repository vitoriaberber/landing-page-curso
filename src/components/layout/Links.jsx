import React from "react";
import { Link } from "react-router-dom";

const Links = ({ to, texto }) => {
  return <Link to={to}>{texto}</Link>;
};

export default Links;
