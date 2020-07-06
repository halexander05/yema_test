import React from "react";
import classes from "./Layout.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <main className={["container", classes.mainContainer].join(" ")}>
        {props.children}
      </main>
    </React.Fragment>
  );
};

export default Layout;
