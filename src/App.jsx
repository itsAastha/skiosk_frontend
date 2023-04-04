import { Routes, Route, Navigate } from "react-router-dom";
import React, {useEffect} from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Kiosk from "./pages/Kiosk";
import Help from "./pages/Help";
import PageNotFound from "./pages/PageNotFound"
import KioskList from "./pages/Kiosklist";
import Scheme from "./pages/Scheme";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/kiosk" element={<Kiosk/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/kiosklist" element={<KioskList/>}/> 
        <Route path="/scheme" element={< Scheme/>}/> 
      </Routes>
    </div>
  );
}
export default App;
