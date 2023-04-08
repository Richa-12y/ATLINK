import React from "react";
import styleWrapper from "./pageWrapper.module.css";

const PageWrapper = ({ pageTilte, children }) => {
  return (
    <div className={styleWrapper["pagewrapper-container"]}>
      <header>{pageTilte}</header>
      <section>{children}</section>
    </div>
  );
};

export default PageWrapper;
