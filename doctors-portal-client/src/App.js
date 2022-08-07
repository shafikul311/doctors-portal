import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

import {
   BrowserRouter,
   Routes,
   Route,
 } from "react-router-dom";


function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={ <Home></Home>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/appointment" element={ <Appointment></Appointment>} />
            
            <Dashboard></Dashboard>
            <Login></Login>
         </Routes>
         
      </div>
   );
}

export default App;
