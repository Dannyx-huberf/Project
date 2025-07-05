// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainShit from "./pages/MainShit";
import Success from "./components/Success";
import Email from "./components/Email";

function App() {
  return (
    <Router basename="/project">
      <Routes>
        <Route path="/" element={<MainShit />} />
        <Route path="/success" element={<Success />} />
        <Route path="/email" element={<Email />} />
      </Routes>
    </Router>
  );
}

export default App;
