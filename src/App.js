import Category from "./componetns/Category";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Category/>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
