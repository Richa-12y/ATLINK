import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageWrapper } from "./components";
import About from "./page/about/About";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<PageWrapper pageTilte={"Home"}></PageWrapper>} />
        <Route
          path="dashboard"
          element={<PageWrapper pageTilte={"Dashboard"}></PageWrapper>}
        />
        <Route
          path="orders"
          element={<PageWrapper pageTilte={"Orders"}></PageWrapper>}
        />
        <Route
          path="teammembers"
          element={<PageWrapper pageTilte={"Team Members"}></PageWrapper>}
        />
        <Route
          path="partner"
          element={<PageWrapper pageTilte={"Partner"}></PageWrapper>}
        />
        <Route
          path="productlisting"
          element={<PageWrapper pageTilte={"Product listing"}></PageWrapper>}
        />
        <Route
          path="award"
          element={<PageWrapper pageTilte={"Award"}></PageWrapper>}
        />
        <Route path="aboutus" element={<About />} />
        <Route
          path="paymentinfo"
          element={<PageWrapper pageTilte={"Payment info"}></PageWrapper>}
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
