import React from "react";
import styles from "../styles/AviateDashboard.module.css";
import AviateDashboardSessions from "./AviateDashboardSessions";
import AviateDashboardSuggestion from "./AviateDashboardSuggestion";
import AviateDashboardJobs from "./AviateDashboardJobs";
import AviateDashboardEvents from "./AviateDashboardEvents";

const AviateDashboard = () => {
  const tableEntries = [
    {
      title: "Senior Product Designer",
      companyName: "Techmint , On-site ",
      location: "Bangalore, India",
      salary: "₹ 50k - ₹ 70k",
      per: "per month",
      status: "Rejected",
      chances: " ",
      Imgsrc: "/assets/techm.png",
    },
    {
      title: "Senior Product Designer",
      companyName: "Unacademy  , work from home",
      location: "Bangalore, India",
      salary: "₹ 60k - ₹ 80k",
      per: "per month",
      status: "In Process",
      chances: "70% Chances ",
      Imgsrc: "/assets/unacademy.png",
    },
    {
      title: "Senior Product Designer",
      companyName: "Udemy , On-site ",
      location: "Bangalore, India",
      salary: "₹ 60k - ₹ 75k",
      per: "per month",
      status: "Selected",
      chances: " ",
      Imgsrc: "/assets/udemy.png",
    },
  ];
  const jobEntries = [
    {
      title: "UX Designer",
      companyName: "Avalon Meta , Mumbai ",
      period: "3 Weeks Ago",
      applicants: "100 Applicants",
      Imgsrc: "/assets/avalon.png",
    },
    {
      Imgsrc: "/assets/cred.png",
      title: "UX Designer",
      companyName: "CRED , Bengaluru ",
      period: "1 Week Ago",
      applicants: "12 Applicants",
    },
  ];
  const Sessions = [
    {
      title: "Mock Interview",
      date: "24th August , 2022",
      time: "(9:00 AM - 11:00 AM)",
    },
    {
      title: "Portfolio Presentation",
      date: "10th Sept , 2022",
      time: "(12:00 AM - 2:00 PM)",
    },
    {
      title: "Technical Round",
      date: "10th Sept , 2022",
      time: "(12:00 AM - 2:00 PM)",
    },
  ];
  const upcomingEvents = [
    {
      title: "Portfolio Presentation",
      date: "Tomorrow",
      time: "9:00 AM - 11:00 AM",
      Imgsrc: "/assets/pesto.png",
      caption: "Pesto",
    },
    {
      title: "Group Discussion",
      date: "25th August, 2022",
      time: "9:00 AM - 10:00 AM",
      Imgsrc: "/assets/vern.png",
      caption: "Vernacular.Ai",
    },
    {
      title: "Mock Interview Session 1",
      date: "29th August, 2022",
      time: "2:00 PM - 4:00 PM",
      Imgsrc: "/assets/groww.png",
      caption: "Groww",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <div style={{ gridColumnStart: "1", gridColumnEnd: "3" }}>
        <AviateDashboardSuggestion entries={tableEntries} />
      </div>
      <div style={{ gridColumnStart: "3", gridColumnEnd: "4" }}>
        <AviateDashboardSessions entries={Sessions} />
      </div>
      <div style={{ gridColumnStart: "1", gridColumnEnd: "3" }}>
        <AviateDashboardJobs entries={jobEntries} />
      </div>
      <div style={{ gridColumnStart: "3", gridColumnEnd: "4" }}>
        <AviateDashboardEvents entries={upcomingEvents} />
      </div>
    </div>
  );
};

export default AviateDashboard;
