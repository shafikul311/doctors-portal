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
import { ToastContainer } from 'react-toastify';
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctor from "./Pages/Dashboard/ManageDoctor";
import Payment from "./Pages/Dashboard/Payment";


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
               </RequireAuth>}
            />
            <Route path="/dashboard" element={
               <RequireAuth>
                  <Dashboard />
               </RequireAuth>}>
               <Route index element={<MyAppointment></MyAppointment>}></Route>
               <Route path="review" element={<MyReview />}></Route>
               <Route path="history" element={<MyHistory />}></Route>
               <Route path="payment/:id" element={<Payment />}></Route>

               <Route path="users" element={<RequireAdmin> <Users /> </RequireAdmin>}></Route>
               <Route path="addDoctor" element={<RequireAdmin> <AddDoctor /> </RequireAdmin>}></Route>
               <Route path="manageDoctor" element={<RequireAdmin> <ManageDoctor /> </RequireAdmin>}></Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
         </Routes>
         <ToastContainer />

      </div>
   );
}

export default App;
