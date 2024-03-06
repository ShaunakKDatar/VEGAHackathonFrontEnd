import { Outlet } from "react-router-dom";
// import Navbar from "../Components/Navbar/Navbar";
import "./root.css"

export default function Root() {
    return (
      <>
        {/* <Navbar/> */}
        <div>hi</div>
        <Outlet/>
        
      </>
    );
  }