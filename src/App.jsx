import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Context from "./components/pages/context";
import Home from "./components/pages/home";
import NoPage from "./components/pages/no-page";
import React from "react";
import { useState } from "react";

export const UserContext = React.createContext(null);
export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John",
      age: 12,
    },
    {
      id: 2,
      name: "Smit",
      age: 45,
    },
    {
      id: 3,
      name: "Alex",
      age: 65,
    },
    {
      id: 4,
      name: "Jorch",
      age: 23,
    },
  ]);
 
  const updateUser = (newUsers) => {
    setUsers(newUsers);
  };
  
  return (
    <UserContext.Provider value={{ users, updateUser }}>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/context" element={<Context />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}
