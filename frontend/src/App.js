import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import Login from "./pages/Login";
import Signup from "./pages/Singup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/addMovie" element={<AddMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
