import "./App.css";
import Aboutpage from "./routes/Aboutpage";
import Dashboard from "./routes/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div className="max-h-screen font-ubuntu w-screen font-bold flex">
      <Sidebar />
      <div className="flex-1 bg-gray-200 border-2 overflow-y-scroll">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<Aboutpage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
