import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";

const RootRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default RootRoute;
