import React from "react";

const Base = ({title = "Users", className, children}) => {
  return (
    <div className="container-fluid">
      <div className={className}>
        {children}
      </div>
    </div>
  );
};

export default Base;
