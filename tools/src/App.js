import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Progress from "./pages/progressBar";
import StepperComp from "./pages/stepper";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/progress" element={<Progress />} />
        <Route path="/" element={<StepperComp />} />
      </Routes>
    </Router>
  );
}

export default App;
