import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TopScroll from "./TopScroll";
import SuterusuLP from "../Views/SuterusuLP";

const RoutesProvider = () => {
  return (
    <>
      <BrowserRouter>
        <TopScroll>
          <Routes>
            <Route path="/" exact element={<SuterusuLP />} />
            <Route path="/home" exact element={<Navigate to="/" replace />} />
          </Routes>
        </TopScroll>
      </BrowserRouter>
    </>
  );
};

export default RoutesProvider;
