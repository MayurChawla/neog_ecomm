import {Routes, Route, Link} from "react-router-dom";
import Home from "./Pages/Home/Home";
import MockApi from "./Pages/MockApi/MockApi";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/mock" element={<MockApi/>} />
      </Routes>
    </div>
  );
}

export default App;
