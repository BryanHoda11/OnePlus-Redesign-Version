import { FaGithub } from "react-icons/fa6";
import Home from "./components/Home"
import Store from "./components/Store";
import Phones from "./components/Phones";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {

  function ConditionalHeader() {
    const location = useLocation();
    if (location.pathname === '/') {
      return (
        <div className="xl:flex hidden px-3 items-center justify-center bg-gray-200 w-full text-sm font-bold h-8">
          This is just a redesigned version of the OnePlus Website for my personal learning. Nothing against any original OnePlus designs. Github link <span className="px-2"><FaGithub style={{ fontSize: '21px' }} /></span> :
          <span className="px-3 text-blue-700 underline"><NavLink to="https://github.com/BryanHoda11/OnePlus-Redesign-Version" target='_blank'> Github Link </NavLink></span>
        </div>
      );
    }
    return null;
  }

  return (
    <>
      <Router>
        <ConditionalHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/phone" element={<Phones />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
