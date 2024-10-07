import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Promises from "./pages/Promises";
import Politician from "./pages/Politician";
import Login from "./pages/Login";
import AddPromises from "./pages/AddPromises";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promises" element={<Promises />} />
          <Route path="/politician" element={<Politician />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addpromises" element={<AddPromises />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
