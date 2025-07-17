import { Outlet } from "react-router-dom";
import SideMenuBar from "../SideMenuBar";
import Navbar from "../Navbar";

const PageLayout = () => (
  <div>
    <div className="h-full bg-blue-700 flex flex-col justify-center w-1/6">
      <SideMenuBar />
    </div>
    <div className="h-full">
      {/* <Navbar /> */}
      <Outlet /> {/* // <-- nested routes rendered here */}
    </div>
  </div>
);
export default PageLayout;
