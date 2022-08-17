import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

import {
   Routes,
   Route,
 } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import SignUp from "./Pages/Login/SignUp";


function App() {
   return (
      <div className="max-w-7xl mx-auto px-12">
         <Navbar/>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/appointment" element={<Appointment/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
         </Routes>
         
      </div>
   );
}

export default App;
