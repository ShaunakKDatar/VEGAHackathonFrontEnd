// import React from "react";
// import MyCalendar from "../Components/MyCalender/MyCalendar";
// import AnnouncementPage from "../Components/Announcements/AnnouncementPage";
// import { useState } from "react";
// import './landingcss.css'

// export default function LandingPage() {
//   // const [displayText, setDisplayText] = useState("");
//   let [isVis,setIsVis]=useState(true);
//   const Click = () => {
//      setIsVis(!isVis)
//     };
//     const component1 = document.querySelector("#ann");
//     const component2 = document.querySelector("#cal");
//     console.log(component1,component2); 

//   if(isVis){
//     component1.style.width = "0vw";
//     component2.style.width = "100vw";
//   }
//   else{
//     component2.style.width = "40vw";
//     component1.style.width = "60vw";
//   }
//   return (
// //     <div className="flex flex-row pt-[70px]">
// //       {isVis?<>
// //       <div style={{ width: "60vw" }}>
// //         <AnnouncementPage/>
// //       </div>
// //       <div onClick={Click} style={{ width: "40vw" }}>
// //         <MyCalendar/>
// //       </div></>:<>
// //       <div class="slide-left" style={{ width: "100vw" }}>
// //         <MyCalendar/>
// //       </div>
// //       <button onClick={Click}> next </button>
// //       </>}
// //     </div>
// <div className="flex flex-row pt-[70px]">
//       <div id="ann" className="component" style={{ width: "60vw" }}>
//         <AnnouncementPage/>
//       </div>
//             <div id="cal" className="component" onClick={Click} style={{ width: "40vw" }}>
//         <MyCalendar/>
//       </div>
//       </div>

//   );
// }

import React, { useState } from "react";
import MyCalendar from "../Components/MyCalender/MyCalendar";
import AnnouncementPage from "../Components/Announcements/AnnouncementPage";
import './landingcss.css'

export default function LandingPage() {
  const [isVis, setIsVis] = useState(true);

  const toggleVisibility = () => {
    setIsVis(!isVis);
  };

  return (
    <div className="flex flex-row pt-[70px]">
      <div id="ann" className="component" style={{ width: isVis ? "60vw" : "0" }}>
        <AnnouncementPage />
      </div>
      <div id="cal" className="component" onClick={toggleVisibility} style={{ width: isVis ? "40vw" : "100vw" }}>
        <MyCalendar />
      </div>
    </div>
  );
}
