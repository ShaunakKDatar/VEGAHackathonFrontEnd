import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import QueryForum from "../Components/QueryForum";


export default function Root() {
    return (
      <>
      
        {/* <Navbar/>
        <Outlet/> */}
        <QueryForum/>
        
      </>
    );
  }