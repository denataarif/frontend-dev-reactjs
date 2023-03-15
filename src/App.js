import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App mx-4 my-2">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
