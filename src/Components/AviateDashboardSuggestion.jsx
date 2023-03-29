import React from "react";
import { TbCircleFilled } from "react-icons/tb";
import { BsQuestionCircle } from "react-icons/bs";
import styles from "../styles/AviateDashboardSuggestion.module.css";

const AviateDashboardSuggestion = ({ entries }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Dashboard </h1>
        <div className={styles.status}>
          <h3>Job search status</h3>
          <span>
            <select className={styles.dropdown}>
              <option value="active">Actively Interviewing</option>
            </select>
            <span className={styles.active}>
              <TbCircleFilled />
            </span>
          </span>
        </div>
      </header>
      <div className={styles.dashContainer}>
        <div className={styles.head}>
          <h3>Applications</h3>
          <a href="#">See all</a>
        </div>
        <table className={styles.Cards}>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index} className={styles.card}>
                <td className={styles.imgBox}>
                  <img src={entry.Imgsrc} alt="Company Logo" />
                </td>
                <td className={styles.orgName}>
                  <h5>{entry.title}</h5>
                  <p>{entry.companyName}</p>
                  <h6>{entry.location}</h6>
                </td>
                <td className={styles.salary}>
                  <h5>{entry.salary}</h5>
                  <p>{entry.per}</p>
                </td>
                <td className={styles.status}>
                  <h5
                    style={{
                      color:
                        entry.status === "Rejected"
                          ? "#AF0808"
                          : entry.status === "In Process"
                          ? "#AE9407"
                          : "#00A324",
                      background:
                        entry.status === "Rejected"
                          ? "#FFAAAA"
                          : entry.status === "In Process"
                          ? "#FFF3B2"
                          : "#C4FFD1",
                    }}
                  >
                    {entry.status}
                  </h5>
                  <p>{entry.chances}</p>
                </td>
                {entry.status === "Rejected" ? (
                  <td className={styles.query}>
                    <BsQuestionCircle />
                  </td>
                ) : (
                  ""
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AviateDashboardSuggestion;
