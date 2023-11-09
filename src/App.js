import { Route, Routes } from "react-router-dom";
import Dropdownlist from "./pages/Dropdownlist";
import Formtextarea from "./pages/Formtextarea";
import Garage from "./pages/Garage";
import Goal from "./pages/Goal";
import Class from "./pages/Class";
import Home from "./pages/Home";
import { Link } from "react-router-dom";


function App() {
  return (
    <>
         <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/class'>Class</Link>
        </li>
        <li>
          <Link to='/dropdownlist'>Dropdownlist</Link>
        </li>
        <li>
          <Link to='/formtextarea'>Formtextarea</Link>
        </li>
        <li>
          <Link to='/garage'>Garage</Link>
        </li>
        <li>
          <Link to='/goal'>Goal</Link>
        </li>
      </ul>
    </nav> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/class" element={<Class />} />
      <Route path="/dropdownlist" element={<Dropdownlist/>} />
      <Route path="/formtextarea" element={<Formtextarea/>} />
      <Route path="/garage" element={<Garage/>} />
      <Route path="/goal" element={<Goal/>} />
    </Routes>
    </>
  );
}

export default App;
