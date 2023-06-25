import React, { useState } from "react";

import Sidebar from "./Components/Sidebar";

import Dashboard from "./Components/Dashboard/Dashboard";
import Balance from "./Components/Balance/Balance";
import Cashflow from "./Components/Cashflow/Cashflow";
import Wishlist from "./Components/Wishlist/Wishlist";
import { Route, Routes } from "../node_modules/react-router-dom/dist/index";
import { Currency, User } from "./Types";
import axios from "../node_modules/axios/index";
import "./App.css";
import Loading from "./Components/Loading";

type Props = {};
export const currencyContext = React.createContext<Currency | null>(null);
function App({}: Props) {
  const [user, setUser] = useState<User | null>(null);
  useState(() => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => setUser(response.data[0]))
      .catch((e) => console.log(e));
  });
  return user ? (
    <>
      <currencyContext.Provider value={user.mainCurrency}>
        <Sidebar
          username={user?.username}
          profilePicture={user?.profilePicture}
        ></Sidebar>
        <div className="main-overlay"></div>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/balance" element={<Balance />}></Route>
          <Route path="/cashflow" element={<Cashflow />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
        </Routes>
      </currencyContext.Provider>
    </>
  ) : (
    <Loading />
  );
}

export default App;
