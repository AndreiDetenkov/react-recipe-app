import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../pages/Home";
import Cuisine from "../pages/Cuisine";
import Searched from "../pages/Searched";
import Recipe from "../pages/Recipe";
import {AnimatePresence} from "framer-motion";

const RoutesList = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesList;
