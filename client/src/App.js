import { Route, Routes } from "react-router-dom";
import Home from "./componants/pages/Home";
import Auth from "./componants/pages/Auth";
import "./componants/styles/App.css";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
