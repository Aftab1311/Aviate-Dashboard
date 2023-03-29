import React, { useEffect, useState } from "react";
import styles from "../styles/AviateSidebar.module.css";
import { FiMessageSquare, FiLogOut } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { IoBagOutline } from "react-icons/io5";
import { BiCalendarEvent } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const Aviatesidebar = () => {
  const [active, setActive] = useState("dashboard");

  const handleOnClick = (id) => {
    document.getElementById(active).classList.remove(styles.active);
    document.getElementById(id).classList.add(styles.active);
    setActive(id);
  };

  return (
    <div className={styles.container}>
      <button className={styles.logo}>
        <GiHamburgerMenu />
      </button>
      <div className={styles.options}>
        <button
          className={`${styles.logo} ${styles.active}`}
          id="dashboard"
          onClick={() => handleOnClick("dashboard")}
        >
          <span></span>
          <RxDashboard />
          <span className={styles.caption}>Dashboard</span>
        </button>
        <button
          className={styles.logo}
          id="jobs"
          onClick={() => handleOnClick("jobs")}
        >
          <span></span>
          <IoBagOutline />
          <Link
            href="/JobsPortal"
            style={{ textDecoration: "none", color: "white" }}
          >
            <span className={styles.caption}>My Jobs</span>
          </Link>
        </button>
        <button
          className={styles.logo}
          id="message"
          onClick={() => handleOnClick("message")}
        >
          <span></span>
          <FiMessageSquare />
          <span className={styles.caption}>Messages</span>
        </button>
        <button
          className={`${styles.logo} ${styles.badge}`}
          id="events"
          onClick={() => handleOnClick("events")}
        >
          <BiCalendarEvent />
          <span className={styles.caption}>Upcoming Events</span>
        </button>
      </div>
      <div className={styles.logout}>
        <button className={styles.helpbtn}>Help</button>
        <button className={styles.logo}>
          <FiLogOut />
          <span className={styles.caption}>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Aviatesidebar;
