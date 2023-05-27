import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addMovie" element={<AddMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
