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
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer} from 'react-toastify';
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";


function App() {
   return (
      <div className="max-w-7xl mx-auto px-12">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/appointment" element={
               <RequireAuth>
                  <Appointment />
               </RequireAuth> }
                />
            <Route path="/dashboard" element={
               <RequireAuth>
                  <Dashboard />
               </RequireAuth> }>
                  <Route index element={<MyAppointment></MyAppointment>}></Route>
                  <Route path="/dashboard/review" element={<MyReview />}></Route>
               </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
         </Routes>
         <ToastContainer />

      </div>
   );
}

export default App;
