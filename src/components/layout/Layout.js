import React from "react";

const Layout = (props) => {
  return (
    <React.Fragment>
      <main>
        <div className="container">{props.children}</div>
      </main>
    </React.Fragment>
  );
};

export default Layout;
