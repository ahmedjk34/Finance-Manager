import React from "react";

import Sidebar from "./Components/Sidebar";

import Dashboard from "./Components/Dashboard/Dashboard";
import Balance from "./Components/Balance/Balance";
import Cashflow from "./Components/Cashflow/Cashflow";
import Wishlist from "./Components/Wishlist/Wishlist";
import { Route, Routes } from "../node_modules/react-router-dom/dist/index";

type Props = {};

function App({}: Props) {
  return (
    <>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/balance" element={<Balance />}></Route>
        <Route path="/cashflow" element={<Cashflow />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
      </Routes>
    </>
  );
}

export default App;
