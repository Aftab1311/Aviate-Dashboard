import React from "react";
import styles from "../styles/AviateNav.module.css";
import { FiMessageSquare, FiSearch } from "react-icons/fi";
import { HiOutlineBell } from "react-icons/hi";
import { TfiMedallAlt } from "react-icons/tfi";
import AviateLogo from "./AviateLogo";

const AviateNav = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>
        {/* <img src='https://i.imgur.com/6VBx3io.png' alt='logo' /> */}
        <span>
          <AviateLogo />
        </span>
      </div>

      <div className={styles.navbarSearch}>
        <span>
          <FiSearch />
        </span>
        <input type="text" placeholder="Type for Search" />
      </div>
      <div className={styles.logo}>
        <span className={styles.message}>
          <FiMessageSquare />
        </span>
        <span className={styles.bellicon}>
          <HiOutlineBell />
        </span>
        <span className={styles.reward}>
          <TfiMedallAlt />
        </span>
      </div>

      <div className={styles.navbarProfile}>
        <img src="/assets/avatar.png" alt="profile" />
        {/* <span></span> */}

        <div className={styles.navbarProfileName}>
          <h3>Akash Mishra</h3>
          <button>Edit My Profile</button>
        </div>
      </div>
    </div>
  );
};

export default AviateNav;
