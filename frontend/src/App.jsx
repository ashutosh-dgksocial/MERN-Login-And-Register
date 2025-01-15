// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
