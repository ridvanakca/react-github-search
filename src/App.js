import "./App.css";
import Navbar from "./components/Layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Repositories from "./pages/Repositories";
import About from "./pages/About";
import Issues from "./pages/Issues";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <Navbar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Repositories />} />
          <Route path='/repositories' element={<Repositories />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/issues' element={<Issues />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
