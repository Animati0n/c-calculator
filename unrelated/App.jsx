import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import DataTable from "./components/DataTable";
import Forms from "./components/Forms";
import Login from "./components/Login";
import Home from "./Home";
import Navbar from "./components/Navbar";
import AutoCompleate from "./components/AutoCompleate";
import AddRemoveInputField from "./components/AddRemoveInputField";
import SideMenuBar from "./components/SideMenuBar";
import PageLayout from "./components/Admin/PageLayout";
import Admin from "./components/Admin/Admin";

function App() {
  let options = [
    "Papaya",
    "Persimmon",
    "Paw Paw",
    "Prickly Pear",
    "Peach",
    "Pomegranate",
    "Pineapple",
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Forms />} />
        <Route path="/tabledata" element={<DataTable />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
    // <>
    //   {/* <Navbar /> */}
    //   {/* <div className="flex-wrap w-fit bg-blue-400"> */}
    //     <AutoCompleate options={options} />
    //     {/* <AddRemoveInputField/> */}
    //   {/* </div> */}
    // </>
  );
}

export default App;
