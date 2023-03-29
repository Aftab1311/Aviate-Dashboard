import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from "../styles/AviateDashboardSessions.module.css";

const AviateDashboardSessions = ({ entries }) => {
  return (
    <div className={styles.dashcontainer}>
      <span className={styles.hamburger}>
        <BsThreeDotsVertical />
      </span>
      <div className={styles.ImgBox}>
        <img src="/assets/session.png" alt="photu" />
      </div>
      <header>
        <h3>Suggested Sessions</h3>
        <a href="#">See all</a>
      </header>
      <table className={styles.SuggestionTable} cellSpacing={0}>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className={styles.content}>
                <h3>{entry.title}</h3>
                <h6>{entry.date}</h6>
                <h4>{entry.time}</h4>
              </td>
              <td className={styles.enrollbtn}>
                <button>Enroll Now</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AviateDashboardSessions;
