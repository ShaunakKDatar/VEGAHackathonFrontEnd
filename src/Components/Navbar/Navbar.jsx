import './Navbar.css'
const Navbar=()=>{
    return(
      <div className="navbar">
          <div className="left">
            <div className="company">
          <a href="/"><img src="" alt="" /></a>
          <p>company</p>
          </div>
          <ul>
            <li href="#"><a href='/home'>Home</a></li>
            <li href="#"><a href='/calender'>Calender</a></li>
            <li href="#"><a href='/placement'>Placement</a></li>
            <li href="#"><a href='/forum'>Forum</a></li>
          </ul>
          </div>
          <div className="profile">
            <img src="" alt="" />
            <p>User</p>
          </div>
      </div>
    );
}

export default Navbar;