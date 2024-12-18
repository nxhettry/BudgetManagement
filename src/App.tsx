import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./routes/dashboard/dashboard";
import Reportpage from "./routes/reports/reports";
import Entrypage from "./routes/entry/createentry";

function App() {
  return (
    <div className="max-h-screen font-ubuntu w-screen font-bold flex">
      <Sidebar />
      <div className="flex-1 bg-gray-200 border-2 overflow-y-scroll">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/entry" element={<Entrypage />} />
            <Route path="/reports" element={<Reportpage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
