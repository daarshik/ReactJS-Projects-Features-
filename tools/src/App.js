import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Progress from "./pages/progressBar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Progress />} />
      </Routes>
    </Router>
  );
}

export default App;
