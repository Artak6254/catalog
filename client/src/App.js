import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Admin from "./pages/Admin";
import AdminAdd from "./components/AdminAdd";
import UpdateBtn from "./pages/UpdateBtn";
import AddAddminBtn from "./pages/AddAddminBtn";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/adminadd" element={<AdminAdd />} />
        <Route path="/admin/updatebtn" element={<UpdateBtn />} />
        <Route path="/admin/updatebtn/addaddminbtn" element={<AddAddminBtn />} />
      </Routes>
    </div>
  );
}

export default App;
