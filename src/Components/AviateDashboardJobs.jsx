import React from "react";
import { BsThreeDotsVertical, BsBookmark } from "react-icons/bs";
import { TbCircleFilled } from "react-icons/tb";
import styles from "../styles/AviateDashboardJobs.module.css";

const AviateDashboardJobs = ({ entries }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header1}>
        <h1>Jobs Recommendations for You</h1>
        <span>
          <BsThreeDotsVertical />
        </span>
      </div>
      <div className={styles.header2}>
        <ul type="disc">
          <li>UX Designer</li>
          <li>₹50k-₹75k</li>
          <li>Mumbai, Bengaluru, pune</li>
        </ul>
        <a href="#">See all</a>
      </div>
      <table className={styles.dashcontainer} cellSpacing={0}>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className={styles.logo}>
                <div>
                  <img src={entry.Imgsrc} alt="logo" />
                </div>
              </td>
              <td className={styles.title}>
                <h3>{entry.title}</h3>
                <h4>{entry.companyName}</h4>
                <p>
                  {entry.period}&nbsp;&nbsp;&nbsp;&nbsp;
                  <TbCircleFilled
                    style={{
                      width: "8.72px",
                      height: "8.72px",
                      color:
                        parseInt(entry.applicants) > 50 ? "#CD4C4E" : "#4EAA65",
                    }}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <span
                    style={{
                      color:
                        parseInt(entry.applicants) > 50 ? "#CD4C4E" : "#4EAA65",
                    }}
                  >
                    {entry.applicants}
                  </span>
                </p>
              </td>
              <td className={styles.btn}>
                <button>Apply Now</button>
                <span>
                  <BsBookmark />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AviateDashboardJobs;
