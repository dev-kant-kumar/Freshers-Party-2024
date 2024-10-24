import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/event" element={<Home />} />
          <Route exact path="/about" element={<Home />} />
          <Route exact path="/register" element={<Home />} />
          <Route exact path="/verify" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
