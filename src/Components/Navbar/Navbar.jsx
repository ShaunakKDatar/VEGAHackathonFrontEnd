import './Navbar.css'
import { useState } from 'react';
const Navbar=()=>{
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return(
      <div className="navbar bg-tertiary">
          <div className="left">
            <div className="companyname">
          <a href="/"><img src={"discord.png"} alt="" /></a>
          <p>COMPANY</p>
          </div>
          <ul>
            <li href="#"><a href='/home'>Home</a></li>
            <li href="#"><a href='/calender'>Calender</a></li>
            <li href="#"><a href='/placement'>Placement</a></li>
            <li href="#"><a href='/forum'>Forum</a></li>
          </ul>
          </div>
          <div className="profile dropdown" onClick={toggleMenu}>
            <img className="img1" src={'photo_default.jpg'} alt="" />
            <p className="" onClick={toggleMenu}>User ⤦</p>
            {isOpen && (
        <div className="menu">
          <div className="dropcontainer">
            <div className="profile">
              <img src={'photo_default.jpg'} alt="" />
              <p className="name">Ghruank</p>
            </div>
            <a href="">My profile</a>
            <div className="line"></div>
            <a href="">Settings</a>
            <a href="">Notification</a>
            <div className="line"></div>
            <a href="">Logout</a>
          </div>
        </div>
      )}
          </div>
      </div>
    );
}

export default Navbar;