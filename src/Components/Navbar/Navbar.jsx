import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import  { UserDataContext } from "../../Context/UserData";
import { IoIosLogIn } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import './Navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useContext(UserDataContext);
  console.log(data);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar bg-tertiary ">

        <div className="companyname">
          <a href="/">
            <img src={"discord.png"} alt="" width={'50px'} />
          </a>
          <p>COMPANY</p>
        </div>
        <ul className="flex gap-[20px]">
          <li href="#">
            <a href="/home">Home</a>
          </li>
          <li href="#">
            <a href="/calender">Calender</a>
          </li>
          <li href="#">
            <a href="/placement">Placement</a>
          </li>
          <li href="#">
            <a href="/forum">Forum</a>
          </li>
        </ul>

      <div className="profile dropdown"  onClick={toggleMenu}>
        <img className="img1 rounded-full" width={'50px'} src={"photo_default.jpg"} alt="" />
        <p className="cursor-pointer" onClick={toggleMenu}>
          {(localStorage.getItem("X-auth-token"))?data.userData.username:"User"} ⤦
        </p>
        {isOpen && (
          <div className="menu">
            <div className="dropcontainer">
              <div className="profile">
                <img src={"photo_default.jpg"} alt="" width="40px" />
                <p className="name">Ghruank</p>
              </div>
              <a href="">My profile</a>
              <div className="line"></div>
              <div className="flex justify-center items-center">
              <a href="">Settings  </a><IoIosSettings />
              </div>
              <div className="flex justify-center items-center">
              <a href="">Notification  </a><IoIosNotifications />
              </div>

              <div className="line"></div>
              <Link to="/login" className="cursor-pointer" >{(localStorage.getItem("X-auth-token"))?"Logout":"Login"}</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
