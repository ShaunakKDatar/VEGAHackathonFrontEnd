import React from "react";
import MyCalendar from "../Components/MyCalender/MyCalendar";
import AnnouncementPage from "../Components/Announcements/AnnouncementPage";

export default function LandingPage() {
  return (
    <div className="flex flex-row pt-[70px]">
      <div style={{ width: "60vw" }}>
        <AnnouncementPage />
      </div>
      <div style={{ width: "40vw" }}>
        <MyCalendar />
      </div>
    </div>
  );
}