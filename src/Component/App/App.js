import "./App.css";
import Main from "../Main/Main";
import ChooseHotels from "../ChooseHotels/ChooseHotels";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/hotels" element={<ChooseHotels />} />
      </Routes>
    </Router>
  );
}

export default App;