import { Routes, Route } from "react-router-dom";
import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Kiosk from "./pages/Kiosk";
import Help from "./pages/Help";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/kiosk" element={<Kiosk/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/help" element={<Help/>}/>
      </Routes>
    </div>
  );
}
export default App;
