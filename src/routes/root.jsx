import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import MyCalendar from "../Components/Calender-Zoher/Calender-Zoher";


export default function Root() {
    return (
      <>

        <Navbar/>
        <Outlet/>
        
      </>
    );
  }