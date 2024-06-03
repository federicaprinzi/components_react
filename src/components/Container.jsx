import React, { useState } from "react";

const Container = ({ children, title }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="container">
      <div className="title" onClick={toggleCollapse}>
        {title}
      </div>
      {!isCollapsed && <div className="content">{children}</div>}
    </div>
  );
};

export default Container;
