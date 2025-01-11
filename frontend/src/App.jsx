// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
