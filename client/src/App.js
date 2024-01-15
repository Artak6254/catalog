import { Route,Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Admin from "./pages/Admin";
import AdminAdd from "./components/AdminAdd";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/adminadd" element={<AdminAdd />} />
    </Routes>
    </div>
  );
}

export default App;
