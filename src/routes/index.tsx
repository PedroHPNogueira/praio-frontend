import { Routes, Route, Navigate, useLocation } from "react-router";
import { Wallet } from "../pages/Wallet";

const RoutesMain = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="*" element={<Navigate to="/wallet" />} />
      <Route path="/wallet" element={<Wallet/>} />
    </Routes>
  );
};

export default RoutesMain;
