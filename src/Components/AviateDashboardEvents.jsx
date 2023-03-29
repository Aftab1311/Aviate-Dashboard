import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from "../styles/AviateDashboardEvents.module.css";

const AviateDashboardEvents = ({ entries }) => {
  return (
    <div className={styles.container}>
      <h1>Upcoming Events</h1>
      <span>
        <BsThreeDotsVertical />
      </span>
      <div className={styles.dashcontainer}>
        <select name="cars" id="cars">
          <option>August,2022</option>
        </select>
        <table className={styles.EventTable}>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index} className={styles.card}>
                <td className={styles.ImgBox}>
                  <img src={entry.Imgsrc} alt="logo" />
                  <caption>{entry.caption}</caption>
                </td>
                <td className={styles.title}>
                  <span></span>
                  <div>
                    <h3>{entry.title}</h3>
                    <h4>{entry.date}</h4>
                    <h3>{entry.time}</h3>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AviateDashboardEvents;
