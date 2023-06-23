import React, { useState } from "react";

import Sidebar from "./Components/Sidebar";

import Dashboard from "./Components/Dashboard/Dashboard";
import Balance from "./Components/Balance/Balance";
import Cashflow from "./Components/Cashflow/Cashflow";
import Wishlist from "./Components/Wishlist/Wishlist";
import { Route, Routes } from "../node_modules/react-router-dom/dist/index";
import { User } from "./Types";
import axios from "../node_modules/axios/index";

type Props = {};

function App({}: Props) {
  const [refreshUser, setRefreshUser] = useState<Number>(0);
  const [user, setUser] = useState<User | null>(null);
  useState(() => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => setUser(response.data[0]))
      .catch((e) => console.log(e));
  }, [refreshUser]);

  return (
    <>
      <Sidebar
        username={user?.username}
        profilePicture={user?.profilePicture}
      ></Sidebar>
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
