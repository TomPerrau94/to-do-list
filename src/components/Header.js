import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ className, title }) => {
  return (
    <div className={className}>
      <FontAwesomeIcon icon="list-alt" />
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
