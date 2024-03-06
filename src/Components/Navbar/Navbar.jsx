import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar bg-tertiary flex items-center justify-around">

        <div className="companyname flex flex-col items-center justify-center">
          <a href="/">
            <img src={"discord.png"} alt="" width={'50px'} />
          </a>
          <p>COMPANY</p>
        </div>
        <ul className="flex gap-[10px]">
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

      <div className="profile dropdown flex" onClick={toggleMenu}>
        <img className="img1 rounded-full" width={'50px'} src={"photo_default.jpg"} alt="" />
        <p className="" onClick={toggleMenu}>
          User ⤦
        </p>
        {isOpen && (
          <div className="menu absolute top-[70px] bg-tertiary">
            <div className="dropcontainer">
              <div className="profile">
                {/* <img src={"photo_default.jpg"} alt="" width="40px" /> */}
                <p className="name">Ghruank</p>
              </div>
              <a href="">My profile</a>
              <div className="line"></div>
              <a href="">Settings</a>
              <a href="">Notification</a>
              <div className="line"></div>
              <Link to="/login">login</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
